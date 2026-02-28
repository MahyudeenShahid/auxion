"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Auxion transformed our entire digital presence. The attention to detail and engineering quality is simply unmatched.",
        author: "Elena R.",
        role: "CEO, Aura Fintech",
    },
    {
        quote: "Working with Auxion felt like an extension of our own team. They delivered a world-class platform ahead of schedule.",
        author: "Marcus T.",
        role: "Founder, Nova Skincare",
    },
];

export const Testimonials = () => {
    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-6 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Client Stories</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((test, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            className="glass p-12 rounded-[2rem] relative"
                        >
                            <Quote className="text-white/10 w-16 h-16 absolute top-8 left-8" />
                            <div className="relative z-10 mt-8">
                                <p className="text-2xl md:text-3xl leading-snug mb-12">"{test.quote}"</p>
                                <div>
                                    <h4 className="font-bold text-lg">{test.author}</h4>
                                    <p className="text-gray-400">{test.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
