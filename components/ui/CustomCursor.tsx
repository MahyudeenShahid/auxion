"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const blobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const blob = blobRef.current;
        if (!cursor || !blob) return;

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out",
            });

            gsap.to(blob, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.8,
                ease: "power3.out",
            });
        };

        window.addEventListener("mousemove", onMouseMove);

        // Hover effect logic on clickable elements
        const clickables = document.querySelectorAll("a, button, .hover-target");

        clickables.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                gsap.to(cursor, {
                    scale: 1.5,
                    backgroundColor: "rgba(0, 255, 136, 0.1)",
                    borderColor: "rgba(0, 255, 136, 0.8)",
                    duration: 0.3,
                });
            });
            el.addEventListener("mouseleave", () => {
                gsap.to(cursor, {
                    scale: 1,
                    backgroundColor: "transparent",
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    duration: 0.3,
                });
            });
        });

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    return (
        <>
            <div
                ref={blobRef}
                className="fixed top-0 left-0 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FF88] opacity-10 blur-[100px] pointer-events-none z-[9998] transition-opacity duration-300"
            />
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FF88] shadow-[0_0_15px_rgba(0,255,136,0.8)] pointer-events-none z-[9999]"
            />
        </>
    );
}
