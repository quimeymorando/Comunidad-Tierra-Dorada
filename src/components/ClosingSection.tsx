"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ClosingSection() {
    const [isMounted, setIsMounted] = useState(false);
    const [skyStars, setSkyStars] = useState<any[]>([]);

    useEffect(() => {
        const generateStars = (count: number) => {
            const stars = [];
            for (let i = 0; i < count; i++) {
                const top = (Math.random() * 100).toFixed(2) + "%";
                const left = (Math.random() * 100).toFixed(2) + "%";
                const rand = Math.random();
                const size = rand > 0.95 ? 3 : rand > 0.8 ? 2 : 1;
                const delay = Math.random() * 5;
                const duration = 2 + Math.random() * 4;

                stars.push({ top, left, size, delay, duration });
            }
            return stars;
        };

        setSkyStars(generateStars(80));
        setIsMounted(true);
    }, []);

    return (
        <section className="relative w-full py-24 md:py-32 px-5 bg-[#050A1F] text-white flex flex-col items-center justify-center overflow-hidden border-t border-gold/10">

            {/* Cielo estrellado idéntico al Hero */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {isMounted && skyStars.map((star, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            opacity: [0.1, 0.8, 0.1],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: "easeInOut",
                        }}
                        className="absolute rounded-full bg-white"
                        style={{
                            top: star.top,
                            left: star.left,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            boxShadow: star.size > 1 ? '0 0 4px 1px rgba(255,255,255,0.3)' : 'none'
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(200,153,51,0.15)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
                <motion.p
                    className="font-sans text-xl sm:text-2xl mb-8 font-light text-white/80 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Tu propósito es la medicina que el mundo necesita. Tierra Dorada es el respaldo que esperabas para dejar de dudar.
                </motion.p>
                
                <motion.h2
                    className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black mb-12 drop-shadow-md text-white tracking-tight leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <span className="text-gold italic font-serif font-medium">¿Vas a subirte</span> o vas a seguir mirando desde la orilla?
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full sm:w-auto px-2"
                >
                    <a
                        href="https://www.skool.com/tierra-dorada-2783/about"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                    >
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-6 min-h-[72px] text-lg sm:text-xl font-black text-[#050A1F] bg-gold rounded-full overflow-hidden shadow-[0_0_40px_-5px_rgba(200,153,51,0.6)] hover:shadow-[0_0_60px_-5px_rgba(200,153,51,0.9)] transition-all duration-500 border border-gold/50"
                        >
                            <motion.div 
                                className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 z-0"
                                animate={{ x: ['-400%', '500%'] }}
                                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", repeatDelay: 1 }}
                            />
                            <div className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-0" />
                            <span className="relative z-10 drop-shadow-sm flex items-center gap-3">
                                ¡Sí, quiero construir mi nave y entrar a la comunidad!
                            </span>
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}


