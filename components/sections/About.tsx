"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView, animate } from "framer-motion";

// --- MICRO-INTERACTION COMPONENTS --- //

const Counter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const inView = useInView(nodeRef, { once: true, margin: "0px", amount: "all" });

    useEffect(() => {
        if (!inView) return;
        const controls = animate(from, to, {
            duration,
            ease: "easeOut",
            onUpdate(value) {
                if (nodeRef.current) {
                    nodeRef.current.textContent = Math.round(value).toString();
                }
            }
        });
        return () => controls.stop();
    }, [from, to, duration, inView]);

    return <span ref={nodeRef}>{from}</span>;
};

const Spotlight = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] bg-[#00FF88]/[0.03] rounded-full blur-[100px] z-0"
            style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        />
    );
};

// --- MAIN PAGE SECTION --- //

export const About = () => {
    const targetRef = useRef<HTMLDivElement>(null);

    // Core Horizontal Scroll Physics
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"] // Ensures translation only begins after pinning
    });

    // Translate the cards horizontally based on vertical scroll
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

    // Background text slow parallax
    const bgY = useTransform(scrollYProgress, [0, 1], [0, 200]);

    return (
        <section
            id="about"
            ref={targetRef}
            className="relative bg-[#020202] text-white h-[300vh]" // Tall height to create scroll space
        >
            <Spotlight />

            {/* STICKY CONTAINER - Locks in place while scrolling through the 300vh section */}
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                {/* Cinematic Background Elements */}
                <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
                    <motion.div
                        style={{ y: bgY }}
                        className="relative w-full h-full flex flex-col items-center justify-center -space-y-12 md:-space-y-32 mix-blend-difference opacity-50"
                    >
                        <h1 className="text-[15vw] font-black uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.05)] whitespace-nowrap">
                            WE ARE
                        </h1>
                        <h1 className="text-[15vw] font-black uppercase text-white/[0.02] whitespace-nowrap ml-24 md:ml-48">
                            AUXION
                        </h1>
                    </motion.div>
                </div>

                <div className="container mx-auto px-6 relative z-10 w-full h-full flex flex-col justify-center">

                    <div className="flex flex-col lg:flex-row items-start lg:items-center h-full pt-32 pb-16 lg:py-0">

                        {/* Static Left Side (Intro Block) */}
                        <div className="w-full lg:w-1/3 shrink-0 mb-16 lg:mb-0 lg:pr-8 relative z-20">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#050505]/80 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-2xl relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group"
                            >
                                {/* Abstract BG for Intro */}
                                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-1000">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#00FF88]/10 to-transparent z-10" />
                                    <img
                                        src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2670&auto=format&fit=crop"
                                        alt="Abstract Geometry"
                                        className="w-full h-full object-cover saturate-0 mix-blend-lighten"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay z-0 pointer-events-none" />

                                <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#00FF88] opacity-50 rounded-tr-xl hover:scale-110 transition-transform duration-700 origin-top-right z-10" />

                                <div className="flex items-center gap-4 mb-8 relative z-10">
                                    <span className="w-8 h-[1px] bg-[#00FF88]" />
                                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#00FF88]">Identity</span>
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8 leading-snug">
                                    Engineering <br /> Tomorrow, <br /> <span className="text-transparent [-webkit-text-stroke:1px_white] italic font-serif">Today.</span>
                                </h3>

                                <p className="text-lg text-gray-400 font-serif leading-relaxed">
                                    We are an elite collective positioned globally. Auxion operates at the bleeding edge of design and architecture. Scroll to see our impact.
                                </p>
                            </motion.div>
                        </div>

                        {/* HORIZONTAL SCROLL TRACK */}
                        <div className="w-full lg:w-2/3 h-[500px] md:h-[600px] overflow-hidden relative rounded-2xl">
                            {/* Track Container translating horizontally */}
                            <motion.div
                                style={{ x }}
                                className="flex gap-8 h-full w-[300%]" // 300% width for 3 cards matching the container width
                            >

                                {/* CARD 1: SCALE */}
                                <div className="w-1/3 h-full bg-[#050505] border border-white/10 rounded-2xl p-12 md:p-16 flex flex-col justify-between relative group overflow-hidden">
                                    {/* Parallax Image Mask */}
                                    <div className="absolute inset-0 z-0 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/60 z-10" />
                                        <img
                                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                                            alt="Abstract Architecture"
                                            className="w-full h-full object-cover saturate-0 opacity-40 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                                        />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="text-[#00FF88] font-mono text-sm tracking-widest mb-6 block">01 / SCALE</div>
                                        <h4 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white mb-6">Global Platforms</h4>
                                        <p className="text-gray-300 font-serif leading-relaxed text-lg max-w-md hidden md:block group-hover:text-white transition-colors duration-500">
                                            We have engineered enterprise-grade digital platforms built for massive concurrency, seamless global distribution, and flawless aesthetic execution.
                                        </p>
                                    </div>
                                    <div className="relative z-10 flex items-end justify-between mt-auto">
                                        <div className="text-7xl md:text-9xl font-black text-white flex items-center gap-2 drop-shadow-2xl">
                                            <Counter to={40} duration={2} /><span className="text-[#00FF88] text-6xl group-hover:scale-110 origin-left transition-transform duration-500">+</span>
                                        </div>
                                        {/* Hover Button */}
                                        <div className="hidden lg:flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100 cursor-pointer">
                                            <span className="font-mono text-sm tracking-widest uppercase text-white">Explore</span>
                                            <span className="text-[#00FF88]">{`->`}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CARD 2: ENDORSEMENT */}
                                <div className="w-1/3 h-full bg-[#0A0A0A] border border-white/10 rounded-2xl p-12 md:p-16 flex flex-col justify-between relative group overflow-hidden">
                                    {/* Parallax Image Mask */}
                                    <div className="absolute inset-0 z-0 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/70 z-10" />
                                        <img
                                            src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop"
                                            alt="Abstract Render"
                                            className="w-full h-full object-cover saturate-0 opacity-30 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                                        />
                                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay z-20 pointer-events-none" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="text-white/50 font-mono text-sm tracking-widest mb-6 block group-hover:text-white transition-colors duration-500">02 / ENDORSEMENT</div>
                                        <h4 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white mb-6">Industry Awards</h4>
                                        <p className="text-gray-400 font-serif leading-relaxed text-lg max-w-md hidden md:block group-hover:text-gray-200 transition-colors duration-500">
                                            Recognized globally by Awwwards, FWA, and The Webby Awards. We do not chase trends; we establish the new baseline for digital luxury and performance.
                                        </p>
                                    </div>
                                    <div className="relative z-10 flex items-end justify-between mt-auto">
                                        <div className="text-7xl md:text-9xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)] group-hover:[-webkit-text-stroke:1px_white] group-hover:text-white transition-all duration-500">
                                            <Counter to={12} duration={2.5} />
                                        </div>
                                        {/* Hover Button */}
                                        <div className="hidden lg:flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100 cursor-pointer">
                                            <span className="font-mono text-sm tracking-widest uppercase text-white">Verify</span>
                                            <span className="text-white">{`->`}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CARD 3: MANIFESTO */}
                                <div className="w-1/3 h-full bg-[#111111] border border-white/10 rounded-2xl p-12 md:p-16 flex flex-col justify-between relative group overflow-hidden">
                                    {/* Parallax Image Mask */}
                                    <div className="absolute inset-0 z-0 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/80 z-10 group-hover:bg-black/60 transition-colors duration-700" />
                                        <img
                                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                                            alt="Modern Architecture"
                                            className="w-full h-full object-cover saturate-0 opacity-40 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                                        />
                                        <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-[#00FF88]/20 to-transparent rounded-tl-[100px] group-hover:scale-[2] transition-transform duration-[1.5s] ease-out z-20 pointer-events-none" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="text-[#00FF88]/50 font-mono text-sm tracking-widest mb-6 block group-hover:text-[#00FF88] transition-colors duration-500">03 / MANIFESTO</div>
                                        <h4 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white mb-6 group-hover:text-[#00FF88] transition-colors duration-500 delay-100">Zero Compromise</h4>
                                        <p className="text-gray-400 font-serif leading-relaxed text-lg max-w-md hidden md:block group-hover:text-white transition-colors duration-500 delay-200">
                                            Every line of code, every pixel tracked, every animation curved—designed for extreme performance. Built for profound awe.
                                        </p>
                                    </div>
                                    <div className="relative z-10 flex items-end justify-between mt-auto">
                                        <div className="text-7xl md:text-9xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:0px] group-hover:text-[#00FF88] transition-all duration-500">
                                            ZERO.
                                        </div>
                                        {/* Hover Button */}
                                        <div className="hidden lg:flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-300 cursor-pointer">
                                            <span className="font-mono text-sm tracking-widest uppercase text-[#00FF88]">Read</span>
                                            <span className="text-[#00FF88]">{`->`}</span>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
