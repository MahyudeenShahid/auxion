"use client";

import { motion } from "framer-motion";

export const Process = () => {
    return (
        <section id="process" className="py-32 relative text-white overflow-hidden bg-[#0A0A0A]">
            <div className="container mx-auto px-6 md:px-12 flex flex-col justify-center min-h-[80vh]">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full flex justify-between items-start mb-16 border-b border-white/10 pb-8"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
                        Our Method
                    </h2>
                    <span className="font-mono text-xs text-[#00FF88] uppercase tracking-[0.2em] hidden md:block mt-6">
            // Engineering Excellence
                    </span>
                </motion.div>

                {/* Minimalist Asymmetrical Text Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-4"
                    >
                        <h3 className="text-3xl font-bold uppercase tracking-tight mb-6">
                            Strategy meets <br /> Execution.
                        </h3>
                        <p className="text-gray-400 leading-relaxed font-serif italic text-xl">
                            "We strip away the unnecessary, focusing deeply on core aesthetics and uncompromising technical performance."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="md:col-span-8 bg-[#111] p-12 md:p-24 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full" />

                        <div className="space-y-12 relative z-10">
                            <div className="flex border-b border-white/10 pb-12">
                                <span className="text-[#00FF88] font-mono mr-8">01.</span>
                                <div>
                                    <h4 className="text-2xl font-bold uppercase mb-2">Discovery</h4>
                                    <p className="text-gray-500">Uncovering root architecture needs and mapping aesthetic trajectories.</p>
                                </div>
                            </div>

                            <div className="flex border-b border-white/10 pb-12">
                                <span className="text-[#00FF88] font-mono mr-8">02.</span>
                                <div>
                                    <h4 className="text-2xl font-bold uppercase mb-2">Build Phase</h4>
                                    <p className="text-gray-500">Executing precise code utilizing Next.js, WebGL, and robust infrastructure.</p>
                                </div>
                            </div>

                            <div className="flex">
                                <span className="text-[#00FF88] font-mono mr-8">03.</span>
                                <div>
                                    <h4 className="text-2xl font-bold uppercase mb-2">Scale & Polish</h4>
                                    <p className="text-gray-500">Rigorous load-testing, animation tuning, and flawless multi-device deployment.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
