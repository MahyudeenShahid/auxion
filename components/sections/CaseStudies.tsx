"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Aura Fintech",
        category: "Web Platform & Architecture",
        year: "2025",
        color: "from-[#0A0A0A] via-[#111] to-[#222]", // Dark, monolithic gradient
    },
    {
        title: "Nova Global",
        category: "Enterprise E-Commerce",
        year: "2024",
        color: "from-[#050505] via-[#1A1A1A] to-[#333]",
    },
];

export const CaseStudies = () => {
    return (
        <section id="work" className="py-32 relative text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex justify-between items-end mb-24 border-b border-white/20 pb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-bold tracking-tighter uppercase"
                    >
                        Selected Works
                    </motion.h2>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:inline-block font-mono text-sm tracking-widest uppercase hover:text-[#00FF88] transition-colors"
                    >
                        [ View Archive ]
                    </motion.button>
                </div>

                <div className="flex flex-col gap-32">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                            className="group cursor-pointer relative"
                        >
                            {/* Massive Title Overlay */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-full text-center pointer-events-none">
                                <h3 className="text-[10vw] font-bold tracking-tighter uppercase leading-[0.8] mix-blend-difference text-white">
                                    {project.title}
                                </h3>
                            </div>

                            {/* The Image Container */}
                            <div
                                className={`w-full h-[60vh] md:h-[80vh] overflow-hidden relative bg-gradient-to-br ${project.color} shadow-[0_30px_60px_rgba(0,0,0,0.8)] grayscale group-hover:grayscale-0 transition-all duration-700`}
                            >
                                {/* Parallax Image Placeholder */}
                                <motion.div
                                    className="w-full h-[120%] -top-[10%] absolute bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                                    style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)' }}
                                />
                            </div>

                            {/* Meta Data */}
                            <div className="flex justify-between items-center mt-8 border-t border-white/10 pt-4">
                                <p className="text-gray-400 font-mono text-xs md:text-sm tracking-widest uppercase">
                                    {project.category}
                                </p>
                                <p className="text-[#00FF88] font-mono text-xs md:text-sm">
                                    {project.year}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
