"use client";

import { motion } from "framer-motion";

export const WebPlatformVisual = () => {
    return (
        <div className="relative w-full h-full min-h-[250px] flex items-center justify-center">
            <motion.svg viewBox="0 0 400 250" className="w-full h-full max-w-[400px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Browser Window */}
                <motion.rect
                    x="20" y="20" width="360" height="210" rx="8"
                    stroke="rgba(255,255,255,0.2)" strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.line
                    x1="20" y1="50" x2="380" y2="50"
                    stroke="rgba(255,255,255,0.2)" strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                />

                {/* Browser Dots */}
                {[35, 50, 65].map((cx, i) => (
                    <motion.circle
                        key={cx}
                        cx={cx} cy="35" r="3" fill="rgba(255,255,255,0.2)"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1 + (i * 0.1) }}
                    />
                ))}

                {/* Floating Content Blocks */}
                <motion.rect
                    x="50" y="80" width="120" height="120" rx="4"
                    fill="rgba(0,255,136,0.1)" stroke="#00FF88" strokeWidth="1"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                />

                <motion.rect
                    x="190" y="80" width="160" height="50" rx="4"
                    fill="rgba(255,255,255,0.05)"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.4 }}
                />
                <motion.rect
                    x="190" y="150" width="100" height="50" rx="4"
                    fill="rgba(255,255,255,0.05)"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.6 }}
                />

                {/* Mouse Cursor Animation */}
                <motion.g
                    initial={{ x: 300, y: 200, opacity: 0 }}
                    animate={{ x: [300, 100, 100], y: [200, 120, 120], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                >
                    <path d="M0 0L15 20L10 22L12 30L8 31L5 23L-5 28L0 0Z" fill="white" />
                </motion.g>
            </motion.svg>
        </div>
    );
};

// OPTION 1: The Monolithic Core
export const SaaSVisualOption1 = () => {
    return (
        <div className="relative w-full h-full min-h-[250px] flex items-center justify-center -translate-y-4">
            <h4 className="absolute top-0 text-[10px] text-gray-500 font-mono tracking-widest">OPTION 1: MONOLITH</h4>
            <div className="relative z-10">
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-32 h-48 bg-black border border-white/20 rounded-md relative shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col justify-between p-4"
                >
                    {/* Server Rack Slots */}
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="w-full h-4 border border-white/10 rounded-sm relative flex items-center px-2 gap-2">
                            <motion.div
                                className="w-1.5 h-1.5 rounded-full bg-[#00FF88]"
                                animate={{ opacity: [1, 0.2, 1] }}
                                transition={{ duration: 0.5 + Math.random(), repeat: Infinity, delay: Math.random() }}
                            />
                            <div className="h-0.5 bg-white/10 flex-grow" />
                        </div>
                    ))}

                    {/* Scanning Laser */}
                    <motion.div
                        className="absolute left-0 right-0 h-1 bg-[#00FF88]/50 shadow-[0_0_10px_#00FF88]"
                        initial={{ top: 0, opacity: 0 }}
                        animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            </div>
            {/* Base Reflection */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 w-32 h-8 bg-white/20 blur-xl rounded-[100%]"
            />
        </div>
    );
};

// OPTION 2: Interlocking Orbital Rings (Ecosystem)
export const SaaSVisualOption2 = () => {
    return (
        <div className="relative w-full h-full min-h-[250px] flex items-center justify-center overflow-visible">
            <h4 className="absolute top-0 text-[10px] text-gray-500 font-mono tracking-widest">OPTION 2: ORBITAL</h4>
            <div className="relative w-[200px] h-[200px] flex items-center justify-center translate-y-4">
                {/* Core Axis */}
                <div className="absolute w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]" />

                {/* Ring 1 - X/Y Axis */}
                <motion.div
                    animate={{ rotateX: 360, rotateY: 180 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-full rounded-full border border-[#00FF88]/40 border-t-[#00FF88] border-b-[#00FF88] shadow-[inset_0_0_20px_rgba(0,255,136,0.1)]"
                    style={{ transformStyle: 'preserve-3d' }}
                />

                {/* Ring 2 - Z Axis Offset */}
                <motion.div
                    animate={{ rotateY: 360, rotateZ: 90 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[80%] h-[80%] rounded-full border-2 border-white/20 border-l-white border-r-white"
                    style={{ transformStyle: 'preserve-3d' }}
                />

                {/* Ring 3 - Diagonal */}
                <motion.div
                    animate={{ rotateZ: -360, rotateX: 180 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[120%] h-[120%] rounded-full border border-gray-600/50 border-t-white/50"
                    style={{ transformStyle: 'preserve-3d' }}
                />
            </div>
        </div>
    );
};

// OPTION 3: High-Speed Data Pipeline
export const SaaSVisualOption3 = () => {
    return (
        <div className="relative w-full h-full min-h-[250px] flex items-center justify-center overflow-hidden">
            <h4 className="absolute top-0 text-[10px] text-gray-500 font-mono tracking-widest z-20">OPTION 3: PIPELINE</h4>
            <div className="w-[300px] h-[150px] relative flex flex-col justify-between translate-y-4">
                {/* Render multiple data streams */}
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                        <motion.div
                            className="absolute max-w-[50px] h-full shadow-[0_0_10px_currentColor]"
                            style={{
                                left: "-50px",
                                backgroundColor: i % 2 === 0 ? "#00FF88" : "#ffffff",
                                color: i % 2 === 0 ? "#00FF88" : "#ffffff",
                                width: `${Math.random() * 40 + 10}px`
                            }}
                            animate={{ left: "120%" }}
                            transition={{
                                duration: Math.random() * 1.5 + 0.5,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                                ease: "linear"
                            }}
                        />
                    </div>
                ))}
            </div>
            {/* Central Processing Node Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FF88]/5 to-transparent pointer-events-none" />
        </div>
    );
};

// Temporary wrapper to show all 3 so user can pick
export const SaaSVisual = () => {
    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-4 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
            <div className="flex-1 w-full h-[250px] border border-white/5 bg-[#050505] rounded-xl relative overflow-hidden flex items-center justify-center scale-75 transform origin-center pb-8"><SaaSVisualOption1 /></div>
            <div className="flex-1 w-full h-[250px] border border-white/5 bg-[#050505] rounded-xl relative overflow-hidden flex items-center justify-center scale-75 transform origin-center pb-4"><SaaSVisualOption2 /></div>
            <div className="flex-1 w-full h-[250px] border border-white/5 bg-[#050505] rounded-xl relative overflow-hidden flex items-center justify-center scale-75 transform origin-center pb-4"><SaaSVisualOption3 /></div>
        </div>
    );
};

export const BrandVisual = () => {
    // Generate an SVG wireframe sphere
    const latitudeBands = 8;
    const longitudeBands = 12;
    const radius = 80;
    const cx = 200;
    const cy = 125;

    return (
        <div className="relative w-full h-full min-h-[150px] md:min-h-[250px] flex items-center justify-center overflow-visible">
            {/* Background ambient glow */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-64 h-64 bg-[#00FF88] rounded-full blur-[80px] z-0"
            />

            <motion.svg
                viewBox="0 0 400 250"
                className="w-full h-full max-w-[500px] relative z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.g
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "200px 125px" }}
                >
                    <motion.g
                        animate={{ rotateX: [0, 20, 0, -20, 0], rotateY: [0, 360] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: "200px 125px" }}
                    >
                        {/* Longitudinal Rings */}
                        {Array.from({ length: longitudeBands }).map((_, i) => {
                            const angle = (Math.PI * i) / longitudeBands;
                            return (
                                <motion.ellipse
                                    key={`long-${i}`}
                                    cx={cx} cy={cy}
                                    rx={radius} ry={radius * Math.abs(Math.cos(angle))}
                                    stroke="rgba(255,255,255,0.15)" strokeWidth="1"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, delay: i * 0.1, ease: "easeInOut" }}
                                />
                            );
                        })}

                        {/* Latitudinal Rings */}
                        {Array.from({ length: latitudeBands }).map((_, i) => {
                            const latAngle = (Math.PI * i) / latitudeBands;
                            const currentRadius = radius * Math.sin(latAngle);
                            const yOffset = radius * Math.cos(latAngle);
                            return (
                                <motion.ellipse
                                    key={`lat-${i}`}
                                    cx={cx} cy={cy + yOffset}
                                    rx={currentRadius} ry={currentRadius * 0.3}
                                    stroke="rgba(255,255,255,0.15)" strokeWidth="1"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, delay: i * 0.1, ease: "easeInOut" }}
                                />
                            );
                        })}
                    </motion.g>
                </motion.g>

                {/* Central Core / Brand Node */}
                <motion.circle
                    cx={cx} cy={cy} r="6" fill="#00FF88"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{ filter: "drop-shadow(0 0 8px #00FF88)" }}
                    className="relative z-20"
                />

                {/* Orbiting Satellite Nodes */}
                <motion.g
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "200px 125px" }}
                >
                    <circle cx="200" cy="25" r="4" fill="white" />
                    <circle cx="300" cy="125" r="3" fill="rgba(255,255,255,0.5)" />
                    <circle cx="100" cy="125" r="5" fill="#00FF88" style={{ filter: "drop-shadow(0 0 5px #00FF88)" }} />
                </motion.g>

                <motion.circle
                    cx={cx} cy={cy} r={radius + 20}
                    stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 8"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "200px 125px" }}
                />
            </motion.svg>
        </div>
    );
};

export const AIVisual = () => {
    // Neural network grid coordinates
    const nodes = [
        { id: 1, x: 50, y: 125, r: 8 },

        { id: 2, x: 150, y: 50, r: 5 },
        { id: 3, x: 150, y: 125, r: 6 },
        { id: 4, x: 150, y: 200, r: 5 },

        { id: 5, x: 250, y: 75, r: 5 },
        { id: 6, x: 250, y: 175, r: 5 },

        { id: 7, x: 350, y: 125, r: 10 },
    ];

    // Connections between nodes
    const lines = [
        [1, 2], [1, 3], [1, 4],
        [2, 5], [2, 6],
        [3, 5], [3, 6],
        [4, 5], [4, 6],
        [5, 7], [6, 7]
    ];

    return (
        <div className="relative w-full h-full min-h-[250px] flex items-center justify-center">
            <motion.svg viewBox="0 0 400 250" className="w-full h-full max-w-[400px]" fill="none" xmlns="http://www.w3.org/2000/svg">

                {/* Connecting Lines */}
                {lines.map((line, idx) => {
                    const start = nodes.find(n => n.id === line[0])!;
                    const end = nodes.find(n => n.id === line[1])!;

                    return (
                        <motion.line
                            key={`line-${idx}`}
                            x1={start.x} y1={start.y} x2={end.x} y2={end.y}
                            stroke="rgba(0,255,136,0.3)" strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: idx * 0.1, ease: "easeInOut" }}
                        />
                    );
                })}

                {/* Data Pulses traversing the lines */}
                {lines.map((line, idx) => {
                    const start = nodes.find(n => n.id === line[0])!;
                    const end = nodes.find(n => n.id === line[1])!;

                    return (
                        <motion.circle
                            key={`pulse-${idx}`}
                            r="2" fill="#ffffff"
                            initial={{ cx: start.x, cy: start.y, opacity: 0 }}
                            animate={{ cx: end.x, cy: end.y, opacity: [0, 1, 1, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: Math.random() * 2,
                                delay: Math.random() * 2
                            }}
                            style={{ filter: "drop-shadow(0 0 4px #ffffff)" }}
                        />
                    );
                })}

                {/* Nodes */}
                {nodes.map((node, i) => (
                    <motion.g key={node.id}>
                        {/* Outer glow ring */}
                        <motion.circle
                            cx={node.x} cy={node.y} r={node.r + 6}
                            fill="rgba(0,255,136,0.1)"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 2 + (i * 0.2), repeat: Infinity }}
                        />
                        {/* Core node */}
                        <motion.circle
                            cx={node.x} cy={node.y} r={node.r}
                            fill="#00FF88"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            style={{ filter: "drop-shadow(0 0 8px #00FF88)" }}
                        />
                    </motion.g>
                ))}

            </motion.svg>
        </div>
    );
};
