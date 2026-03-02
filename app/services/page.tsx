"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
    Globe, ShoppingBag, ShoppingCart, Code2, MonitorPlay,
    Terminal, Layers, Search, Bot, Cpu, Cloud, Workflow,
    ArrowRight, CheckCircle2
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";

const servicesList = [
    {
        category: "E-Commerce Architecture",
        description: "High-performance digital storefronts engineered to maximize conversion rates and scale seamlessly with your brand's growth.",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1200&auto=format&fit=crop",
        items: [
            {
                title: "Custom E-Commerce",
                description: "Bespoke digital storefronts built from the ground up using Next.js and secure payment gateways for unparalleled control, speed, and tailored user experiences.",
                icon: <Globe className="w-6 h-6" />,
                color: "#00FF88",
                tags: ["Next.js", "Stripe API", "Headless"]
            },
            {
                title: "Shopify Plus Solutions",
                description: "Enterprise-grade Shopify stores engineered for maximum conversion. We build fully custom themes and highly complex integrations using Hydrogen and Oxygen.",
                icon: <ShoppingBag className="w-6 h-6" />,
                color: "#95BF47",
                tags: ["Liquid", "Hydrogen", "GraphQL"]
            },
            {
                title: "WooCommerce Development",
                description: "Scalable WordPress e-commerce platforms with advanced custom plugin development, perfectly tailored product configurations, and seamless CRM integrations.",
                icon: <ShoppingCart className="w-6 h-6" />,
                color: "#96588A",
                tags: ["PHP", "React", "REST API"]
            }
        ]
    },
    {
        category: "Software & Web Engineering",
        description: "From striking landing pages to complex data-heavy applications, we build robust software tailored to dominate your specific market niche.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
        items: [
            {
                title: "Interactive Web Experiences",
                description: "Highly interactive, custom-designed marketing sites utilizing GSAP, WebGL, and Framer Motion. We turn your website into an unforgettable visual journey.",
                icon: <Code2 className="w-6 h-6" />,
                color: "#00FF88",
                tags: ["GSAP", "Three.js", "Framer"]
            },
            {
                title: "Full Stack Applications",
                description: "Immersive, data-driven web applications leveraging the modern stack (Next.js, Node, PostgreSQL) and highly resilient serverless deployments.",
                icon: <Layers className="w-6 h-6" />,
                color: "#FFFFFF",
                tags: ["React", "Node.js", "PostgreSQL"]
            },
            {
                title: "Python & Backend Systems",
                description: "Robust, high-throughput backend systems, REST/GraphQL APIs, and complex algorithms written in Python, Node, and Go to solve profound business challenges.",
                icon: <Terminal className="w-6 h-6" />,
                color: "#3776AB",
                tags: ["Python", "FastAPI", "Go"]
            },
            {
                title: "Enterprise WordPress",
                description: "Premium, ultra-fast WordPress corporate sites featuring exclusively built custom blocks, headless Next.js architectures, and elite security protocols.",
                icon: <MonitorPlay className="w-6 h-6" />,
                color: "#21759B",
                tags: ["React Blocks", "WP GraphQL", "Headless"]
            }
        ]
    },
    {
        category: "AI & Hyper-Automation",
        description: "Deploying sophisticated contextual models and workflow automations to aggressively scale your operational capabilities.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
        items: [
            {
                title: "Autonomous AI Agents",
                description: "Context-aware AI agents designed to handle tier-1 customer support, execute complex analytical tasks, and act dynamically on your behalf across platforms.",
                icon: <Bot className="w-6 h-6" />,
                color: "#A855F7",
                tags: ["OpenAI", "LangChain", "Vector DBs"]
            },
            {
                title: "Platform AI Integration",
                description: "Next-generation software infused with machine learning for real-time personalization, predictive interactions, and hyper-smart search features.",
                icon: <Cpu className="w-6 h-6" />,
                color: "#EC4899",
                tags: ["TensorFlow", "Pinecone", "Custom Models"]
            },
            {
                title: "n8n AI Workflows",
                description: "Hyper-automated operational pipelines chaining local and cloud LLMs with your enterprise software and third-party tools via n8n for massive efficiency.",
                icon: <Workflow className="w-6 h-6" />,
                color: "#FF6B6B",
                tags: ["n8n", "Webhooks", "RPA"]
            }
        ]
    },
    {
        category: "Scale & Infrastructure",
        description: "Ensuring maximum visibility, infinite scale availability, and rapid deployment cycles through elite operational standards.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        items: [
            {
                title: "Technical SEO Mastery",
                description: "Aggressive, data-backed technical SEO, strategic content siloing, and programmatic authority building to dominate high-value search queries.",
                icon: <Search className="w-6 h-6" />,
                color: "#F59E0B",
                tags: ["Core Web Vitals", "Schema", "Programmatic"]
            },
            {
                title: "Cloud Architecture CI/CD",
                description: "Bulletproof integration/delivery pipelines, Docker containerization, and automated scaling architectures on AWS or GCP to ensure flawless system uptime.",
                icon: <Cloud className="w-6 h-6" />,
                color: "#3B82F6",
                tags: ["Docker", "AWS", "GitHub Actions"]
            }
        ]
    }
];

export default function ServicesPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <main className="min-h-screen bg-[#000000] text-white selection:bg-[#00FF88] selection:text-black font-sans" ref={containerRef}>

            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden border-b border-white/5">
                {/* Background effects */}
                <div className="absolute inset-0 z-0">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />

                    {/* Glowing Orb */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#00FF88] rounded-[100%] blur-[150px] opacity-[0.15] pointer-events-none mix-blend-screen" />
                </div>

                <motion.div
                    style={{ y: headerY, opacity: headerOpacity }}
                    className="container relative z-10 mx-auto px-6 max-w-[1400px] text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00FF88]/30 bg-[#00FF88]/5 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                            <span className="text-xs font-mono uppercase tracking-widest text-[#00FF88]">Elite Capabilities</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                            Our <br />
                            <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)] xl:[-webkit-text-stroke:3px_rgba(255,255,255,0.8)]">Arsenal</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
                            We deploy aggressive, high-performance technical solutions. From custom immersive platforms to autonomous AI systems, we build to dominate.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Split Scroll Layout Section */}
            <section className="relative z-10 bg-[#000000] py-24 md:py-40">
                <div className="container mx-auto px-6 max-w-[1400px]">

                    <div className="flex flex-col gap-32 md:gap-48">
                        {servicesList.map((category, index) => (
                            <div key={index} className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">

                                {/* Left Side: Sticky Category Info */}
                                <div className="w-full lg:w-5/12 relative">
                                    <div className="lg:sticky lg:top-32 flex flex-col gap-8">
                                        <div>
                                            <span className="text-[#00FF88] text-sm font-mono tracking-widest mb-4 block">
                                                INTELLIGENCE // 0{index + 1}
                                            </span>
                                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                                                {category.category}
                                            </h2>
                                            <p className="text-xl text-gray-400 leading-relaxed">
                                                {category.description}
                                            </p>
                                        </div>

                                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 group">
                                            <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-500 group-hover:bg-transparent" />
                                            <img
                                                src={category.image}
                                                alt={category.category}
                                                className="absolute w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side: Scrolling Service Cards */}
                                <div className="w-full lg:w-7/12 flex flex-col gap-6 md:gap-8 lg:pt-24">
                                    {category.items.map((service, sIndex) => (
                                        <motion.div
                                            key={sIndex}
                                            initial={{ opacity: 0, y: 50 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.6, delay: sIndex * 0.1 }}
                                            className="group relative p-8 md:p-10 rounded-[2rem] bg-[#050505] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
                                        >
                                            {/* Hover Glow Light */}
                                            <div
                                                className="absolute -top-32 -right-32 w-64 h-64 opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-[80px] rounded-full pointer-events-none"
                                                style={{ backgroundColor: service.color }}
                                            />

                                            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 relative z-10">
                                                {/* Icon Container */}
                                                <div
                                                    className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-[#0a0a0a] border border-white/10 group-hover:bg-white/5 transition-colors duration-500"
                                                    style={{ color: service.color }}
                                                >
                                                    {service.icon}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1">
                                                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 group-hover:text-white transition-colors duration-300">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-gray-400 leading-relaxed mb-8 text-base md:text-lg">
                                                        {service.description}
                                                    </p>

                                                    {/* Tags */}
                                                    <div className="flex flex-wrap gap-2 mb-8">
                                                        {service.tags.map((tag, tIndex) => (
                                                            <span
                                                                key={tIndex}
                                                                className="px-3 py-1.5 text-xs font-mono uppercase tracking-widest border border-white/10 rounded-full text-gray-400 bg-white/5 group-hover:border-white/20 group-hover:text-gray-300 transition-all duration-300"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Feature List (Mock) */}
                                                    <div className="space-y-3 mb-8 opacity-0 h-0 hidden md:block group-hover:opacity-100 group-hover:h-auto transition-all duration-500">
                                                        {["Performance Optimized", "Zero Technical Debt", "Scalable Architecture"].map((feature, fIndex) => (
                                                            <div key={fIndex} className="flex items-center gap-3 text-sm text-gray-500">
                                                                <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                                                                {feature}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Arrow Link - Absolute bottom right */}
                                            <div className="md:absolute right-10 bottom-10 flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#00FF88]">
                                                <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                                                    Deploy Now
                                                </span>
                                                <div className="w-10 h-10 rounded-full border border-[#00FF88]/30 flex items-center justify-center group-hover:bg-[#00FF88] group-hover:text-black transition-colors duration-300">
                                                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Massive CTA Section */}
            <section className="relative py-32 md:py-48 overflow-hidden bg-[#000000] border-t border-white/10 text-center">
                {/* Visual Glitch/Noise or simple background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF88] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />
                </div>

                <div className="container relative z-10 mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.85]">
                            Initiate <br />
                            <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)]">Sequence</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                            Stop compromising on your digital infrastructure. Partner with elite engineering to architect your absolute market dominance.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#00FF88] text-black font-bold uppercase tracking-widest text-sm overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                <span className="relative z-10 flex items-center gap-3">
                                    Establish Contact
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <Link href="/" className="text-gray-400 hover:text-white uppercase tracking-widest text-sm font-bold transition-colors">
                                Return to Base
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
