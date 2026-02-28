"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Company", href: "#about" },
    { name: "Contact", href: "#contact" },
];

const menuVariants = {
    initial: {
        y: "-100%",
    },
    animate: {
        y: "0%",
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1] as const,
        },
    },
    exit: {
        y: "-100%",
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1] as const,
            delay: 0.2, // wait for links to stagger out
        },
    },
};

const linkVariants = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as const, delay: 0.3 + i * 0.1 },
    }),
    exit: (i: number) => ({
        y: 100,
        opacity: 0,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const, delay: i * 0.05 },
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

        // Prevent body scroll when menu is open
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [menuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled && !menuOpen ? "py-4 mix-blend-difference" : "py-8"
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link href="/" className="relative z-[60]" onClick={() => setMenuOpen(false)}>
                        <MagneticButton>
                            <span className={`text-2xl md:text-3xl font-bold tracking-tighter ${menuOpen ? 'text-black' : 'text-white'}`}>
                                AUXION<span className="text-xl align-top ml-1 opacity-50">®</span>
                            </span>
                        </MagneticButton>
                    </Link>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="group relative z-[60] flex items-center justify-center w-16 h-16 rounded-full hover:bg-white/10 transition-colors"
                    >
                        <div className="relative w-8 h-8 flex flex-col justify-center items-center">
                            <span
                                className={`absolute w-8 h-px transition-all duration-300 ${menuOpen ? 'bg-black rotate-45' : 'bg-white -translate-y-2 group-hover:-translate-y-3'}`}
                            />
                            <span
                                className={`absolute w-8 h-px transition-all duration-300 ${menuOpen ? 'bg-black -rotate-45' : 'bg-white translate-y-2 group-hover:translate-y-3'}`}
                            />
                        </div>
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 bg-[#050505] z-40 flex flex-col justify-center"
                    >
                        {/* Background minimal graphic */}
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0a0a0a] pointer-events-none skew-x-[-10deg] translate-x-32" />

                        <div className="container mx-auto px-6 md:px-24 flex flex-col md:flex-row justify-between relative z-10 w-full h-full pb-24 md:pb-0 items-end md:items-center">

                            {/* Main Links */}
                            <nav className="flex flex-col space-y-4 md:space-y-6 w-full pt-32 md:pt-0">
                                {navLinks.map((link, i) => (
                                    <div key={link.name} className="overflow-hidden">
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
                                                className="text-6xl md:text-[8rem] font-bold text-white tracking-tighter uppercase block leading-[0.8] hover:text-[#00FF88] transition-colors duration-500 relative group"
                                            >
                                                <span className="relative z-10">{link.name}</span>
                                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-4 bg-[#00FF88] -z-10 transition-all duration-500 group-hover:w-[110%]" />
                                            </Link>
                                        </motion.div>
                                    </div>
                                ))}
                            </nav>

                            {/* Sidebar Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1, duration: 1 }}
                                exit={{ opacity: 0, x: 50, transition: { duration: 0.3 } }}
                                className="md:w-1/3 flex flex-col space-y-12 self-end text-white border-l border-white/10 pl-12 hidden md:flex"
                            >
                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-[#00FF88]">Say Hello</h4>
                                    <a href="mailto:hello@auxion.studio" className="text-3xl font-medium hover:text-[#00FF88] transition-colors">
                                        hello@auxion.studio
                                    </a>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-[#00FF88]">Socials</h4>
                                    <ul className="space-y-2 text-2xl font-medium">
                                        {["Twitter", "LinkedIn", "Instagram"].map(social => (
                                            <li key={social}>
                                                <a href="#" className="hover:text-[#00FF88] transition-colors flex items-center group">
                                                    {social}
                                                    <span className="inline-block w-8 h-px bg-[#00FF88] ml-4 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
