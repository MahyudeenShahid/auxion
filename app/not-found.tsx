"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function NotFound() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    // Core mouse tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth, heavy spring physics for the spotlight drag
    // High mass creates a very deliberate, luxurious flashlight feel
    const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 0.8 });
    const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 0.8 });

    // Thematic spotlight effect using the Auxion #00FF88 neon green and blue gradient
    const spotlightBackground = useTransform(
        [smoothX, smoothY],
        ([x, y]) => `radial-gradient(circle 400px at ${x}px ${y}px, rgba(0,255,136,0.15) 0%, rgba(59,130,246,0.05) 50%, rgba(3,3,3,1) 80%)`
    );

    // Tighter mask for revealing the massive typography via spotlight
    const textRevealMask = useTransform(
        [smoothX, smoothY],
        ([x, y]) => `radial-gradient(circle 250px at ${x}px ${y}px, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, rgba(0,0,0,0) 100%)`
    );

    useEffect(() => {
        setIsMounted(true);
        // Center initial spotlight if possible
        if (typeof window !== 'undefined') {
            mouseX.set(window.innerWidth / 2);
            mouseY.set(window.innerHeight / 2);
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <main
            ref={containerRef}
            className="relative w-full h-screen bg-[#030303] overflow-hidden flex flex-col items-center justify-center font-sans tracking-tight cursor-none"
        >
            {/* 1. THEMATIC BACKGROUND */}
            {/* The signature Auxion heavy grain covering the void */}
            <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] mix-blend-overlay pointer-events-none" />

            {/* Faint, ambient glowing orbs (Thematic elements from the rest of the site) */}
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[#00FF88]/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            {/* 
                2. THE DYNAMIC THEMATIC SPOTLIGHT 
                Projects the neon green/blue gradient across the floor
            */}
            {isMounted && (
                <motion.div
                    className="absolute inset-0 z-10 pointer-events-none mix-blend-screen"
                    style={{ background: spotlightBackground }}
                />
            )}

            {/* 
                3. THE REVEAL CONTENT 
                Massive typography structurally identical to the Hero section
            */}
            <div className="relative z-20 flex flex-col items-center justify-center w-full h-full pointer-events-none p-4">

                {/* 
                    The Massive Hidden Typography 
                    Hidden in blackness until the neon spotlight washes over it
                */}
                {isMounted && (
                    <motion.div
                        className="flex flex-col items-center justify-center text-center -space-y-4 md:-space-y-8"
                        style={{
                            WebkitMaskImage: textRevealMask,
                            maskImage: textRevealMask
                        }}
                    >
                        {/* Massive "404" using the glowing stroke aesthetic */}
                        <h1 className="font-black text-[25vw] leading-[0.8] tracking-tighter text-transparent [-webkit-text-stroke:2px_rgba(0,255,136,0.8)] filter drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                            404
                        </h1>
                        {/* Interlocking "NOT FOUND" in solid white */}
                        <h2 className="font-black uppercase text-[12vw] leading-[0.8] text-white tracking-tighter mix-blend-overlay">
                            NOT FOUND
                        </h2>
                    </motion.div>
                )}
            </div>

            {/* Sub-text telling the user what happened, fading in naturally */}
            <motion.div
                className="absolute inset-0 z-30 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Microscopic editorial header - Top Left */}
                <div className="absolute top-8 left-8 md:top-12 md:left-12 pointer-events-auto">
                    <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/30 hover:opacity-0 hover:blur-md hover:tracking-[0.8em] transition-all duration-1000 ease-out cursor-none p-4 -m-4">
                        Directory <span className="text-[#00FF88]/50">//</span> Missing
                    </div>
                </div>

                {/* Center Massive Action Heading */}
                <div className="absolute top-[55%] md:top-[60%] left-1/2 -translate-x-1/2 pointer-events-auto text-center w-full flex flex-col items-center">
                    <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-block p-8"
                    >
                        {/* Massive, clear luxury heading that vanishes on hover */}
                        <h3 className="font-serif italic text-4xl md:text-5xl text-white tracking-tight hover:opacity-0 hover:blur-md hover:tracking-[0.5em] transition-all duration-1000 ease-out cursor-none select-none">
                            Lost in the void
                        </h3>
                    </motion.div>
                </div>
            </motion.div>

            {/* 
                4. THE MAGNETIC CTA 
                Thematic luxury button featuring the #00FF88 neon hover state
            */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-40">
                <Link href="/">
                    <MagneticButton className="group relative px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#00FF88]/50 overflow-hidden rounded-full flex items-center gap-3 transition-colors duration-500">
                        {/* Thematic internal hover fill */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88] to-blue-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] z-0" />

                        <span className="relative z-10 font-sans tracking-[0.2em] text-[10px] font-bold text-white group-hover:text-black transition-colors duration-500 uppercase">
                            Return Home
                        </span>

                        <svg className="relative z-10 w-3 h-3 text-white group-hover:text-black transition-colors duration-500 transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </MagneticButton>
                </Link>
            </div>

            {/* The physical flashlight dot (Thematic neon green) */}
            {isMounted && (
                <motion.div
                    className="fixed w-2 h-2 rounded-full bg-[#00FF88] z-[9999] pointer-events-none mix-blend-screen shadow-[0_0_20px_rgba(0,255,136,0.8)]"
                    style={{
                        left: mouseX,
                        top: mouseY,
                        translateX: "-50%",
                        translateY: "-50%"
                    }}
                />
            )}
        </main>
    );
}
