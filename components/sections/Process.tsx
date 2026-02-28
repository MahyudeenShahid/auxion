"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Process = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax transformations
    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 1, 1]);

    const steps = [
        {
            num: "01",
            title: "DISCOVERY",
            desc: "Uncovering root architecture needs and mapping acoustic and aesthetic trajectories. We don't just ask what you want; we find out what the market demands you become."
        },
        {
            num: "02",
            title: "ARCHITECTURE",
            desc: "Structuring the systems. We architect databases, APIs, and design systems not for the present, but for the scale you intend to reach in five years."
        },
        {
            num: "03",
            title: "EXECUTION",
            desc: "Ruthless implementation. Writing precise code utilizing Next.js, WebGL, and robust infrastructure. No bloat, no shortcuts. Just pure performance."
        }
    ];

    return (
        <section
            id="process"
            ref={sectionRef}
            className="py-32 md:py-48 relative text-white overflow-hidden bg-[#020202] border-t border-white/5"
        >
            <div className="container mx-auto px-6 md:px-12 max-w-[1400px]">

                {/* Massive Typographic Intro */}
                <motion.div
                    style={{ opacity: opacityHero }}
                    className="min-h-[40vh] flex flex-col justify-center mb-24 md:mb-48"
                >
                    <h3 className="font-mono text-[#00FF88] text-sm md:text-base tracking-[0.2em] uppercase mb-8">
                        The Ethos
                    </h3>
                    <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase max-w-5xl">
                        We do not <br />
                        <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.4)] md:[-webkit-text-stroke:3px_rgba(255,255,255,0.4)]">Compromise.</span>
                    </h2>
                </motion.div>

                {/* Asymmetrical Storytelling & Process */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start relative">

                    {/* Sticky Left Column: Philosophy */}
                    <div className="lg:col-span-5 lg:sticky lg:top-48 z-10">
                        <div className="max-w-md">
                            <h4 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-8">
                                Strategy <br /> meets execution.
                            </h4>
                            <div className="h-[1px] w-12 bg-[#00FF88] mb-8" />
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-serif italic mb-8">
                                "We strip away the unnecessary, focusing deeply on core aesthetics and uncompromising technical performance. Our process is aggressive, iterative, and purely focused on dominance."
                            </p>
                            <p className="text-gray-500 text-sm md:text-base leading-loose font-mono opacity-80 uppercase tracking-widest hidden md:block">
                                // System Architecture<br />
                                // UX/UI Topography<br />
                                // Backend Scalability
                            </p>
                        </div>
                    </div>

                    {/* Scrolling Right Column: The Steps */}
                    <div className="lg:col-span-7 relative z-20">
                        <div className="flex flex-col gap-32 md:gap-48 mt-12 lg:mt-0">
                            {steps.map((step, idx) => (
                                <div key={step.num} className="relative group">
                                    {/* Massive Background Number */}
                                    <motion.div
                                        style={{ y: idx % 2 === 0 ? y1 : y2 }}
                                        className="absolute -top-12 -left-8 md:-top-24 md:-left-12 text-[10rem] md:text-[15rem] font-black text-white/[0.03] leading-none pointer-events-none select-none z-0 transition-colors duration-700 group-hover:text-[#00FF88]/[0.05]"
                                    >
                                        {step.num}
                                    </motion.div>

                                    <div className="relative z-10 pl-4 md:pl-16 border-l border-white/10 group-hover:border-[#00FF88]/50 transition-colors duration-500">
                                        <div className="flex items-baseline gap-4 mb-6">
                                            <span className="text-[#00FF88] font-mono tracking-widest text-sm">
                                                PHASE {step.num}
                                            </span>
                                            <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-[#00FF88]/30 transition-colors duration-500" />
                                        </div>
                                        <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
                                            {step.title}
                                        </h3>
                                        <p className="text-xl text-gray-400 leading-relaxed max-w-xl group-hover:text-gray-200 transition-colors duration-500">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Ambient Base Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />
        </section>
    );
};
