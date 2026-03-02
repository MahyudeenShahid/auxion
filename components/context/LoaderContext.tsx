"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface LoaderContextType {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
}

const LoaderContext = createContext<LoaderContextType>({
    isLoading: true,
    setIsLoading: () => { },
});

export const LoaderProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();
    const [lastPath, setLastPath] = useState(pathname);

    useEffect(() => {
        if (pathname !== lastPath) {
            setIsLoading(true);
            setLastPath(pathname);
        }
    }, [pathname, lastPath]);

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    );
};

export const useLoader = () => useContext(LoaderContext);
