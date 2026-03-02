"use client";

import { useLoader } from "../context/LoaderContext";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const { isLoading } = useLoader();

    return (
        <div
            // Changing the key forces React to completely unmount and remount the page content
            // once the loading screen is finished. This perfectly resets and triggers 
            // all framer-motion animations on the page AFTER the loader is gone.
            key={isLoading ? "loading" : "ready"}
            className="w-full h-full flex flex-col"
        >
            {/* We physically hide the content while loading so it doesn't leak under the loader */}
            <div
                className="w-full flex-1 flex flex-col"
                style={{
                    opacity: isLoading ? 0 : 1,
                    pointerEvents: isLoading ? "none" : "auto",
                    visibility: isLoading ? "hidden" : "visible"
                }}
            >
                {children}
            </div>
        </div>
    );
};
