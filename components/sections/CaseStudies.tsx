"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

const projects = [
    {
        title: "Aura Fintech",
        category: "Web Platform & Architecture",
        year: "2025",
        imgUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", // Abstract clean architecture
        align: "left"
    },
    {
        title: "Nova Global",
        category: "Enterprise E-Commerce",
        year: "2024",
        imgUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2600&auto=format&fit=crop", // Dark minimal structure
        align: "right"
    },
    {
        title: "Zephyr OS",
        category: "System Design & UI",
        year: "2024",
        imgUrl: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop", // Modern dark geometry
        align: "left"
    }
];

// --- CUSTOM MAGNETIC CURSOR COMPONENT --- //
const ProjectCursor = ({ isHovering }: { isHovering: boolean }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 500, damping: 28, mass: 0.5 });
    const springY = useSpring(mouseY, { stiffness: 500, damping: 28, mass: 0.5 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-32 h-32 rounded-full bg-[#00FF88]/90 mix-blend-screen pointer-events-none z-[100] flex items-center justify-center text-black font-bold uppercase tracking-widest text-xs shadow-[0_0_30px_#00FF88]"
            style={{
                x: springX,
                y: springY,
                translateX: "-50%",
                translateY: "-50%"
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: isHovering ? 1 : 0,
                opacity: isHovering ? 1 : 0
            }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
            Explore
        </motion.div>
    );
};

// --- INDIVIDUAL PROJECT CARD COMPONENT --- //
const ProjectCard = ({
    project,
    index,
    setHoveringCursor
}: {
    project: typeof projects[0],
    index: number,
    setHoveringCursor: (val: boolean) => void
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    // Parallax logic: Background image scales down slightly and text moves at diff speeds
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
    const textY = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const titleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

    return (
        <div
            ref={cardRef}
            className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-[#020202] drop-shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
            style={{ zIndex: index }}
        >
            <div className="w-full h-full relative group">

                {/* Background Image with Parallax & Hover Reveal */}
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{ scale: imageScale }}
                >
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-[1.5s] ease-out z-10 pointer-events-none" />
                    <img
                        src={project.imgUrl}
                        alt={project.title}
                        className="w-full h-full object-cover saturate-0 opacity-60 group-hover:saturate-100 group-hover:opacity-100 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                </motion.div>

                {/* Massive Typography Overlay */}
                <motion.div
                    className={`absolute z-20 w-full px-6 md:px-24 flex flex-col justify-center h-full pointer-events-none ${project.align === "right" ? "items-end text-right" : "items-start text-left"}`}
                    style={{ y: textY, scale: titleScale }}
                >
                    <div className="max-w-5xl">
                        <motion.h3
                            className="text-7xl md:text-[10rem] lg:text-[14rem] font-black uppercase tracking-tighter leading-[0.85] mb-6 text-white group-hover:text-transparent group-hover:[-webkit-text-stroke:2px_white] transition-colors duration-1000"
                        >
                            {project.title}
                        </motion.h3>

                        <div className="flex items-center gap-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                            <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-[#00FF88] bg-black/50 px-4 py-2 backdrop-blur-md rounded-full border border-white/10">
                                {project.category}
                            </span>
                            <span className="font-mono text-sm tracking-widest text-white">
                                {project.year}
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Hidden Interaction Area to trigger custom cursor */}
                <div
                    className="absolute inset-0 z-30 cursor-none"
                    onMouseEnter={() => setHoveringCursor(true)}
                    onMouseLeave={() => setHoveringCursor(false)}
                />

                {/* Bottom Gradient Fade to help merge into the next sticky section */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
            </div>
        </div>
    );
};

export const CaseStudies = () => {
    const [hoveringCursor, setHoveringCursor] = useState(false);

    return (
        <section id="work" className="relative w-full bg-[#020202]">

            {/* Custom Magnetic Cursor visible only when hovering a project */}
            <ProjectCursor isHovering={hoveringCursor} />

            {/* Intro Header (Sticky so it stays beneath the first case study as it slides up) */}
            <div className="sticky top-0 h-[80vh] w-full flex flex-col justify-center items-center text-center px-6 z-0 bg-[#020202]">
                <div className="flex items-center gap-4 mb-8">
                    <span className="w-12 h-[1px] bg-[#00FF88]" />
                    <span className="font-mono text-sm uppercase tracking-[0.3em] text-[#00FF88]">Our Archives</span>
                    <span className="w-12 h-[1px] bg-[#00FF88]" />
                </div>
                <h2 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-none mix-blend-difference pb-8">
                    Selected <br />
                    <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.4)] md:[-webkit-text-stroke:3px_rgba(255,255,255,0.4)]">Works.</span>
                </h2>
                <p className="text-gray-500 font-serif max-w-lg mt-8 text-xl">
                    A curated selection of platforms engineered for absolute dominance.
                </p>
            </div>

            {/* Stacked Parallax Case Studies */}
            <div className="relative w-full z-10">
                {projects.map((project, idx) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                        index={idx}
                        setHoveringCursor={setHoveringCursor}
                    />
                ))}
            </div>

            {/* Buffer space after the last sticky element allows the normal document flow to resume */}
            <div className="h-[20vh] w-full bg-[#020202] relative z-20" />

        </section>
    );
};
