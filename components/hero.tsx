"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";
import React, { useRef } from "react";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"]
    });
  
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
    return (
      <section
        ref={containerRef}
        className="relative flex min-h-[100dvh] flex-col pt-0 md:min-h-[calc(100dvh-4rem)]"
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/45" />
        
        <div className="flex-1 flex relative">
          {/* Vertical Identity Sidebar */}
          <div className="hidden lg:flex w-24 border-r border-white/20 flex-col justify-between py-10 items-center z-10 shrink-0">
            <div className="[writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-[0.5em] text-white/40 font-mono">ESTABLISHED 2026</div>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-primary">
              <Zap className="w-5 h-5 fill-current" />
            </div>
            <div className="text-[10px] font-mono text-white/40">40.7128° N</div>
          </div>
  
          {/* Hero Body */}
          <div className="flex-1 relative flex flex-col p-8 lg:p-12 overflow-hidden">
            {/* Overlapping Background Accent */}
            <div className="absolute -right-20 top-0 w-[500px] h-[500px] bg-primary rounded-full blur-[160px] opacity-10 pointer-events-none" />
  
            <motion.div style={{ opacity }} className="relative z-10">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8 text-[11px] font-medium uppercase tracking-[0.25em] text-primary/80"
              >
                // Mission Brief 001
              </motion.h2>
              
              <motion.h1 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl text-[clamp(3rem,8.6vw,8.7rem)] font-black uppercase leading-[0.88] tracking-[-0.05em] text-white"
              >
                <span className="block">Architects</span>
                <span className="block">Of The <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.78)]">Impossible</span></span>
              </motion.h1>
  
              {/* Information Clusters */}
              <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
                <div className="flex flex-col space-y-6">
                  <p className="max-w-[19rem] text-[clamp(1rem,1.6vw,1.45rem)] leading-[1.45] text-white/58">
                    The premier ecosystem for disruptors, builders, and high-growth founders scaling at the edges of reality.
                  </p>
                  <div className="flex space-x-6 pt-4 items-center">
                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full text-black hover:scale-110 cursor-pointer transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                      <ArrowRight className="w-6 h-6 rotate-[-45deg]" />
                    </div>
                    <span className="self-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white/90">Watch the Reel</span>
                  </div>
                </div>
  
                <div className="border-l border-white/20 pl-8 hidden lg:block">
                  <div className="text-6xl font-black tracking-[-0.03em] text-primary">$4.2B+</div>
                  <div className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">Total Network Growth</div>
                </div>
  
              </div>
            </motion.div>
          </div>
        </div>
  
      </section>
    );
  };