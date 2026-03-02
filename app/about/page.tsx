"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#00FF88] selection:text-black font-sans pb-32">

            <section className="relative pt-48 pb-24 md:pt-64 md:pb-40 overflow-hidden">
                {/* Background Grid & Gradient */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[150px] opacity-20 pointer-events-none" />
                </div>

                <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
                                <Terminal className="w-4 h-4 text-gray-400" />
                                <span className="text-xs font-mono uppercase tracking-widest text-gray-400">Initialize Identity</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-12">
                                Uncompromising <br />
                                <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)]">Excellence.</span>
                            </h1>

                            <div className="space-y-8 text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl">
                                <p>
                                    Auxion Studio was founded on a singular premise: the internet is saturated with mediocrity. We exist to build digital infrastructure that definitively separates market leaders from everyone else.
                                </p>
                                <p>
                                    We do not use templates. We do not recycle ideas. Every line of code, every micro-interaction, and every architectural decision is engineered from first principles to ensure your absolute dominance.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-4 flex flex-col gap-8 justify-end"
                        >
                            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4 text-[#00FF88]">0%</h3>
                                <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Technical Debt Compromise</p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4 text-[#00FF88]">100%</h3>
                                <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Performant Architecture</p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm">
                                <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4 text-[#00FF88]">∞</h3>
                                <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Scalability Potential</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Visual Break */}
            <section className="py-24 overflow-hidden bg-black/50 border-y border-white/10">
                <div className="container mx-auto px-6 max-w-[1400px]">
                    <div className="relative w-full aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000">
                        <img
                            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop"
                            alt="Auxion Studio Logic"
                            className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-1000"
                        />
                    </div>
                </div>
            </section>

            <section className="py-32 md:py-48 text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
                        Demand More From <br />
                        <span className="text-[#00FF88]">Your Tech Stack.</span>
                    </h2>

                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center gap-3 px-12 py-6 bg-white text-black font-bold uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <span>Hire The Elite</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
