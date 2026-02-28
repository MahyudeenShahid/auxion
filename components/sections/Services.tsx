"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WebPlatformVisual, SaaSVisual, BrandVisual, AIVisual } from "@/components/ui/ServiceVisuals";

const services = [
    {
        id: "01",
        title: "Digital Platforms",
        shortDesc: "Immersive Web & E-Commerce",
        description: "We architect bespoke digital marketing environments that transform passive observers into fiercely loyal brand advocates through intense visual storytelling and seamless motion.",
        tags: ["Next.js", "WebGL", "GSAP"],
        color: "#00FF88",
        visual: <WebPlatformVisual />
    },
    {
        id: "02",
        title: "SaaS & Systems",
        shortDesc: "Scalable Architecture",
        description: "From complex database design to real-time frontend execution, we engineer bulletproof software applications built to handle immense scale.",
        tags: ["React", "Node.js", "PostgreSQL"],
        color: "#ffffff",
        visual: <SaaSVisual />
    },
    {
        id: "03",
        title: "Brand Identity",
        shortDesc: "Visual Languages",
        description: "We distill complex corporate narratives into striking, aggressive visual identities and comprehensive user interface systems.",
        tags: ["Figma", "Design Systems", "Typography"],
        color: "#a3a3a3",
        visual: <BrandVisual />
    },
    {
        id: "04",
        title: "AI Integration",
        shortDesc: "Automation Workflows",
        description: "Leveraging cutting-edge artificial intelligence, n8n workflows, and custom Python microservices to automate your operations.",
        tags: ["Python", "OpenAI", "n8n"],
        color: "#00cc6d",
        visual: <AIVisual />
    }
];

export const Services = () => {
    // Default to the first one being open to establish the pattern
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <section id="services" className="py-24 md:py-32 bg-[#020202] text-white">
            <div className="container mx-auto px-6 max-w-[1400px]">

                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <h3 className="text-[#00FF88] text-sm font-mono tracking-[0.2em] uppercase mb-6 opacity-80">
                            Our Capabilities
                        </h3>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
                            Premium <br />
                            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">Engineering</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-sm text-lg hidden md:block">
                        We don't just build websites; we construct immersive digital experiences designed to dominate your market.
                    </p>
                </div>

                {/* The Expandable Pillars Container */}
                <div className="w-full h-[600px] md:h-[70vh] min-h-[500px] flex flex-col md:flex-row gap-2 md:gap-4">
                    {services.map((service, idx) => {
                        const isActive = activeIndex === idx;

                        return (
                            <motion.div
                                key={service.id}
                                // Automatically expand flex on active, shrink on inactive
                                animate={{
                                    flex: isActive ? (typeof window !== 'undefined' && window.innerWidth >= 768 ? 4 : 3) : 1
                                }}
                                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                                onMouseEnter={() => setActiveIndex(idx)}
                                onClick={() => setActiveIndex(idx)}
                                className={`relative overflow-hidden rounded-2xl md:rounded-[2rem] border transition-colors duration-500 cursor-pointer ${isActive ? 'border-white/20 bg-[#0a0a0a]' : 'border-white/5 bg-[#050505] hover:bg-[#080808]'}`}
                            >
                                {/* Static/Collapsed View Info */}
                                <div className="absolute top-0 left-0 w-full h-full p-6 md:p-8 flex flex-row md:flex-col justify-between items-center md:items-start z-20 pointer-events-none">
                                    <span className={`absolute top-6 left-6 md:top-8 md:left-8 font-mono transition-colors duration-500 ${isActive ? 'text-[#00FF88] text-lg' : 'text-gray-600 text-sm'}`}>
                                        {service.id}
                                    </span>

                                    {/* Mobile Title (Horizontal) */}
                                    <h3 className={`md:hidden absolute bottom-6 left-6 font-bold tracking-tight uppercase transition-all duration-500 ${isActive ? 'opacity-0' : 'opacity-100 text-lg'}`}>
                                        {service.title}
                                    </h3>

                                    {/* Desktop Title (Vertical when collapsed, perfectly centered) */}
                                    <div className="hidden md:block absolute inset-0 w-full h-full">
                                        <motion.div
                                            animate={{
                                                opacity: isActive ? 0 : 1,
                                                rotate: isActive ? 0 : -90,
                                            }}
                                            transition={{ duration: 0.4 }}
                                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-2xl lg:text-3xl font-bold uppercase tracking-widest text-white/40"
                                        >
                                            {service.title}
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Expanded Content View */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                            className="absolute inset-0 w-full h-full z-10 p-6 md:p-12 flex flex-col justify-end"
                                        >
                                            {/* Media / Visual Background */}
                                            <div className="absolute inset-0 z-0 opacity-40 md:opacity-100 md:w-1/2 md:right-0 md:left-auto flex items-center justify-center pointer-events-none">
                                                <div className="scale-75 md:scale-100 transform origin-center">
                                                    {service.visual}
                                                </div>
                                                {/* Ambient Glow */}
                                                <div
                                                    className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[100px] opacity-20"
                                                    style={{ backgroundColor: service.color }}
                                                />
                                            </div>

                                            {/* Text Content Overlay */}
                                            <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-4 max-w-md bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pt-12 md:bg-none">
                                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-2">
                                                    {service.title}
                                                </h3>
                                                <p className="text-xl font-medium text-[#00FF88]">
                                                    {service.shortDesc}
                                                </p>
                                                <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-2 mb-4">
                                                    {service.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.tags.map(tag => (
                                                        <span key={tag} className="text-[10px] md:text-xs font-mono uppercase tracking-widest px-3 py-1.5 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm text-gray-300">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
