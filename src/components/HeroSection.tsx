"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const [isMounted, setIsMounted] = useState(false);
    const [skyStars, setSkyStars] = useState<any[]>([]);

    useEffect(() => {
        // Generamos un campo de estrellas realista 100% aleatorio en el cliente
        const generateStars = (count: number) => {
            const stars = [];
            for (let i = 0; i < count; i++) {
                const top = (Math.random() * 100).toFixed(2) + "%";
                const left = (Math.random() * 100).toFixed(2) + "%";
                // Probabilidades: mayoría 1px, algunas 2px, raras 3px
                const rand = Math.random();
                const size = rand > 0.95 ? 3 : rand > 0.8 ? 2 : 1;
                const delay = Math.random() * 5; // Delays de 0 a 5s
                const duration = 2 + Math.random() * 4; // Duración titileo 2-6s

                stars.push({ top, left, size, delay, duration });
            }
            return stars;
        };

        setSkyStars(generateStars(140)); // 140 estrellas extremadamente dispersas
        setIsMounted(true);
    }, []);

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-24 md:py-32 overflow-hidden bg-gradient-to-br from-azul-tierra to-azul-tierra-deep">

            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {isMounted && skyStars.map((star, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            opacity: [0.2, 1, 0.2],
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
                            boxShadow: star.size > 1 ? '0 0 4px 1px rgba(255,255,255,0.4)' : 'none'
                        }}
                    />
                ))}
            </div>

            <motion.div
                className="relative z-10 max-w-5xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <motion.h1
                    variants={itemVariants}
                    className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black text-white tracking-tighter mb-2 drop-shadow-sm leading-none"
                >
                    TIERRA DORADA
                </motion.h1>

                <motion.h2
                    variants={itemVariants}
                    className="font-serif text-3xl sm:text-4xl md:text-6xl text-gold italic font-light tracking-wide mb-10 opacity-90"
                >
                    Comunidad
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="font-sans text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed mb-10 max-w-3xl mx-auto font-light"
                >
                    ¿Estás listo para dejar de encajar en el sistema tradicional y comenzar a construir la nave que llevará tu don al mundo?
                </motion.p>

                <motion.div variants={itemVariants}>
                    <a
                        href="https://www.skool.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center justify-center px-10 py-6 min-h-[64px] min-w-[300px] text-xl font-bold text-azul-tierra-deep bg-gold rounded-full overflow-hidden shadow-[0_0_40px_-10px_rgba(200,153,51,0.6)] hover:shadow-[0_0_60px_-10px_rgba(200,153,51,0.9)] transition-all duration-500"
                        >
                            <motion.div 
                                className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 z-0"
                                animate={{ x: ['-300%', '400%'] }}
                                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", repeatDelay: 1 }}
                            />
                            <div className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-0" />
                            <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
                                ¡Unirme a la comunidad en Skool gratis ahora!
                            </span>
                        </motion.button>
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
