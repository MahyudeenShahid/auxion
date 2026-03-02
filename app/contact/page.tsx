"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#020202] text-white selection:bg-[#00FF88] selection:text-black font-sans pb-32">

            <section className="relative pt-48 pb-24 md:pt-64 md:pb-32 overflow-hidden">
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] opacity-20 pointer-events-none" />

                <div className="container relative z-10 mx-auto px-6 max-w-[1400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
                                Let's <br />
                                <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.8)]">Talk</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-xl mb-16">
                                Ready to deploy elite engineering for your brand? Drop us a line and let's structure the architecture of your next success.
                            </p>

                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-4 border-b border-white/10 pb-4 inline-flex w-full max-w-sm">Direct Inquiry</h4>
                                    <a href="mailto:hello@auxion.studio" className="text-3xl md:text-4xl font-black uppercase tracking-tighter hover:text-[#00FF88] transition-colors flex items-center gap-4 group">
                                        <Mail className="w-8 h-8 text-[#00FF88]" />
                                        hello@auxion.studio
                                    </a>
                                </div>

                                <div>
                                    <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-4 border-b border-white/10 pb-4 inline-flex w-full max-w-sm">Global HQ</h4>
                                    <div className="flex items-start gap-4 text-xl text-gray-300">
                                        <MapPin className="w-6 h-6 text-white shrink-0 mt-1" />
                                        <p>
                                            One World Trade Center<br />
                                            Suite 4500<br />
                                            New York, NY 10007
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-[#050505] border border-white/10 p-8 md:p-12 rounded-[2rem] relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF88]/5 rounded-full blur-[80px]" />

                            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-8 relative z-10">Project Brief</h3>

                            <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Name *</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#00FF88]/50 focus:bg-white/10 transition-colors placeholder:text-gray-600"
                                        placeholder="John Carter"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#00FF88]/50 focus:bg-white/10 transition-colors placeholder:text-gray-600"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">Project Details</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-[#00FF88]/50 focus:bg-white/10 transition-colors placeholder:text-gray-600 resize-none"
                                        placeholder="Tell us about your objectives, budget, and timeline..."
                                    />
                                </div>

                                <button className="mt-4 group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#00FF88] text-black font-bold uppercase tracking-widest text-sm rounded-xl overflow-hidden hover:bg-white transition-colors duration-300">
                                    <span>Initialize Transmission</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>
        </main>
    );
}
