"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const testimonials = [
    {
        id: "01",
        quote: "They didn't just rebuild our platform; they completely recalibrated our digital dominant strategy. Pure, ruthless engineering.",
        author: "Aura Fintech",
        role: "Architecture Redesign",
        metric: "+240% Engagement"
    },
    {
        id: "02",
        quote: "No bloat. No excuses. Auxion delivered a world-class enterprise system that fundamentally outpaces our competitors globally.",
        author: "Nova Global",
        role: "Enterprise E-Commerce",
        metric: "Award-Winning UI"
    },
    {
        id: "03",
        quote: "We required a system built for extreme load. They architected a solution that is as beautiful as it is devastatingly fast.",
        author: "Zephyr OS",
        role: "System Infrastructure",
        metric: "Global Deployment"
    },
    {
        id: "04",
        quote: "Every interaction feels deliberately constructed to hijack user attention. They exceeded our highest expectations.",
        author: "Vex AI",
        role: "Product Strategy",
        metric: "Series B Secured"
    }
];

export const Testimonials = () => {
    // Default to the first testimonial being active so the right side isn't blank
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative bg-[#020202] text-white py-32 md:py-48 overflow-hidden border-t border-white/5">

            {/* Background Texture */}
            <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-[1600px]">

                {/* Intro Section Header */}
                <div className="flex items-center gap-4 mb-24 md:mb-32">
                    <span className="w-12 h-[1px] bg-[#00FF88]" />
                    <span className="font-mono text-sm uppercase tracking-[0.3em] text-[#00FF88]">The Registry.</span>
                </div>

                {/* --- 50/50 SPLIT GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 lg:border-t lg:border-white/10">

                    {/* LEFT COLUMN: The Directory List */}
                    <div className="lg:col-span-4 lg:border-r lg:border-white/10 flex flex-col pt-8">
                        {testimonials.map((test, idx) => {
                            const isActive = activeIndex === idx;

                            return (
                                <div
                                    key={test.id}
                                    onMouseEnter={() => setActiveIndex(idx)}
                                    // onClick allows mobile users to tap to reveal
                                    onClick={() => setActiveIndex(idx)}
                                    className={`relative py-8 lg:pr-12 border-b border-white/5 cursor-crosshair transition-all duration-500 group ${isActive ? 'bg-white/[0.02]' : 'hover:bg-white/[0.01]'}`}
                                >
                                    {/* Active State Neon Line Indicator */}
                                    <div
                                        className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#00FF88] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${isActive ? 'scale-y-100' : 'scale-y-0'}`}
                                    />

                                    <div className="pl-6 flex justify-between items-end">
                                        <div>
                                            <div className="font-mono text-xs tracking-[0.2em] text-gray-600 mb-2">
                                                CLIENT // {test.id}
                                            </div>
                                            <h3 className={`text-2xl md:text-4xl font-black uppercase tracking-tighter transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                                                {test.author}
                                            </h3>
                                        </div>

                                        {/* Hover arrow indicator */}
                                        <div className={`font-mono transition-all duration-500 ${isActive ? 'opacity-100 text-[#00FF88] translate-x-0' : 'opacity-0 -translate-x-4 text-gray-600'}`}>
                                            -&gt;
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* RIGHT COLUMN: The Reveal Canvas */}
                    <div className="lg:col-span-8 lg:pl-24 pt-8 lg:pt-16 min-h-[50vh] flex flex-col justify-center relative">

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="max-w-4xl"
                            >
                                {/* The Massive Serif Quote */}
                                <div className="relative">
                                    <span className="absolute -top-12 -left-8 md:-top-24 md:-left-16 text-[8rem] md:text-[15rem] font-serif text-white/[0.02] leading-none pointer-events-none select-none z-0">
                                        "
                                    </span>
                                    <h3 className="relative z-10 text-3xl md:text-5xl lg:text-[4rem] font-serif italic leading-[1.2] tracking-tight mb-16 text-white">
                                        "{testimonials[activeIndex].quote}"
                                    </h3>
                                </div>

                                {/* Bottom Metadata Block */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/10 pt-8 mt-16 md:mt-24">
                                    <div>
                                        <h4 className="font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Subject</h4>
                                        <p className="text-xl md:text-2xl font-bold uppercase tracking-tighter text-white">
                                            {testimonials[activeIndex].author}
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-mono text-xs tracking-widest uppercase text-gray-500 mb-2">Scope</h4>
                                        <p className="text-lg md:text-xl font-serif text-gray-400">
                                            {testimonials[activeIndex].role}
                                        </p>
                                    </div>
                                    <div className="col-span-2 md:col-span-1 border-t md:border-t-0 border-white/10 pt-8 md:pt-0">
                                        <h4 className="font-mono text-xs tracking-widest uppercase text-[#00FF88] mb-2">Result</h4>
                                        <p className="text-xl md:text-2xl font-mono tracking-widest uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.8)]">
                                            {testimonials[activeIndex].metric}
                                        </p>
                                    </div>
                                </div>

                            </motion.div>
                        </AnimatePresence>

                    </div>
                </div>

                {/* Massive CTA Section */}
                <div className="mt-24 md:mt-32 w-full border-t border-white/5 pt-16 md:pt-24 relative z-20">
                    <Link
                        href="/contact"
                        className="group block w-full relative overflow-hidden rounded-[2rem] bg-[#050505] border border-white/5 hover:border-[#00FF88]/30 transition-colors duration-700 shadow-2xl"
                    >
                        {/* Hover Gradient Sweep */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/0 via-[#00FF88]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]" />

                        <div className="flex flex-col md:flex-row items-center justify-between p-12 md:p-24 relative z-10 w-full h-full">
                            <div className="flex flex-col md:w-2/3">
                                <span className="font-mono text-sm tracking-[0.3em] text-[#00FF88] uppercase mb-6 opacity-80 flex items-center gap-4">
                                    <span className="w-8 h-[1px] bg-[#00FF88]" />
                                    Next Steps Phase 01
                                </span>
                                <div className="flex flex-col">
                                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none text-white group-hover:text-transparent group-hover:[-webkit-text-stroke:2px_#00FF88] transition-all duration-700">
                                        START
                                    </h2>
                                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] group-hover:[-webkit-text-stroke:0px] group-hover:text-white transition-all duration-700 delay-100">
                                        DIALOGUE.
                                    </h2>
                                </div>
                            </div>

                            <div className="mt-16 md:mt-0 md:w-1/3 flex justify-start md:justify-end w-full md:w-auto">
                                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#00FF88] group-hover:border-[#00FF88] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden group/btn shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                    {/* Arrow icon */}
                                    <span className="relative z-10 font-black text-white group-hover:text-black transition-colors duration-500 flex text-4xl md:text-6xl items-center overflow-hidden">
                                        {/* Original Arrow sliding out */}
                                        <span className="group-hover:translate-x-24 transition-transform duration-500 ease-in-out">
                                            {`->`}
                                        </span>
                                        {/* New arrow sliding in */}
                                        <span className="absolute -translate-x-24 group-hover:translate-x-0 transition-transform duration-500 ease-in-out delay-75">
                                            {`->`}
                                        </span>
                                    </span>
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.2] mix-blend-overlay z-0 pointer-events-none group-hover:opacity-0" />
                                </div>
                            </div>
                        </div>

                        {/* Background structural lines */}
                        <div className="absolute top-0 right-12 md:right-32 w-[1px] h-full bg-white/5 group-hover:bg-[#00FF88]/20 transition-colors duration-700" />
                        <div className="absolute top-0 right-48 w-[1px] h-full bg-white/5 group-hover:bg-[#00FF88]/20 transition-colors duration-700 hidden lg:block" />
                    </Link>
                </div>

            </div>
        </section>
    );
};
