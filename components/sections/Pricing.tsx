"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const plans = [
    {
        id: "01",
        name: "IGNITION",
        price: "$5k",
        interval: "+",
        desc: "Baseline architecture for startups demanding immediate, flawless market entry.",
        nodes: ["SYS.01", "SEO.R", "KINETIC.MIN"],
        features: [
            "UX/UI System Design",
            "Next.js Deployment",
            "Headless CMS Setup",
            "Kinetic Typography"
        ],
        cta: "INITIATE",
        theme: "white"
    },
    {
        id: "02",
        name: "DOMINANCE",
        price: "$15k",
        interval: "+",
        desc: "Bespoke, ruthlessly optimized infrastructure built for massive load and profound aesthetic impact.",
        nodes: ["AESTHETIC.MAX", "WEBGL.CORE", "GSAP.X"],
        features: [
            "Complex WebGL Integration",
            "Advanced GSAP Kinetics",
            "Dedicated Engineering",
            "Infrastructure SLA"
        ],
        cta: "ENGAGE",
        theme: "green",
        featured: true
    },
    {
        id: "03",
        name: "INFINITY",
        price: "Custom",
        interval: "",
        desc: "Total access to our engineering intelligence for continuous, aggressive iteration.",
        nodes: ["INF.SCALE", "AUDIT.LIVE", "BOARD.RPT"],
        features: [
            "Real-time System Audits",
            "A/B Kinetic Optimization",
            "Priority Asset Production",
            "Infinite Architecture"
        ],
        cta: "CONSULT",
        theme: "white"
    }
];

// --- 3D TILT TIER CARD --- //
const TierCard = ({ plan }: { plan: typeof plans[0] }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse tracking for the spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Mouse tracking for the 3D tilt effect (spring smoothed)
    const tiltX = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });
    const tiltY = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Update spotlight position
        mouseX.set(x);
        mouseY.set(y);

        // Calculate tilt logic (-1 to 1 based on mouse position relative to center)
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const moveX = (x - centerX) / centerX;
        const moveY = (y - centerY) / centerY;

        // Set max tilt degrees
        tiltX.set(moveY * -10); // Tilt up/down
        tiltY.set(moveX * 10);  // Tilt left/right
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        tiltX.set(0);
        tiltY.set(0);
    };

    const isGreen = plan.theme === "green";

    return (
        <motion.div
            ref={cardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: tiltX,
                rotateY: tiltY,
                transformPerspective: 1000,
                zIndex: plan.featured ? 20 : 10
            }}
            className={`relative group h-full w-full rounded-[2rem] border overflow-hidden backdrop-blur-md transition-all duration-500
                ${isGreen
                    ? 'border-[#00FF88]/30 bg-[#050505]/80 shadow-[0_0_80px_rgba(0,255,136,0.1)]'
                    : 'border-white/10 bg-white/[0.02] shadow-[0_0_40px_rgba(255,255,255,0.02)]'
                }
                ${plan.featured ? 'md:scale-110' : 'md:scale-100'}
            `}
        >
            {/* Dynamic Spotlight Follows Mouse */}
            <motion.div
                className={`absolute pointer-events-none rounded-full blur-[100px] z-0 ${isGreen ? 'bg-[#00FF88]/20 w-96 h-96' : 'bg-white/10 w-80 h-80'}`}
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                    opacity: isHovered ? 1 : 0
                }}
                transition={{ type: "tween", ease: "linear", duration: 0 }}
            />

            {/* Content Container */}
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">

                {/* --- Top Metadata & Title --- */}
                <div>
                    <div className="flex justify-between items-start mb-12">
                        <div className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-50 flex flex-col gap-1">
                            <span>ID // {plan.id}</span>
                            <span>STATUS // ACTIVE</span>
                        </div>
                        <div className="flex gap-2">
                            {plan.nodes.map(node => (
                                <span key={node} className={`font-mono text-[8px] tracking-widest px-2 py-1 rounded-sm border ${isGreen ? 'border-[#00FF88]/30 text-[#00FF88]' : 'border-white/20 text-white/50'}`}>
                                    {node}
                                </span>
                            ))}
                        </div>
                    </div>

                    <h3 className={`text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 ${isGreen ? 'text-[#00FF88]' : 'text-white'}`}>
                        {plan.name}
                    </h3>

                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-5xl md:text-6xl font-mono tracking-tighter leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.8)]">
                            {plan.price}
                        </span>
                        <span className="text-xl font-mono text-gray-500">{plan.interval}</span>
                    </div>

                    <p className="text-sm font-serif text-gray-400 leading-relaxed mb-8 h-20">
                        {plan.desc}
                    </p>
                </div>

                {/* --- Bottom Features & CTA --- */}
                <div>
                    <div className="border-t border-white/10 pt-8 mb-12 relative">
                        <span className="absolute -top-3 left-4 bg-[#020202] px-2 font-mono text-[10px] tracking-[0.2em] text-gray-500 uppercase">
                            Parameters
                        </span>
                        <ul className="flex flex-col gap-4">
                            {plan.features.map(feature => (
                                <li key={feature} className="flex items-center gap-3 font-mono text-xs tracking-wider text-gray-300">
                                    <span className={`w-1 h-1 rounded-full ${isGreen ? 'bg-[#00FF88]' : 'bg-white/30'}`} />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <button className={`w-full py-4 rounded-full font-mono text-xs tracking-[0.3em] uppercase transition-all duration-300 relative overflow-hidden group/btn ${isGreen
                            ? 'bg-[#00FF88] text-black hover:bg-white'
                            : 'border border-white/20 hover:border-white hover:bg-white hover:text-black'
                        }`}>
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {plan.cta}
                            <span className="group-hover/btn:translate-x-1 transition-transform">-&gt;</span>
                        </span>
                    </button>
                </div>

                {/* Decorative Tech Borders */}
                <div className="absolute top-0 left-0 w-8 h-[1px] bg-white/50" />
                <div className="absolute top-0 left-0 w-[1px] h-8 bg-white/50" />
                <div className="absolute bottom-0 right-0 w-8 h-[1px] bg-white/50" />
                <div className="absolute bottom-0 right-0 w-[1px] h-8 bg-white/50" />
            </div>
        </motion.div>
    );
};

export const Pricing = () => {
    return (
        <section id="pricing" className="relative bg-[#020202] text-white py-32 md:py-48 overflow-hidden z-20">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-[1400px]">

                {/* Intro Header */}
                <div className="flex flex-col items-center justify-center text-center mb-20 md:mb-32">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-12 h-[1px] bg-[#00FF88]" />
                        <span className="font-mono text-sm uppercase tracking-[0.3em] text-[#00FF88]">Protocol Selection</span>
                        <span className="w-12 h-[1px] bg-[#00FF88]" />
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none mb-8">
                        Engagement <br />
                        <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.4)] md:[-webkit-text-stroke:3px_rgba(255,255,255,0.4)]">
                            Deck.
                        </span>
                    </h2>
                </div>

                {/* --- 3D INTERACTIVE DECK --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-center justify-center pt-12">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full"
                        >
                            <TierCard plan={plan} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};
