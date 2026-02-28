"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { useRef } from "react";

const textReveal = {
    hidden: { y: "110%", opacity: 0 },
    visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: i * 0.1, duration: 1.2, ease: [0.76, 0, 0.24, 1] as const },
    }),
};

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax effects for the huge background text
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-24 px-6 md:px-12 bg-transparent">

            {/* Massive Background Typography Container with Liquid Glass Look */}
            {/* The bg-transparent on the section lets the WebGL fluid gradient underneath show through. */}
            {/* We apply a very subtle backdrop-blur to the section to give it a "glass window" feel over the fluid gradient. */}
            {/* The pointer-events-none ensures it doesn't block the custom GSAP cursor */}
            <div className="absolute inset-0 z-0 backdrop-blur-[2px] bg-white/[0.02] pointer-events-none" />

            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none opacity-50 mix-blend-overlay overflow-hidden z-0">

                <motion.div style={{ y: y1 }} className="whitespace-nowrap -ml-[20vw] blur-[1px]">
                    <h1 className="text-[18vw] font-bold tracking-tighter leading-[0.8] text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.4)] uppercase drop-shadow-2xl">
                        CREATIVE
                    </h1>
                </motion.div>

                <motion.div style={{ y: y2 }} className="whitespace-nowrap ml-[10vw]">
                    <h1 className="text-[18vw] font-bold tracking-tighter leading-[0.8] text-transparent [-webkit-text-stroke:2px_rgba(0,255,136,0.5)] uppercase drop-shadow-[0_0_30px_rgba(0,255,136,0.3)]">
                        AGENCY
                    </h1>
                </motion.div>

            </div>

            {/* Foreground Content */}
            <div className="container mx-auto relative z-10 w-full flex flex-col md:flex-row justify-between items-end gap-12">

                {/* Main Title relying on the hollow stroke effect the user liked */}
                <div className="flex flex-col mb-4 w-full md:w-2/3 xl:w-3/4">
                    <div className="overflow-hidden py-1">
                        <motion.h2
                            custom={0}
                            variants={textReveal}
                            initial="hidden"
                            animate="visible"
                            className="text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-[0.85] text-white uppercase drop-shadow-lg"
                        >
                            We Build
                        </motion.h2>
                    </div>
                    <div className="overflow-hidden py-1">
                        <motion.h2
                            custom={1}
                            variants={textReveal}
                            initial="hidden"
                            animate="visible"
                            className="text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-[0.85] text-transparent [-webkit-text-stroke:2px_white] uppercase relative group drop-shadow-lg"
                        >
                            The <span className="text-[#00FF88] [-webkit-text-stroke:0px] transition-all duration-500 drop-shadow-[0_0_20px_rgba(0,255,136,0.4)]">Future.</span>
                        </motion.h2>
                    </div>
                </div>

                {/* CTA & Context */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="w-full md:w-1/3 xl:w-1/4 flex flex-col items-start md:items-end text-left md:text-right"
                >
                    <p className="text-gray-200 text-sm md:text-base font-medium leading-relaxed mb-10 max-w-[280px] drop-shadow-md backdrop-blur-sm bg-black/10 p-4 rounded-xl border border-white/5">
                        A premium digital partner delivering award-winning technical architecture and immersive bespoke experiences.
                    </p>

                    {/* Redesigned Luxury CTA Button */}
                    <div className="relative mt-8 group w-fit">
                        <MagneticButton>
                            <button className="relative flex items-center justify-between gap-8 px-4 py-2 pl-8 rounded-full bg-[#050505]/40 backdrop-blur-2xl border border-white/10 text-white overflow-hidden transition-all duration-700 hover:border-transparent hover:bg-transparent w-[280px]">

                                {/* Background Sweep Effect */}
                                <span className="absolute inset-0 bg-[#00FF88] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />

                                {/* Text Container */}
                                <div className="relative z-10 flex flex-col items-start overflow-hidden h-5">
                                    <span className="font-bold uppercase tracking-widest text-sm group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] flex h-full items-center">
                                        Start Dialogue
                                    </span>
                                    <span className="absolute font-bold uppercase tracking-widest text-sm translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] text-[#050505] flex h-full items-center">
                                        Let's Connect
                                    </span>
                                </div>

                                {/* Icon Container Container */}
                                <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-transparent group-hover:border-black group-hover:bg-[#050505] transition-colors duration-700 overflow-hidden shrink-0">
                                    <div className="relative flex items-center justify-center w-full h-full">
                                        <ArrowRight size={18} className="absolute text-white group-hover:text-transparent transition-colors duration-300" />
                                        <ArrowRight size={18} className="absolute text-[#00FF88] -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
                                    </div>
                                </div>

                            </button>
                        </MagneticButton>
                    </div>
                </motion.div>

            </div>

        </section>
    );
};
