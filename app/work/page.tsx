"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: "01",
        title: "Nexus E-Commerce",
        category: "Shopify Plus / Headless",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop",
        color: "#00FF88"
    },
    {
        id: "02",
        title: "Aura FinTech",
        category: "Web Application / React",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        color: "#A855F7"
    },
    {
        id: "03",
        title: "Vanguard AI",
        category: "Generative AI Platform",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
        color: "#EC4899"
    },
    {
        id: "04",
        title: "Onyx Logistics",
        category: "Enterprise Dashboard / Next.js",
        image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c83a7f?q=80&w=1200&auto=format&fit=crop",
        color: "#3B82F6"
    }
];

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-[#000000] text-white selection:bg-[#00FF88] selection:text-black font-sans pb-32">

            <section className="relative pt-48 pb-24 md:pt-64 md:pb-32 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] opacity-30 pointer-events-none" />

                <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
                            Our <br />
                            <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)]">Work</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
                            A curated selection of our finest engineering and design achievements. Built for scale, engineered for dominance.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="pt-24 md:pt-40">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="flex flex-col gap-24 md:gap-40">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="group cursor-pointer"
                            >
                                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-end mb-8">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-sm font-mono tracking-widest text-[#00FF88] opacity-80">
                                                PROJECT // {project.id}
                                            </span>
                                            <div className="h-[1px] flex-1 bg-white/10" />
                                        </div>
                                        <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_rgba(255,255,255,1)] transition-all duration-500">
                                            {project.title}
                                        </h2>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <p className="text-sm md:text-base text-gray-400 font-mono uppercase tracking-widest">
                                            {project.category}
                                        </p>
                                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500 shrink-0">
                                            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                                        </div>
                                    </div>
                                </div>

                                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/10">
                                    <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500" />
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[0.16,1,0.3,1] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                                    />
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 mix-blend-overlay transition-opacity duration-1000 z-20 pointer-events-none"
                                        style={{ backgroundColor: project.color }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-40 flex justify-center">
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-transparent border border-[#00FF88]/30 hover:border-[#00FF88] rounded-full overflow-hidden transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-[#00FF88]/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative font-mono text-sm tracking-widest uppercase text-white group-hover:text-[#00FF88] transition-colors duration-300">
                                Start Your Next Project
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
