"use client";

import { motion } from "framer-motion";

const technologies = [
    "Next.js", "React", "TypeScript", "Node.js", "GraphQL",
    "PostgreSQL", "Tailwind CSS", "Framer Motion", "GSAP", "Prisma",
    "Vercel", "AWS", "Docker", "Stripe", "Supabase"
];

export const TechStack = () => {
    return (
        <section className="py-24 overflow-hidden bg-white/5 border-y border-white/5 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none" />
            <div className="container mx-auto px-6 max-w-7xl mb-12 text-center">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Powered by modern technology</h3>
            </div>

            <div className="flex">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                    className="flex whitespace-nowrap items-center space-x-12 px-6"
                >
                    {/* Double array for seamless loop */}
                    {[...technologies, ...technologies].map((tech, idx) => (
                        <span key={idx} className="text-3xl md:text-5xl font-bold text-white/20 hover:text-white/60 transition-colors duration-300">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
