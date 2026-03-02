import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { FluidGradientBackground } from "@/components/ui/FluidGradientBackground";
import { InitialLoader } from "@/components/ui/InitialLoader";
import { LoaderProvider } from "@/components/context/LoaderContext";
import { PageTransition } from "@/components/layout/PageTransition";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auxion | Premium Digital Agency",
  description: "Next-generation digital agency specializing in luxury web design, software development, and SaaS solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased selection:bg-white/10`}
      >
        <LoaderProvider>
          <InitialLoader />
          <FluidGradientBackground />
          <CustomCursor />
          <Navbar />
          <PageTransition>
            <main className="min-h-screen">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </LoaderProvider>
      </body>
    </html>
  );
}
