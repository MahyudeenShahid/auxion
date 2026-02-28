"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";

export const Contact = () => {
    return (
        <section id="contact" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="glass rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
                                Ready to transform <br /> your digital presence?
                            </h2>
                            <p className="text-xl text-gray-400 mb-12">
                                Drop us a line and let's craft something extraordinary together.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Email</h4>
                                    <a href="mailto:hello@auxion.studio" className="text-2xl hover:text-gray-300 transition-colors">hello@auxion.studio</a>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">Location</h4>
                                    <p className="text-2xl">Global / Remote First</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.form
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 flex flex-col"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-transparent border-b border-white/20 p-4 focus:outline-none focus:border-white transition-colors text-lg"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-transparent border-b border-white/20 p-4 focus:outline-none focus:border-white transition-colors text-lg"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Company / Organization"
                                className="w-full bg-transparent border-b border-white/20 p-4 focus:outline-none focus:border-white transition-colors text-lg"
                            />
                            <textarea
                                placeholder="Tell us about your project..."
                                rows={4}
                                className="w-full bg-transparent border-b border-white/20 p-4 focus:outline-none focus:border-white transition-colors text-lg resize-none"
                            />

                            <div className="pt-8 self-start">
                                <MagneticButton className="inline-block">
                                    <button type="button" className="px-10 py-5 rounded-full bg-white text-black font-semibold text-lg hover:scale-105 transition-transform duration-300">
                                        Send Message
                                    </button>
                                </MagneticButton>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};
