"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";

const plans = [
    {
        name: "Growth",
        price: "$5k+",
        description: "Perfect for scaling startups needing high-performance web presences.",
        features: ["Custom UI/UX Design", "Next.js Development", "CMS Integration", "SEO Optimization", "Basic Animations"],
    },
    {
        name: "Enterprise",
        price: "$15k+",
        description: "For large organizations requiring complex platforms and SaaS architectures.",
        features: ["Full-Stack Architecture", "Custom Web Applications", "Advanced 3D/Motion", "Dedicated Engineering Team", "Ongoing SLA & Support"],
        featured: true,
    },
];

export const Pricing = () => {
    return (
        <section className="py-32 relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Engagement Models</h2>
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">Transparent, value-driven pricing for elite digital execution.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2, duration: 0.8 }}
                            className={`p-12 rounded-[2rem] relative ${plan.featured ? "bg-[#111] border border-white/20" : "glass"
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute top-0 right-12 -translate-y-1/2 px-4 py-1 bg-[#00FF88] text-black text-sm font-bold rounded-full">
                                    Recommended
                                </div>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-4">{plan.price}</div>
                            <p className="text-gray-400 mb-8 pb-8 border-b border-white/10">{plan.description}</p>

                            <ul className="space-y-4 mb-12">
                                {plan.features.map(feature => (
                                    <li key={feature} className="flex items-center space-x-3">
                                        <Check size={20} className="text-[#00FF88] shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <MagneticButton>
                                <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${plan.featured ? "bg-[#00FF88] text-black hover:bg-white" : "glass border border-white/10 hover:border-[#00FF88] hover:text-[#00FF88] text-white"
                                    }`}>
                                    Select Plan
                                </button>
                            </MagneticButton>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
