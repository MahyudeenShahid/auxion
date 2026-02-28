"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";

const row1 = ["React", "Next.js", "TypeScript", "JavaScript", "C++", "C", "Java"];
const row2 = ["Node.js", "Python", "GraphQL", "PostgreSQL", "Prisma", "Docker", "AWS"];
const row3 = ["Artificial Intelligence", "n8n", "Framer Motion", "GSAP", "Tailwind CSS", "Netlify", "Vercel"];

const TechRow = ({ items, direction = 1, speed = 20 }: { items: string[], direction?: number, speed?: number }) => {
    return (
        <div className="flex w-full overflow-hidden whitespace-nowrap py-4 md:py-8 relative z-10 group">
            {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-[15vw] bg-gradient-to-r from-[#020202] to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-[15vw] bg-gradient-to-l from-[#020202] to-transparent z-20 pointer-events-none" />

            <motion.div
                animate={{ x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{ duration: speed, ease: "linear", repeat: Infinity }}
                className="flex items-center space-x-12 md:space-x-24 px-6 md:px-12"
            >
                {[...items, ...items, ...items].map((tech, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-center relative hover-target"
                    >
                        <span className="text-4xl md:text-6xl lg:text-[7rem] font-bold tracking-tighter uppercase text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] group-hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.4)] hover:!text-[#00FF88] hover:[-webkit-text-stroke:0px] transition-all duration-500 cursor-default select-none">
                            {tech}
                        </span>
                        {/* Hover Dot Indicator */}
                        <div className="absolute -bottom-4 w-2 h-2 rounded-full bg-[#00FF88] opacity-0 transition-all duration-300 scale-0" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export const TechStack = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const opacityFade = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    // Interactive mouse glow logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
        };

        const section = sectionRef.current;
        if (section) {
            section.addEventListener("mousemove", handleMouseMove);
        }
        return () => {
            if (section) section.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <section
            id="technology"
            ref={sectionRef}
            className="relative py-32 md:py-48 bg-[#020202] border-y border-white/5 overflow-hidden flex flex-col items-center justify-center min-h-screen"
        >
            {/* Interactive Spotlight Glow */}
            <motion.div
                style={{ x: springX, y: springY }}
                className="absolute top-0 left-0 w-[40vw] h-[40vw] rounded-full bg-[#00FF88] opacity-[0.03] blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"
            />

            {/* Architectural Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

            <div className="container mx-auto px-6 mb-24 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                >
                    <h3 className="text-[#00FF88] text-sm font-mono tracking-[0.3em] uppercase mb-4 opacity-80 border border-[#00FF88]/30 px-4 py-1.5 rounded-full inline-block backdrop-blur-md">
                        Arsenal
                    </h3>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                        Architectural <br />
                        <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]">Supremacy</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
                        We leverage a hybrid ecosystem of low-level performance languages, robust AI workflows, and bleeding-edge frontend frameworks to engineer unmatched digital experiences.
                    </p>
                </motion.div>
            </div>

            {/* Parallax Marquee Section */}
            <motion.div
                style={{ y: yParallax, opacity: opacityFade }}
                className="w-full relative flex flex-col gap-0 md:gap-4 -rotate-2 scale-105"
            >
                <TechRow items={row1} direction={1} speed={40} />
                <TechRow items={row2} direction={-1} speed={50} />
                <TechRow items={row3} direction={1} speed={45} />
            </motion.div>

        </section>
    );
};
