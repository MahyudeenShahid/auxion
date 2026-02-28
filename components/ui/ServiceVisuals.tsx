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

export const SaaSVisual = () => {
    // Generate static nodes for the SaaS ecosystem (Microservices architecture)
    const centralNode = { x: 200, y: 125, r: 15 };

    // Orbital API/Service nodes
    const serviceNodes = [
        { x: 100, y: 60, r: 8, delay: 0 },
        { x: 300, y: 60, r: 8, delay: 0.5 },
        { x: 80, y: 190, r: 8, delay: 1.2 },
        { x: 320, y: 190, r: 8, delay: 0.8 },
        { x: 60, y: 125, r: 5, delay: 1.5 },
        { x: 340, y: 125, r: 5, delay: 0.3 }
    ];

    return (
        <div className="relative w-full h-full min-h-[200px] md:min-h-[250px] flex items-center justify-center overflow-visible scale-75 md:scale-100">
            {/* Ambient Background glow representing cloud infrastructure */}
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-56 h-56 bg-white blur-[100px] rounded-full z-0"
            />

            <motion.svg
                viewBox="0 0 400 250"
                className="w-full h-full max-w-[500px] relative z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Connection Lines (Pipelines) */}
                {serviceNodes.map((node, i) => (
                    <g key={`line-${i}`}>
                        {/* Base Line */}
                        <path
                            d={`M ${centralNode.x} ${centralNode.y} L ${node.x} ${node.y}`}
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="1"
                        />
                        {/* Data Packet moving along the pipeline */}
                        <motion.circle
                            r="2"
                            fill="#ffffff"
                            initial={{ cx: node.x, cy: node.y, opacity: 0 }}
                            animate={{
                                cx: centralNode.x,
                                cy: centralNode.y,
                                opacity: [0, 1, 1, 0]
                            }}
                            transition={{
                                duration: 1.5 + Math.random(),
                                repeat: Infinity,
                                delay: node.delay,
                                ease: "linear"
                            }}
                            style={{ filter: "drop-shadow(0 0 4px #ffffff)" }}
                        />
                        <motion.circle
                            r="1.5"
                            fill="#00FF88"
                            initial={{ cx: centralNode.x, cy: centralNode.y, opacity: 0 }}
                            animate={{
                                cx: node.x,
                                cy: node.y,
                                opacity: [0, 1, 1, 0]
                            }}
                            transition={{
                                duration: 1.2 + Math.random(),
                                repeat: Infinity,
                                delay: node.delay + 0.5,
                                ease: "linear"
                            }}
                            style={{ filter: "drop-shadow(0 0 4px #00FF88)" }}
                        />
                    </g>
                ))}

                {/* Outer Connecting Ring (Ecosystem Boundary) */}
                <motion.ellipse
                    cx="200" cy="125" rx="140" ry="80"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "200px 125px" }}
                />

                {/* Service Nodes (Microservices/Databases) */}
                {serviceNodes.map((node, i) => (
                    <motion.g key={`node-${i}`}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
                    >
                        {/* Outer server halo */}
                        <circle cx={node.x} cy={node.y} r={node.r + 4} stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="transparent" />
                        {/* Inner server core */}
                        <circle cx={node.x} cy={node.y} r={node.r} fill="rgba(0,0,0,0.8)" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
                        <motion.circle
                            cx={node.x} cy={node.y} r={node.r - 2} fill={i % 2 === 0 ? "#00FF88" : "#ffffff"}
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: node.delay }}
                        />
                    </motion.g>
                ))}

                {/* Central Monolithic Core (DB / Main Server) */}
                <motion.g
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Glowing Aura */}
                    <circle cx={centralNode.x} cy={centralNode.y} r={centralNode.r + 15} fill="rgba(255,255,255,0.05)" />
                    <circle cx={centralNode.x} cy={centralNode.y} r={centralNode.r + 8} stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="2 4" fill="transparent" />

                    {/* Solid Core Structure */}
                    <polygon
                        points="200,105 218,115 218,135 200,145 182,135 182,115"
                        fill="rgba(0,0,0,0.9)"
                        stroke="white"
                        strokeWidth="1.5"
                    />

                    {/* Inner Pulse */}
                    <motion.circle
                        cx={centralNode.x} cy={centralNode.y} r="4" fill="#ffffff"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        style={{ filter: "drop-shadow(0 0 10px #ffffff)" }}
                    />
                </motion.g>
            </motion.svg>
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
