"use client";

import { motion } from "framer-motion";

export const About = () => {
    return (
        <section id="about" className="py-32 relative text-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-16 justify-between items-start">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
                            Future <br /> Proof <br /> Digital.
                        </h2>
                        <div className="w-20 h-1 bg-[#00FF88] mb-12" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-full md:w-1/2 space-y-8 text-xl text-gray-400 font-serif"
                    >
                        <p className="italic text-2xl text-white">
                            Based globally. Working with those who dare to disrupt.
                        </p>
                        <p>
                            Auxion is a collective of elite engineers, boundary-pushing designers, and strategic thinkers. We don't just build websites; we engineer scalable, immersive platforms that redefine industry standards.
                        </p>
                        <p>
                            By merging aggressive aesthetic intent with rock-solid Next.js and WebGL architectures, we deliver products that aren't just seen—they are experienced.
                        </p>

                        <div className="pt-12 grid grid-cols-2 gap-8 border-t border-white/10 mt-12">
                            <div>
                                <span className="text-5xl font-bold text-white block mb-2 tracking-tighter">40+</span>
                                <span className="text-xs uppercase tracking-widest font-mono">Products Shipped</span>
                            </div>
                            <div>
                                <span className="text-5xl font-bold text-white block mb-2 tracking-tighter">12</span>
                                <span className="text-xs uppercase tracking-widest font-mono">Industry Awards</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
