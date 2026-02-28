"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
    { name: "Index", href: "/" },
    { name: "Expertise", href: "#services" },
    { name: "Showcase", href: "#work" },
    { name: "Studio", href: "#about" },
    { name: "Connect", href: "#contact" },
];

const menuVariants = {
    initial: {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    animate: {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        transition: {
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1] as const,
        },
    },
    exit: {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1] as const,
            delay: 0.3,
        },
    },
};

const linkVariants = {
    initial: { y: "150%", rotate: 5, opacity: 0 },
    animate: (i: number) => ({
        y: "0%",
        rotate: 0,
        opacity: 1,
        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const, delay: 0.2 + i * 0.1 },
    }),
    exit: (i: number) => ({
        y: "-150%",
        rotate: -5,
        opacity: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: i * 0.05 },
    }),
};

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);

        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuOpen]);

    return (
        <>
            {/* Header Area */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled && !menuOpen ? "py-4 mix-blend-difference" : "py-8"
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link href="/" className="relative z-[60]" onClick={() => setMenuOpen(false)}>
                        <MagneticButton>
                            <span className={`text-xl md:text-2xl font-bold tracking-[0.2em] uppercase ${menuOpen ? 'text-white' : 'text-white'}`}>
                                Auxion<span className="text-xl align-top ml-1 opacity-50 text-[#00FF88]">.</span>
                            </span>
                        </MagneticButton>
                    </Link>

                    {/* Minimal Two-Line Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="group relative z-[60] flex items-center justify-center w-16 h-16 rounded-full overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-transparent group-hover:bg-white/10 transition-colors duration-500 rounded-full" />
                        <div className="relative w-8 h-8 flex flex-col justify-center items-end gap-[6px]">
                            <span
                                className={`h-[1px] bg-white transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? 'w-8 rotate-45 translate-y-[7px]' : 'w-8 group-hover:w-6'}`}
                            />
                            <span
                                className={`h-[1px] bg-white transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${menuOpen ? 'w-8 -rotate-45 -translate-y-[7px]' : 'w-6 group-hover:w-8'}`}
                            />
                        </div>
                    </button>
                </div>
            </header>

            {/* Premium Overlay Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 bg-[#050505] z-40 flex flex-col justify-center overflow-hidden"
                    >
                        {/* Background subtle mesh gradient */}
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_50%,_rgba(0,255,136,0.15),transparent_50%)] pointer-events-none" />

                        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row h-full pt-32 pb-12 relative z-10 w-full gap-12 lg:gap-0">

                            {/* Left Side: Navigation Links */}
                            <nav className="flex flex-col justify-center h-full w-full md:w-2/3">
                                {navLinks.map((link, i) => (
                                    <div key={link.name} className="overflow-hidden py-2 md:py-4">
                                        <motion.div
                                            custom={i}
                                            variants={linkVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            className="origin-left"
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setMenuOpen(false)}
                                                className="group relative inline-flex items-center text-[12vw] md:text-[8vw] xl:text-[7vw] font-bold tracking-tighter uppercase leading-[0.85] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] hover:[-webkit-text-stroke:0px] hover:text-[#00FF88] transition-all duration-500"
                                            >
                                                <span className="relative z-10 translate-x-0 group-hover:translate-x-8 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                                                    {link.name}
                                                </span>
                                                <ArrowUpRight
                                                    size={48}
                                                    className="absolute left-[-2rem] opacity-0 text-[#00FF88] group-hover:opacity-100 group-hover:left-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] scale-50 group-hover:scale-100"
                                                />
                                            </Link>
                                        </motion.div>
                                    </div>
                                ))}
                            </nav>

                            {/* Right Side: Contact & Socials */}
                            <div className="h-full w-full md:w-1/3 flex flex-col justify-end md:justify-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12 lg:pl-24 space-y-12">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8, duration: 1 }}
                                    exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                                    className="flex flex-col space-y-2"
                                >
                                    <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">New Business</h4>
                                    <a href="mailto:hello@auxion.studio" className="text-xl md:text-3xl font-medium text-white hover:text-[#00FF88] transition-colors">
                                        hello@auxion.studio
                                    </a>
                                    <p className="text-gray-400 mt-2 text-sm">+1 (800) 123-4567</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1, duration: 1 }}
                                    exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                                    className="flex flex-col space-y-4"
                                >
                                    <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">Socials</h4>
                                    <ul className="flex flex-col space-y-3">
                                        {["Instagram", "Twitter", "Awwwards", "LinkedIn"].map((social, idx) => (
                                            <li key={social}>
                                                <a href="#" className="text-white text-lg font-medium hover:text-[#00FF88] transition-colors flex items-center group overflow-hidden">
                                                    <span className="group-hover:-translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] block h-[28px]">
                                                        <span className="block h-full">{social}</span>
                                                        <span className="block h-full text-[#00FF88] drop-shadow-[0_0_8px_rgba(0,255,136,0.6)]">{social}</span>
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2, duration: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                                    className="mt-auto hidden md:block"
                                >
                                    <div className="w-full h-32 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center overflow-hidden relative">
                                        <div className="absolute inset-0 bg-[#00FF88]/5 blur-xl" />
                                        <div className="relative z-10 text-center">
                                            <p className="text-[#00FF88] text-xs font-mono font-bold tracking-[0.3em] uppercase mb-1">Status</p>
                                            <p className="text-white text-sm font-medium">Available for Work</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
