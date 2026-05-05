"use client";

import * as THREE from "three";
import { useRef, useEffect, useState, useCallback } from "react";
import { useVolunteerApplication } from "@/components/site-modals-provider";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile("matches" in e ? e.matches : (e as any).matches);

    setIsMobile(mq.matches);

    try {
      mq.addEventListener("change", onChange as any);
      return () => mq.removeEventListener("change", onChange as any);
    } catch {
      mq.addListener(onChange as any);
      return () => mq.removeListener(onChange as any);
    }
  }, [breakpoint]);

  return isMobile;
}

const vertexShader = `void main(){ gl_Position = vec4(position, 1.0); }`;

function makeFragmentShader(tunnelLayers: number, ringPoints: number) {
  return `
uniform float iTime;
uniform vec3 iResolution;

#define TAU 6.2831853071795865
#define TUNNEL_LAYERS ${tunnelLayers}
#define RING_POINTS ${ringPoints}
#define POINT_SIZE 1.8
#define BG_COLOR vec3(0.0353, 0.0353, 0.0431)
#define POINT_COLOR_A vec3(1.0)
#define POINT_COLOR_B vec3(0.6)
#define POINT_COLOR_C vec3(0.25)
#define SPEED 0.7

float sq(float x){ return x*x; }

vec2 AngRep(vec2 uv, float angle){
  vec2 polar = vec2(atan(uv.y, uv.x), length(uv));
  polar.x = mod(polar.x + angle/2.0, angle) - angle/2.0;
  return polar.y * vec2(cos(polar.x), sin(polar.x));
}

float sdCircle(vec2 uv, float r){ return length(uv) - r; }

vec3 MixShape(float sd, vec3 fill, vec3 target){
  float blend = smoothstep(0.0, 1.0/iResolution.y, sd);
  return mix(fill, target, blend);
}

vec2 TunnelPath(float x){
  vec2 offs = vec2(
    0.2 * sin(TAU * x * 0.5) + 0.4 * sin(TAU * x * 0.2 + 0.3),
    0.3 * cos(TAU * x * 0.3) + 0.2 * cos(TAU * x * 0.1)
  );
  offs *= smoothstep(1.0, 4.0, x);
  return offs;
}

void main(){
  vec2 res = iResolution.xy / iResolution.y;
  vec2 uv = gl_FragCoord.xy / iResolution.y - res/2.0;
  vec3 color = BG_COLOR;
  float repAngle = TAU / float(RING_POINTS);
  float pointSize = POINT_SIZE / (2.0 * iResolution.y);
  float camZ = iTime * SPEED;
  vec2 camOffs = TunnelPath(camZ);

  for(int i = 1; i <= TUNNEL_LAYERS; i++){
    float pz = 1.0 - (float(i) / float(TUNNEL_LAYERS));
    pz -= mod(camZ, 4.0 / float(TUNNEL_LAYERS));
    vec2 offs = TunnelPath(camZ + pz) - camOffs;
    float ringRad = 0.15 * (1.0 / sq(pz * 0.8 + 0.4));
    if(abs(length(uv + offs) - ringRad) < pointSize * 1.5){
      vec2 aruv = AngRep(uv + offs, repAngle);
      float pdist = sdCircle(aruv - vec2(ringRad, 0), pointSize);
      float tier = mod(float(i / 2), 3.0);
      vec3 ptColor = (tier < 1.0) ? POINT_COLOR_A : (tier < 2.0) ? POINT_COLOR_B : POINT_COLOR_C;
      float shade = pow(1.0 - pz, 1.4);
      color = MixShape(pdist, ptColor * shade, color);
    }
  }

  gl_FragColor = vec4(color, 1.0);
}
`;
}

type PerfConfig = { tunnelLayers: number; ringPoints: number; dprCap: number };

function getPerfConfig(isMobile: boolean, prefersReducedMotion: boolean): PerfConfig {
  if (prefersReducedMotion) return { tunnelLayers: 24, ringPoints: 32, dprCap: 1 };
  if (isMobile)             return { tunnelLayers: 48, ringPoints: 64, dprCap: 1 };
  return                           { tunnelLayers: 72, ringPoints: 96, dprCap: 1.5 };
}

type ThreeContext = {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.OrthographicCamera;
  material: THREE.ShaderMaterial;
  mesh: THREE.Mesh;
  geometry: THREE.PlaneGeometry;
};

function createThreeForCanvas(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  config: PerfConfig
): ThreeContext {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, config.dprCap));
  renderer.setSize(width, height);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const material = new THREE.ShaderMaterial({
    uniforms: {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector3(width, height, 1) },
    },
    vertexShader,
    fragmentShader: makeFragmentShader(config.tunnelLayers, config.ringPoints),
  });

  const geometry = new THREE.PlaneGeometry(2, 2);
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  return { renderer, scene, camera, material, mesh, geometry };
}

function disposeThree(ctx: ThreeContext) {
  try {
    ctx.scene.remove(ctx.mesh);
    ctx.mesh.geometry.dispose();
    ctx.material.dispose();
    ctx.renderer.dispose();
  } catch {
    // ignore
  }
}

export function HeroSection() {
  const { open } = useVolunteerApplication();
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<ThreeContext | null>(null);
  const lastTimeRef = useRef<number>(0);
  const animRef = useRef<number | null>(null);
  const pausedRef = useRef<boolean>(false);
  const rafResizeRef = useRef<boolean>(false);
  const isMobile = useIsMobile();

  const animate = useCallback((time: number) => {
    if (!ctxRef.current) return;
    animRef.current = requestAnimationFrame(animate);
    time *= 0.001;
    if (pausedRef.current) {
      lastTimeRef.current = time;
      return;
    }
    const delta = time - (lastTimeRef.current || time);
    lastTimeRef.current = time;
    ctxRef.current.material.uniforms.iTime.value += delta * 0.5;
    ctxRef.current.renderer.render(ctxRef.current.scene, ctxRef.current.camera);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section || typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const config = getPerfConfig(isMobile, prefersReducedMotion);

    const width = section.clientWidth;
    const height = section.clientHeight;
    const ctx = createThreeForCanvas(canvas, width, height, config);
    ctxRef.current = ctx;

    const handleResize = () => {
      if (!ctxRef.current || rafResizeRef.current) return;
      rafResizeRef.current = true;
      requestAnimationFrame(() => {
        rafResizeRef.current = false;
        if (!ctxRef.current) return;
        const w = section.clientWidth;
        const h = section.clientHeight;
        ctxRef.current.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, config.dprCap));
        ctxRef.current.renderer.setSize(w, h);
        (ctxRef.current.material.uniforms.iResolution.value as THREE.Vector3).set(w, h, 1);
      });
    };
    window.addEventListener("resize", handleResize);

    const syncPaused = () => { pausedRef.current = !!document.hidden; };
    document.addEventListener("visibilitychange", syncPaused);
    syncPaused();

    const observer = new IntersectionObserver(
      ([entry]) => { pausedRef.current = !entry.isIntersecting || !!document.hidden; },
      { threshold: 0 }
    );
    observer.observe(section);

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", syncPaused);
      observer.disconnect();
      if (ctxRef.current) {
        disposeThree(ctxRef.current);
        ctxRef.current = null;
      }
    };
  }, [animate, isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex h-[100svh] items-end overflow-hidden bg-[rgb(9,9,11)] text-white md:h-[calc(100svh-4rem)]"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      <div className="absolute inset-0 z-10 bg-[rgb(9,9,11)]/60" />

      <div className="relative z-20 flex w-full justify-end px-6 pb-14 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
        <div className="w-full max-w-xl text-right">
          <p className="mb-4 text-xs uppercase tracking-[0.36em] text-white/75 sm:text-sm">
            XES Community
          </p>
          <h1 className="text-primary text-4xl font-semibold uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl">
            Build Ideas Into Real Startups
          </h1>
          <p className="mt-5 text-sm text-white/80 sm:text-base">
            Join a founder-first ecosystem where students collaborate, launch, and grow with
            mentorship, execution support, and a shared ambition to build meaningful ventures.
          </p>
          <button
            type="button"
            onClick={open}
            aria-label="Open volunteer application form"
            className="group mt-8 inline-flex items-center rounded-full border border-white/35 bg-white/10 px-12 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black sm:text-sm"
          >
            <span className="relative flex h-[1.35em] items-center overflow-hidden">
              <span className="flex items-center gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Join XES
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
              <span className="absolute inset-0 flex translate-y-full items-center justify-center gap-2 transition-transform duration-300 ease-out group-hover:translate-y-0">
                Join XES
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
