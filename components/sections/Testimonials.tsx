"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

            </div>
        </section>
    );
};
