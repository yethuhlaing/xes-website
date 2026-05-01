
import { ArrowRight, Globe, Zap, Target, Users, Menu, X } from "lucide-react";
import React from "react";
export default function BentoGrid() {
    return (
      <section id="velocity" className="bg-white text-black py-32 px-6 lg:px-20 relative z-10 rounded-t-[3rem] lg:rounded-t-[6rem]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-8">
            <h2 className="font-display text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
              Engineered for <br /><span className="text-black/20">Hypervelocity.</span>
            </h2>
            <p className="max-w-sm text-black/60 text-lg">
              Our ecosystem is designed to eliminate friction at every stage of the entrepreneurial lifecycle.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 auto-rows-[300px] lg:auto-rows-[450px]">
            <div className="md:col-span-2 bg-[#f0f0f0] p-12 relative overflow-hidden group">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <span className="text-sm font-mono uppercase tracking-widest opacity-40">01 / Strategy</span>
                <h3 className="text-4xl font-bold font-display uppercase tracking-tighter">Strategic Clarity <br />at Scale</h3>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 blur-2xl group-hover:opacity-30 transition-opacity">
                <Globe className="w-full h-full p-20" />
              </div>
            </div>
            <div className="bg-primary p-12 flex flex-col justify-between">
              <span className="text-sm font-mono uppercase tracking-widest text-black/40">02 / Execution</span>
              <h3 className="text-4xl font-bold font-display uppercase tracking-tighter text-black">Precision <br />Impact</h3>
              <ArrowRight className="w-12 h-12 text-black" />
            </div>
            <div className="bg-black text-white p-12 flex flex-col justify-between">
              <span className="text-sm font-mono uppercase tracking-widest text-white/40">03 / Network</span>
              <h3 className="text-4xl font-bold font-display uppercase tracking-tighter">Global <br />Connectivity</h3>
              <Users className="w-8 h-8 text-secondary" />
            </div>
            <div className="md:col-span-2 bg-[#1a1a1a] text-white p-12 relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-sm font-mono uppercase tracking-widest text-white/40">04 / Laboratory</span>
                <h3 className="text-4xl font-bold font-display uppercase tracking-tighter mt-4">Research & <br />Development</h3>
              </div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[60%] aspect-square rounded-full" />
              <div className="absolute bottom-[-5%] right-[-5%] w-[60%] aspect-square rounded-full" />
            </div>
          </div>
        </div>
      </section>
    );
  };
  