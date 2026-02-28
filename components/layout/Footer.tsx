"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { MagneticButton } from "../ui/MagneticButton";

export const Footer = () => {
    return (
        <section id="contact" className="relative bg-[#0A0A0A] text-white rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden -mt-10 z-20 pt-32 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Massive Call to Action */}
                <div className="flex flex-col items-center text-center mb-32">
                    <motion.h2
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                        className="text-[12vw] md:text-[10vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12 text-[#00FF88]"
                    >
                        Let's Talk.
                    </motion.h2>

                    <MagneticButton>
                        <Link
                            href="mailto:hello@auxion.studio"
                            className="group flex items-center justify-between w-full max-w-2xl px-8 py-6 rounded-full border border-white/20 hover:border-[#00FF88] hover:bg-[#00FF88] hover:text-black transition-all duration-500"
                        >
                            <span className="text-2xl md:text-4xl font-bold tracking-tight">hello@auxion.studio</span>
                            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-[#00FF88] transition-colors duration-500">
                                <ArrowUpRight size={24} />
                            </div>
                        </Link>
                    </MagneticButton>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16 mb-24">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-3xl font-bold tracking-tighter uppercase inline-block mb-6 text-white">
                            AUXION<span className="text-xl align-top ml-1 opacity-50">®</span>
                        </Link>
                        <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
                            Engineering the future of digital experiences. Premium solutions for global scale.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#00FF88]">Socials</h4>
                        <ul className="space-y-4">
                            {['Twitter', 'LinkedIn', 'Instagram', 'Awwwards'].map(social => (
                                <li key={social}>
                                    <Link href="#" className="text-lg font-medium hover:text-[#00FF88] transition-colors">
                                        {social}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#00FF88]">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(legal => (
                                <li key={legal}>
                                    <Link href="#" className="text-lg font-medium hover:text-[#00FF88] transition-colors">
                                        {legal}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm font-bold uppercase tracking-widest text-[#00FF88] border-t border-white/10 pt-8">
                    <p className="text-gray-500">© {new Date().getFullYear()} Auxion Studio</p>
                    <p className="mt-4 md:mt-0 items-center flex">
                        Handcrafted with <span className="w-2 h-2 rounded-full bg-[#00FF88] mx-2 inline-block"></span> in the Cloud
                    </p>
                </div>

            </div>
        </section>
    );
};
