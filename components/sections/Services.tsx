"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const services = [
    {
        title: "Web Platforms",
        subtitle: "High-performance marketing sites",
        description: "We build award-winning websites that drive conversion and communicate your brand's true value through immersive motion design.",
    },
    {
        title: "SaaS Engineering",
        subtitle: "Scalable product architecture",
        description: "From database design to frontend execution, we engineer complex software that handles scale effortlessly.",
    },
    {
        title: "Digital Branding",
        subtitle: "Identity & UI/UX Systems",
        description: "Creating premium digital identities and robust design systems that ensure consistency across all touchpoints.",
    },
    {
        title: "Creative Development",
        subtitle: "WebGL & Advanced Motion",
        description: "Pushing the boundaries of the browser leveraging three.js, WebGL, and custom shader work.",
    },
];

export const Services = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="services" className="py-32 relative border-t border-white/10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl md:text-8xl font-bold tracking-tighter uppercase"
                    >
                        Capabilities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl text-gray-400 max-w-xl"
                    >
                        A multidisciplinary approach fusing extreme technical rigor with high-end aesthetic intent.
                    </motion.p>
                </div>

                <div className="w-full border-t border-white/20">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="border-b border-white/20 py-12 px-4 group relative cursor-pointer"
                        >
                            {/* Hover effect background */}
                            <div
                                className={`absolute inset-0 bg-white/5 transition-opacity duration-500 pointer-events-none ${hoveredIndex === idx ? "opacity-100" : "opacity-0"
                                    }`}
                            />

                            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center relative z-10">
                                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                                    <span className="text-sm font-bold opacity-50 block mb-4 uppercase tracking-widest">0{idx + 1}</span>
                                    <h3 className="text-4xl md:text-6xl font-bold tracking-tight group-hover:pl-8 transition-all duration-500 uppercase">
                                        {service.title}
                                    </h3>
                                </div>

                                <div className="w-full lg:w-5/12 flex items-end justify-between overflow-hidden">
                                    <div className={`transition-all duration-500 ${hoveredIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                                        <p className="text-[#00FF88] font-bold mb-2 text-xl">{service.subtitle}</p>
                                        <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>
                                    </div>

                                    <div className={`w-16 h-16 rounded-full border border-white flex items-center justify-center shrink-0 ml-8 transition-transform duration-500 ${hoveredIndex === idx ? 'bg-white text-black -rotate-45' : ''}`}>
                                        <ArrowRight size={24} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
