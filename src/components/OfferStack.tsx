"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function OfferStack() {
    const benefits = [
        "[ACCESS BENEFIT 1]",
        "[ACCESS BENEFIT 2]",
        "[ACCESS BENEFIT 3]",
        "[ACCESS BENEFIT 4]"
    ];

    return (
        <section className="relative w-full py-16 md:py-24 px-5 bg-white overflow-hidden border-t border-[#1E1E1E]/5 shadow-[inset_0_20px_40px_-20px_rgba(30,64,175,0.03)]">
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E1E1E] text-center mb-12 tracking-tight">
                    ¿Qué significa subirte a esta Nave?
                </h2>

                <div className="w-full bg-[#F8F5F2] rounded-[2rem] p-8 md:p-12 border border-gold/20 shadow-xl mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
                    <div className="relative z-10 flex flex-col gap-6">
                        {benefits.map((benefit, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <CheckCircle2 className="w-7 h-7 text-gold shrink-0 mt-1" />
                                <p className="font-sans text-xl sm:text-2xl font-medium text-[#1E1E1E] leading-snug">
                                    {benefit}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center px-8 py-4 bg-gold/10 rounded-full border border-gold/30"
                >
                    <span className="font-sans text-lg sm:text-xl font-bold text-[#1E1E1E] tracking-wide">
                        ¡Da el primer paso de tu viaje completamente gratis!
                    </span>
                </motion.div>

            </div>
        </section>
    );
}

