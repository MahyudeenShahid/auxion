"use client";

import { motion } from "framer-motion";
import {
    Globe, ShoppingBag, ShoppingCart, Code2, MonitorPlay,
    Terminal, Layers, Search, Bot, Cpu, Cloud, Workflow,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";

const servicesList = [
    {
        category: "E-Commerce Solutions",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
        items: [
            {
                title: "Shopify Development",
                description: "Enterprise-grade Shopify Plus stores engineered for maximum conversion, featuring headless commerce architecture and custom integrations.",
                icon: <ShoppingBag className="w-6 h-6" />,
                color: "#95BF47"
            },
            {
                title: "WooCommerce",
                description: "Scalable WordPress e-commerce platforms with custom plugin development, perfectly tailored product configurations, and secure payments.",
                icon: <ShoppingCart className="w-6 h-6" />,
                color: "#96588A"
            },
            {
                title: "Custom E-Commerce",
                description: "Bespoke digital storefronts built from the ground up using Next.js and secure payment gateways for unparalleled control and performance.",
                icon: <Globe className="w-6 h-6" />,
                color: "#00FF88"
            }
        ]
    },
    {
        category: "Web & Software Engineering",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
        items: [
            {
                title: "WordPress Websites",
                description: "Premium, ultra-fast WordPress corporate sites featuring custom blocks, headless architectures, and elite security protocols.",
                icon: <MonitorPlay className="w-6 h-6" />,
                color: "#21759B"
            },
            {
                title: "Full Stack Websites",
                description: "Immersive, data-driven web applications leveraging the MERN/PERN stack, Next.js, and serverless architectures.",
                icon: <Layers className="w-6 h-6" />,
                color: "#FFFFFF"
            },
            {
                title: "Software in Python & Others",
                description: "Robust backend systems, APIs, and complex algorithms written in Python, Node.js, and Go to solve business challenges.",
                icon: <Terminal className="w-6 h-6" />,
                color: "#3776AB"
            },
            {
                title: "Custom Websites",
                description: "Highly interactive, custom-designed marketing sites utilizing GSAP, Framer Motion, and WebGL for unforgettable experiences.",
                icon: <Code2 className="w-6 h-6" />,
                color: "#00FF88"
            }
        ]
    },
    {
        category: "Artificial Intelligence",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
        items: [
            {
                title: "AI Agents",
                description: "Autonomous, context-aware AI agents designed to handle customer support, execute complex analytical tasks, and act on your behalf.",
                icon: <Bot className="w-6 h-6" />,
                color: "#A855F7"
            },
            {
                title: "AI Integrated Websites",
                description: "Next-generation platforms infused with machine learning for real-time personalization, predictive interactions, and smart features.",
                icon: <Cpu className="w-6 h-6" />,
                color: "#EC4899"
            },
            {
                title: "n8n AI Workflows",
                description: "Hyper-automated operational pipelines chaining AI models with enterprise and third-party tools via n8n for massive efficiency.",
                icon: <Workflow className="w-6 h-6" />,
                color: "#FF6B6B"
            }
        ]
    },
    {
        category: "Growth & Infrastructure",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        items: [
            {
                title: "Search Engine Optimization",
                description: "Aggressive, data-backed technical SEO, content strategy, and authority building to dominate high-value search verticals.",
                icon: <Search className="w-6 h-6" />,
                color: "#F59E0B"
            },
            {
                title: "Cloud & Deployments",
                description: "Bulletproof CI/CD pipelines, Docker containerization, and automated scaling on AWS/GCP to ensure flawless system operation.",
                icon: <Cloud className="w-6 h-6" />,
                color: "#3B82F6"
            }
        ]
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#020202] text-white selection:bg-[#00FF88] selection:text-black">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
                    <div className="w-[800px] h-[800px] bg-[#00FF88] rounded-full blur-[150px] opacity-20" />
                </div>

                <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                            Premium <br className="hidden md:block" />
                            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">Services</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
                            We architect and engineer elite digital ecosystems. From high-converting e-commerce to autonomous AI workflows, we deliver absolute technical superiority.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services List Section */}
            <section className="py-20 bg-[#050505] relative z-10">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    {servicesList.map((category, catIdx) => (
                        <div key={category.category} className="mb-32 last:mb-0 relative">
                            {/* Category Title & Image Split */}
                            <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
                                <div className="w-full lg:w-1/3">
                                    <motion.h2
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6 }}
                                        className="text-3xl md:text-5xl font-black uppercase tracking-tighter sticky top-32"
                                    >
                                        <span className="block text-[#00FF88] text-sm font-mono tracking-widest mb-4">
                                            0{catIdx + 1} // CATEGORY
                                        </span>
                                        {category.category}
                                    </motion.h2>
                                </div>
                                <div className="w-full lg:w-2/3">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8 }}
                                        className="relative w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden group border border-white/5"
                                    >
                                        <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors duration-500" />
                                        <img
                                            src={category.image}
                                            alt={category.category}
                                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Service Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:ml-auto lg:w-[calc(66.666%-3rem)]">
                                {category.items.map((service, idx) => (
                                    <motion.div
                                        key={service.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className="group relative p-8 md:p-10 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
                                    >
                                        <div
                                            className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-[50px] rounded-full pointer-events-none"
                                            style={{ backgroundColor: service.color }}
                                        />

                                        <div
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500"
                                            style={{ color: service.color }}
                                        >
                                            {service.icon}
                                        </div>

                                        <h3 className="text-xl font-bold uppercase tracking-tight mb-4">
                                            {service.title}
                                        </h3>

                                        <p className="text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-300 text-sm md:text-base">
                                            {service.description}
                                        </p>

                                        <div className="mt-auto flex items-center text-xs font-bold uppercase tracking-widest text-[#00FF88] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span>Learn More</span>
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#00FF88] opacity-[0.03]" />
                <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">
                        Ready to <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]">Launch?</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Partner with elite engineers to architect your next digital advantage. We execute with precision, speed, and uncompromising quality.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-black bg-[#00FF88] hover:bg-white transition-colors duration-300 rounded-full group"
                    >
                        Initialize Project
                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
