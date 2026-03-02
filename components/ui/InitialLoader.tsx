"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const InitialLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Lock scrolling during the sequence
        document.body.style.overflow = "hidden";

        const duration = 2800; // Total load time (slightly longer for premium feel)
        let startTimestamp: number | null = null;

        // Custom easing: perfectly smooth acceleration and deceleration
        const easeInOutQuart = (x: number): number => {
            return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
        };

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;

            const linearProgress = Math.min(elapsed / duration, 1);
            const easedProgress = easeInOutQuart(linearProgress);

            setProgress(easedProgress * 100); // Keep float for smooth CSS clipping

            if (linearProgress < 1) {
                window.requestAnimationFrame(step);
            } else {
                // Short hold at 100% to let the user absorb the fully lit logo
                setTimeout(() => {
                    setIsLoading(false);
                    // Unlock scrolling slightly after the doors start opening
                    setTimeout(() => {
                        document.body.style.overflow = "";
                    }, 800);
                }, 600);
            }
        };

        window.requestAnimationFrame(step);

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    // The shared typography styling for the massive logo
    const typographyClasses = "font-black text-[25vw] leading-[0.75] tracking-tighter uppercase select-none";

    return (
        <AnimatePresence>
            {isLoading && (
                <div
                    className="fixed inset-0 z-[9999] pointer-events-none flex"
                    aria-hidden="true"
                >
                    {/* 
                        Phase 3: The Heavy Doors Split
                        Left and right DOM elements slide open. 
                    */}

                    {/* LEFT DOOR */}
                    <motion.div
                        className="relative w-1/2 h-full bg-[#020202] border-r border-white/5 flex justify-end items-center overflow-hidden"
                        initial={{ x: "0%" }}
                        exit={{ x: "-100%" }}
                        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} // Profound, physical easing curve
                    >
                        {/* Background Grain */}
                        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

                        {/* 
                            Left Half of the Brand Logo 
                            We translate it right by 50% so it perfectly aligns with the right door's half.
                        */}
                        <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-[50%] z-10 w-[100vw] flex justify-center">
                            <div className="relative">
                                {/* Base: Hollow outline */}
                                <span className={`${typographyClasses} text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.15)]`}>
                                    AUXION
                                </span>
                                {/* Fill: Solid green masking based on progress */}
                                <span
                                    className={`${typographyClasses} text-[#00FF88] absolute top-0 left-0 transition-opacity duration-300`}
                                    style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
                                >
                                    AUXION
                                </span>
                            </div>
                        </div>

                        {/* Top Left Engineering Overlay */}
                        <div className="absolute top-8 left-8 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 flex flex-col gap-1">
                            <span>SYS.INIT // AESTHETIC.MAX</span>
                            <span>SEQ.ALPHA</span>
                        </div>
                    </motion.div>

                    {/* RIGHT DOOR */}
                    <motion.div
                        className="relative w-1/2 h-full bg-[#020202] flex justify-start items-center overflow-hidden"
                        initial={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                    >
                        {/* Background Grain */}
                        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

                        {/* 
                            Right Half of the Brand Logo 
                            We translate it left by 50% so it perfectly aligns with the left door's half.
                        */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[50%] z-10 w-[100vw] flex justify-center">
                            <div className="relative">
                                {/* Base: Hollow outline */}
                                <span className={`${typographyClasses} text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.15)]`}>
                                    AUXION
                                </span>
                                {/* Fill: Solid green masking based on progress */}
                                <span
                                    className={`${typographyClasses} text-[#00FF88] absolute top-0 left-0 transition-opacity duration-300`}
                                    style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
                                >
                                    AUXION
                                </span>
                            </div>
                        </div>

                        {/* Bottom Right Engineering Overlay */}
                        <div className="absolute bottom-8 right-8 text-right font-mono text-[10px] uppercase tracking-[0.2em] text-white/40 flex flex-col gap-1">
                            <span className="text-[#00FF88]">{Math.floor(progress)}% LOADED</span>
                            <span>KINETIC.[ENGAGED]</span>
                        </div>
                    </motion.div>

                    {/* Global subtle glow in the center while loading */}
                    <motion.div
                        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="w-[80vw] h-[30vh] bg-[#00FF88]/10 blur-[150px] rounded-[100%]" />
                    </motion.div>

                </div>
            )}
        </AnimatePresence>
    );
};
