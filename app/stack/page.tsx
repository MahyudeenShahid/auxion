"use client";

import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Main architecture stacks
const stacks = [
    {
        id: "MERN",
        name: "MERN Architecture",
        description: "The industry standard for rapid, full-stack JavaScript development. We utilize MongoDB, Express, React, and Node.js to architect highly interactive single-page applications with seamless JSON data flow from database to client.",
        features: ["Real-time Data Sync", "Unified JSON Ecosystem", "Rapid Prototyping", "Massive Community Support"],
        color: "#00FF88",
        technologies: [
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", invert: false },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", invert: false },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", invert: false }
        ]
    },
    {
        id: "T3",
        name: "T3 Stack",
        description: "Built for extreme type safety and developer velocity. The T3 Stack leverages Next.js, tRPC, Tailwind CSS, and Prisma to create a completely end-to-end typed ecosystem, eliminating entire classes of runtime errors.",
        features: ["End-to-End Type Safety", "Zero-config APIs via tRPC", "Edge-Ready Infrastructure", "Rapid Styling"],
        color: "#00FF88",
        technologies: [
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", invert: false },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", invert: false },
            { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", invert: true }
        ]
    },
    {
        id: "WP",
        name: "WordPress & Woo",
        description: "The world's most ubiquitous content management system, engineered for the enterprise. We build custom, high-performance themes and complex WooCommerce platforms scalable for global commerce and publishing.",
        features: ["Custom Theme Dev", "Headless GraphQL", "WooCommerce Scaling", "Advanced Technical SEO"],
        color: "#00FF88",
        technologies: [
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", invert: false },
            { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", invert: true },
            { name: "WooCommerce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg", invert: false },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", invert: false }
        ]
    },
    {
        id: "MEAN",
        name: "MEAN Stack",
        description: "An enterprise-grade JavaScript framework utilizing Angular instead of React. Perfect for complex, deeply structured applications that require rigorous architectural enforcement and robust two-way data binding.",
        features: ["Opinionated Architecture", "Two-way Data Binding", "Dependency Injection", "Enterprise Scaling"],
        color: "#00FF88",
        technologies: [
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", invert: false },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
            { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", invert: false },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", invert: false }
        ]
    },
    {
        id: "JAM",
        name: "JAMstack",
        description: "Decoupled web architecture focused on maximum performance, higher security, and cheaper scaling. We pre-render UI globally and use serverless APIs and specialized microservices to deliver content at the edge.",
        features: ["Global CDN Distribution", "Unbreakable Security", "Instant Load Times", "Headless CMS Integration"],
        color: "#00FF88",
        technologies: [
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", invert: false },
            { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", invert: false },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", invert: false }
        ]
    }
];

// Individual comprehensive tech playground
const allTech = [
    { name: "C++", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "C", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "Java", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Go", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" },
    { name: "Rust", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg", invert: true },
    { name: "PHP", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    
    { name: "PostgreSQL", category: "Databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", category: "Databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Redis", category: "Databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "MySQL", category: "Databases", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    
    { name: "React", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
    { name: "Vue.js", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Angular", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Tailwind", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    
    { name: "Node.js", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
    { name: "Django", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", invert: true },
    { name: "Spring", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    
    { name: "WordPress", category: "CMS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg", invert: true },
    { name: "WooCommerce", category: "CMS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
    { name: "Shopify", category: "CMS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg", invert: true },
    { name: "Webflow", category: "CMS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg", invert: true },
    
    { name: "Docker", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Kubernetes", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "AWS", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
    
    { name: "n8n", category: "Automation", textIcon: "n8" },
    { name: "Zapier", category: "Automation", textIcon: "Z_" },
    { name: "Make", category: "Automation", textIcon: "Mk" },
    { name: "Puppeteer", category: "Automation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppeteer/puppeteer-original.svg" },
    { name: "Selenium", category: "Automation", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
    
    { name: "Ahrefs", category: "SEO", textIcon: "Ah" },
    { name: "Semrush", category: "SEO", textIcon: "Se" },
    { name: "Google Analytics", category: "SEO", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" }
];

const categories = ["All", "Languages", "Frontend", "Backend", "Databases", "CMS", "DevOps", "Automation", "SEO"];

export default function StackPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredTech = allTech.filter(tech => 
        activeCategory === "All" ? true : tech.category === activeCategory
    );

    return (
        <main className="min-h-screen bg-[#020202] text-white selection:bg-[#00FF88] selection:text-black">
            {/* Header Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 relative overflow-hidden">
                {/* Background Noise */}
                <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
                
                {/* Background Grid */}
                <div className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />

                <div className="container mx-auto max-w-[1200px] relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <span className="w-12 h-[1px] bg-[#00FF88]" />
                            <span className="font-mono text-sm uppercase tracking-[0.3em] text-[#00FF88]">Infrastructure</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                            The <span className="text-transparent [-webkit-text-stroke:2px_#00FF88]">Stacks.</span>
                        </h1>
                        <p className="mt-12 text-xl md:text-2xl text-gray-400 font-serif max-w-2xl leading-relaxed">
                            We don't just write code; we architect elite digital ecosystems. Explore the primary tech combinations we utilize to build the future of the web.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Premium Horizontal Rows Architecture */}
            <section className="pb-32 px-6 relative z-10 w-full">
                <div className="container mx-auto max-w-[1200px]">
                    <div className="flex flex-col gap-12 lg:gap-16">
                        {stacks.map((stack, idx) => (
                            <Fragment key={stack.id}>
                                <div id={`anchor-${stack.id}`} className="w-0 h-0 m-0 p-0 pointer-events-none" />
                                <motion.div
                                    onClick={() => {
                                        const anchor = document.getElementById(`anchor-${stack.id}`);
                                        if (anchor) {
                                            const y = anchor.getBoundingClientRect().top + window.scrollY;
                                            const stickyOffset = (window.innerHeight * 0.1) + (idx * 40);
                                            window.scrollTo({ top: y - stickyOffset, behavior: 'smooth' });
                                        }
                                    }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="group relative w-full bg-[#050505] border border-white/10 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row transition-all duration-700 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] sticky z-10 cursor-pointer"
                                    style={{ top: `calc(10vh + ${idx * 40}px)` }}
                                >
                                    {/* Subtle Hover Gradient */}
                                    <div 
                                        className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] blur-[100px] z-0 pointer-events-none transition-all duration-1000"
                                        style={{ backgroundColor: stack.color }}
                                    />

                                    {/* Left: Number & Line */}
                                    <div className="hidden lg:flex flex-col items-center justify-center p-12 border-r border-white/5 relative z-10 min-w-[150px]">
                                        <h3 className="font-mono text-5xl font-black text-white/10 group-hover:text-[#00FF88]/30 transition-colors duration-500">
                                            0{idx + 1}
                                        </h3>
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            whileInView={{ height: 96, opacity: 0.3 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                                            className="w-[1px] mt-8 group-hover:opacity-[0.8] transition-all duration-700" 
                                            style={{ backgroundColor: stack.color, boxShadow: `0 0 15px ${stack.color}` }}
                                        />
                                    </div>

                                    {/* Middle: Content */}
                                    <div className="flex-1 p-8 lg:p-12 relative z-10 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-6 lg:mb-8">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: 32 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                                className="h-[2px]" 
                                                style={{ backgroundColor: stack.color, boxShadow: `0 0 10px ${stack.color}` }}
                                            />
                                            <div className="font-mono text-[10px] tracking-[0.3em] text-[#00FF88]/50 uppercase">
                                                {stack.id} ARCHITECTURE
                                            </div>
                                        </div>
                                        
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white mb-6 group-hover:text-white transition-colors duration-300">
                                            {stack.name}
                                        </h2>
                                        
                                        <p className="text-base md:text-lg text-gray-400 font-serif leading-relaxed mb-8 max-w-3xl">
                                            {stack.description}
                                        </p>

                                        {/* Features Pill List */}
                                        <div className="flex flex-wrap gap-3">
                                            {stack.features.map((feature, i) => (
                                                <motion.div 
                                                    key={i} 
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                                                    whileHover={{ scale: 1.05, y: -2 }}
                                                    className="px-4 py-2 rounded-full border border-[#00FF88]/10 bg-[#00FF88]/5 flex items-center gap-2 group/pill cursor-default hover:bg-[#00FF88]/10 hover:border-[#00FF88]/20 shadow-sm hover:shadow-md"
                                                >
                                                    <span 
                                                        className="w-1.5 h-1.5 rounded-full" 
                                                        style={{ backgroundColor: stack.color, boxShadow: `0 0 5px ${stack.color}` }}
                                                    />
                                                    <span className="text-xs font-medium text-white/80 group-hover/pill:text-white">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Right: Tech Stack */}
                                    <div className="lg:w-[350px] p-8 lg:p-12 bg-black/40 border-t lg:border-t-0 lg:border-l border-white/5 relative z-10 flex flex-col justify-center transition-colors duration-500 group-hover:bg-[#00FF88]/[0.02]">
                                        <div className="font-mono text-[10px] tracking-[0.2em] text-[#00FF88]/30 uppercase mb-8 flex items-center justify-between">
                                            <span>Tech Stack</span>
                                            <div className="h-[1px] w-12 bg-[#00FF88]/10 group-hover:bg-[#00FF88]/30 transition-colors duration-500" />
                                        </div>
                                        
                                        <div className="grid grid-cols-2 gap-4 w-full">
                                            {stack.technologies.map((tech, i) => (
                                                <motion.div 
                                                    key={i} 
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1), ease: "easeOut" }}
                                                    className="flex flex-col items-center gap-3 group/tech"
                                                >
                                                    <div className="w-14 h-14 bg-[#080808] border border-white/5 rounded-[12px] flex items-center justify-center p-3 relative overflow-hidden transition-all duration-300 group-hover/tech:border-[#00FF88]/20 group-hover/tech:-translate-y-1 group-hover/tech:shadow-[0_5px_15px_rgba(0,255,136,0.1)]">
                                                        <div 
                                                            className="absolute inset-0 opacity-0 group-hover/tech:opacity-10 transition-opacity duration-500"
                                                            style={{ background: `radial-gradient(circle at center, ${stack.color}, transparent 70%)` }}
                                                        />
                                                        <img 
                                                            src={tech.icon} 
                                                            alt={tech.name} 
                                                            className={`w-full h-full object-contain opacity-60 group-hover/tech:opacity-100 transition-all duration-300 relative z-10 ${tech.invert ? 'invert' : ''}`} 
                                                        />
                                                    </div>
                                                    <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest group-hover/tech:text-[#00FF88] transition-colors duration-300">
                                                        {tech.name}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                </motion.div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECHNOLOGY SANDBOX PLAYGROUND */}
            <section className="py-32 px-6 border-t border-white/5 relative z-10 bg-[#050505]">
                <div className="container mx-auto max-w-[1200px]">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-8 h-[1px] bg-[#00FF88]" />
                                <span className="font-mono text-sm uppercase tracking-[0.3em] text-[#00FF88]">Raw Materials</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
                                Tech <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">Sandbox</span>
                            </h2>
                        </div>

                        {/* Category Filter Pills */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest border transition-all duration-300 ${activeCategory === cat ? 'bg-[#00FF88] border-[#00FF88] text-black' : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Interactive Grid */}
                    <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
                        <AnimatePresence>
                            {filteredTech.map((tech) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.4 }}
                                    key={tech.name}
                                    className="group flex flex-col items-center gap-3"
                                >
                                    <div className="w-full aspect-square bg-[#0A0A0A] border border-white/5 rounded-2xl flex items-center justify-center p-6 shadow-lg hover:-translate-y-2 hover:border-[#00FF88]/50 hover:shadow-[0_10px_30px_rgba(0,255,136,0.1)] transition-all duration-300 cursor-pointer">
                                        {/* @ts-ignore */}
                                        {tech.icon ? (
                                            <img 
                                                // @ts-ignore
                                                src={tech.icon} 
                                                alt={tech.name} 
                                                // @ts-ignore
                                                className={`w-full h-full object-contain opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ${tech.invert ? 'invert' : ''}`} 
                                            />
                                        ) : (
                                            <span className="text-3xl font-black text-white/40 group-hover:text-white transition-colors duration-300">
                                                {/* @ts-ignore */}
                                                {tech.textIcon}
                                            </span>
                                        )}
                                    </div>
                                    <span className="font-mono text-[10px] tracking-wider text-gray-500 uppercase group-hover:text-[#00FF88] transition-colors duration-300 text-center">
                                        {tech.name}
                                    </span>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                </div>
            </section>

        </main>
    );
}
