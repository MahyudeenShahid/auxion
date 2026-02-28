/**
 * Centralized Design System Configuration
 * Use this file to maintain absolute consistency across the application.
 * Contains core colors, easing curves, layout constraints, and reusable Framer Motion variants.
 */

export const theme = {
    colors: {
        // Core Backgrounds
        background: "#050505", // The monolithic dark mode background
        backgroundSecondary: "#0a0a0a",

        // Core Accents
        primary: "#00FF88", // The aggressive neon green signature color
        primaryHover: "#00cc6d", // Darker variant for interactive states

        // Typography
        textMain: "#ffffff",
        textMuted: "#a3a3a3",
        textDark: "#050505",

        // UI Elements
        surface: "rgba(255, 255, 255, 0.02)",
        surfaceHover: "rgba(255, 255, 255, 0.05)",
        border: "rgba(255, 255, 255, 0.1)",
        borderSubtle: "rgba(255, 255, 255, 0.05)",

        // Feedback / Status
        error: "#ff3333",
        success: "#00FF88",
    },

    // Consistent physics for Framer Motion and GSAP
    animation: {
        // Awwwards-style standard smooth easing curve
        easing: [0.76, 0, 0.24, 1] as const,

        // Standard durations
        duration: {
            fast: 0.3,
            base: 0.5,
            slow: 0.8,
            epic: 1.2,
        },

        // Spring physics for highly interactive elements (like custom cursors or magnetic buttons)
        spring: {
            stiffness: 150,
            damping: 15,
            mass: 0.5
        }
    },

    layout: {
        // Max widths for containers protecting ultra-wide screens
        maxWidth: "1440px",

        // Standardized padding
        navHeight: "100px",
        padding: {
            mobile: "1.5rem",
            tablet: "3rem",
            desktop: "6rem",
        },

        // Z-index scale to prevent overlap issues
        zIndex: {
            background: -1,
            base: 0,
            content: 10,
            floating: 40,
            nav: 50,
            overlay: 60,
            cursor: 9999,
        }
    }
};

/**
 * Standardized Framer Motion Reveal Variants
 * Import these directly into components for perfectly synced reveal animations.
 */
export const animations = {
    textReveal: {
        hidden: { y: "110%", opacity: 0 },
        visible: (customDelay: number = 0) => ({
            y: "0%",
            opacity: 1,
            transition: {
                duration: theme.animation.duration.epic,
                ease: theme.animation.easing,
                delay: customDelay * 0.1
            },
        }),
    },

    fadeInUp: {
        hidden: { y: 40, opacity: 0 },
        visible: (customDelay: number = 0) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: theme.animation.duration.slow,
                ease: theme.animation.easing,
                delay: customDelay * 0.1
            },
        }),
    },

    clipReveal: {
        hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
        visible: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transition: {
                duration: theme.animation.duration.epic,
                ease: theme.animation.easing
            }
        }
    }
};
