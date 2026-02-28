"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useInView } from "framer-motion";

const processSteps = [
    {
        num: "01",
        title: "DISCOVERY",
        subtitle: "Audit & Architecture",
        desc: "Forensic audit of existing digital infrastructure. Identifying breakpoints and mapping immediate expansion vectors. We don't guess; we extract exact physical requirements and market trajectories to architect a blueprint for dominance."
    },
    {
        num: "02",
        title: "ENGINEERING",
        subtitle: "System Construction",
        desc: "Constructing the scalable skeleton. We engineer databases, API networks, and UI components purely for extreme performance. Built not for your current state, but for the global scale you intend to reach."
    },
    {
        num: "03",
        title: "EXECUTION",
        subtitle: "Kinetic Polish",
        desc: "Ruthless implementation phase. Code is meticulously crafted, compressed, and hardened. Every animation is curated, every pixel mathematically positioned for maximum psychological impact."
    },
    {
        num: "04",
        title: "DOMINATION",
        subtitle: "Global Deployment",
        desc: "The system is deployed globally to Edge networks. We don't just launch; we hijack attention spans. You leave as an industry authority, setting the new baseline for your competitors."
    }
];

export const Process = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStep, setActiveStep] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Update active node based on scroll threshold
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.25) setActiveStep(0);
        else if (latest < 0.5) setActiveStep(1);
        else if (latest < 0.75) setActiveStep(2);
        else setActiveStep(3);
    });

    return (
        <section
            id="process"
            ref={containerRef}
            className="relative bg-[#020202] text-white h-[400vh] border-t border-white/10" // 400vh for deep scrolling
        >

            {/* Sticky Container - Locks view for 400vh */}
            <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#020202]">

                {/* Background Noise */}
                <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

                {/* --- LEFT DESKTOP COLUMN (Massive Title & Numbers) --- */}
                <div className="hidden md:flex flex-col justify-between w-[40%] h-full border-r border-white/10 p-12 lg:p-24 relative z-10">

                    {/* Fixed Headers */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[1px] bg-[#00FF88]" />
                            <span className="font-mono text-sm uppercase tracking-[0.3em] text-[#00FF88]">Methodology</span>
                        </div>
                        <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                            Protocol <br />
                            <span className="text-gray-600">Matrix</span>
                        </h2>
                    </div>

                    {/* Active Massive Number Display */}
                    <div className="relative h-[200px] lg:h-[300px] w-full mt-auto flex items-end overflow-hidden">
                        {processSteps.map((step, idx) => (
                            <div
                                key={`num-${step.num}`}
                                className={`absolute bottom-0 left-0 transition-all duration-[1.2s] ease-[cubic-bezier(0.87,0,0.13,1)] ${activeStep === idx
                                        ? "translate-y-0 opacity-100"
                                        : activeStep > idx
                                            ? "-translate-y-full opacity-0"
                                            : "translate-y-full opacity-0"
                                    }`}
                            >
                                <span className="text-[12rem] lg:text-[20rem] font-black leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.1)] block mb-[-2rem] lg:mb-[-4rem]">
                                    {step.num}
                                </span>
                            </div>
                        ))}
                        {/* Overlay to create visual crop effect */}
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none pointer-events-none" />
                    </div>
                </div>

                {/* --- RIGHT SCROLLING COLUMN --- */}
                <div className="w-full md:w-[60%] h-full relative z-10 flex flex-col items-center justify-center">

                    {/* Mobile Header (Hidden on Desktop) */}
                    <div className="block md:hidden absolute top-0 left-0 w-full p-8 border-b border-white/10 bg-[#020202]/90 backdrop-blur-md z-50">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="w-8 h-[1px] bg-[#00FF88]" />
                            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#00FF88]">Methodology</span>
                        </div>
                        <h2 className="text-4xl font-black uppercase tracking-tighter">
                            Protocol <span className="text-gray-600">Matrix</span>
                        </h2>
                    </div>

                    {/* Progress Indicator Line */}
                    <div className="absolute left-8 md:left-24 top-[20%] bottom-[20%] w-[1px] bg-white/10 z-0">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-[#00FF88]"
                            style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
                        />
                    </div>

                    {/* The Scrolling Text Blocks container */}
                    <div className="relative w-full h-full flex items-center pt-32 md:pt-0">

                        {processSteps.map((step, idx) => {
                            const isActive = activeStep === idx;
                            const isPast = activeStep > idx;

                            return (
                                <div
                                    key={`text-${step.num}`}
                                    className={`absolute left-0 w-full px-16 md:px-32 lg:px-48 transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive
                                            ? "opacity-100 translate-y-0 scale-100 blur-0"
                                            : isPast
                                                ? "opacity-0 -translate-y-[20vh] scale-95 blur-md"
                                                : "opacity-0 translate-y-[20vh] scale-95 blur-md"
                                        }`}
                                >

                                    {/* Mobile Active Number */}
                                    <h3 className="md:hidden text-7xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] mb-4">
                                        {step.num}
                                    </h3>

                                    <h4 className="font-mono text-sm md:text-base tracking-widest text-[#00FF88] mb-4 md:mb-6 uppercase">
                                        Phase // {step.subtitle}
                                    </h4>

                                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6 md:mb-10 text-white leading-tight">
                                        {step.title}
                                    </h3>

                                    <p className="text-lg md:text-2xl font-serif text-gray-400 leading-relaxed max-w-2xl">
                                        {step.desc}
                                    </p>

                                    {/* Accent Grid Element */}
                                    <div className="absolute -left-4 md:-left-8 top-0 w-8 h-[1px] bg-white/20" />
                                    <div className="absolute -left-4 md:-left-8 top-0 w-[1px] h-8 bg-white/20" />
                                </div>
                            );
                        })}

                    </div>
                </div>

            </div>
        </section>
    );
};
