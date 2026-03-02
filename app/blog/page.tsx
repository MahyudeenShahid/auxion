"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const posts = [
    {
        id: 1,
        title: "The Death of Monolithic E-Commerce Architecture",
        excerpt: "Why headless architectures using Next.js and Shopify Hydrogen are becoming the baseline necessity for high-volume enterprise stores.",
        category: "Engineering",
        date: "Nov 24, 2026",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Automating Agency Operations with n8n and LLMs",
        excerpt: "A deep dive into how we utilize open-source workflow automation and local language models to replace tier-1 support capabilities.",
        category: "Artificial Intelligence",
        date: "Oct 12, 2026",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Achieving 99/100 Core Web Vitals with GSAP",
        excerpt: "Heavy web animations usually destroy performance. Here is our proprietary method for maintaining buttery smooth 60fps renders without sacrificing Lighthouse scores.",
        category: "Performance",
        date: "Sep 05, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "PostgreSQL Indexing Strategies for SaaS Platforms",
        excerpt: "Stop letting slow database queries throttle your backend. A technical look at aggressive indexing protocols for massive B2B data applications.",
        category: "Database",
        date: "Aug 18, 2026",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#000000] text-white selection:bg-[#00FF88] selection:text-black font-sans pb-32">

            <section className="relative pt-48 pb-20 md:pt-64 md:pb-32 overflow-hidden border-b border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00FF88] rounded-full blur-[200px] opacity-[0.05] pointer-events-none" />

                <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
                            <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)]">The</span> <br />
                            Journal
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
                            Technical deep dives, architectural theories, and brutal honesty about the state of software engineering.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="pt-24 md:pt-32">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        {posts.map((post, idx) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="group cursor-pointer flex flex-col gap-8"
                            >
                                <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10">
                                    <div className="absolute inset-0 bg-black/40 z-10 transition-colors duration-500 group-hover:bg-transparent" />
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
                                    />
                                </div>

                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-[#00FF88] text-xs font-mono tracking-widest uppercase px-3 py-1 border border-[#00FF88]/30 rounded-full bg-[#00FF88]/5">
                                            {post.category}
                                        </span>
                                        <span className="flex items-center gap-2 text-gray-500 text-xs font-mono uppercase">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-2 text-gray-500 text-xs font-mono uppercase">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl font-bold uppercase tracking-tight mb-4 group-hover:text-[#00FF88] transition-colors duration-300">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                                        Read Article
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 text-[#00FF88]" />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <div className="mt-32 flex justify-center">
                        <button className="px-10 py-4 border border-white/20 hover:border-white text-sm font-mono tracking-widest uppercase rounded-full transition-colors duration-300">
                            Load Archives
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
