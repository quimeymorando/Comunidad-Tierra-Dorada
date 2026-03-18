"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
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
                const duration = 2 + Math.random() * 5; // Duración titileo 2-7s

                stars.push({ top, left, size, delay, duration });
            }
            return stars;
        };

        setSkyStars(generateStars(120));
        setIsMounted(true);
    }, []);

    return (
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-start text-center px-4 sm:px-6 pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-[#0A1128] bg-gradient-to-br from-[#0A1128] via-[#050A1F] to-[#020513]">

            {/* Capa de destello sutil radial (Soft Glow) */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(200,153,51,0.08)_0%,transparent_60%)] pointer-events-none" />

            {/* Cielo estrellado */}
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
                            boxShadow: star.size > 1 ? '0 0 6px 1px rgba(255,255,255,0.5)' : 'none'
                        }}
                    />
                ))}
            </div>

            <motion.div
                className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* Logo textual premium */}
                <motion.div variants={itemVariants} className="mb-8 md:mb-12 flex flex-col items-center">
                    <span className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-black text-white tracking-tighter drop-shadow-lg leading-none">
                        TIERRA DORADA
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl md:text-5xl text-gold italic font-light tracking-widest mt-2 md:mt-4 opacity-90 drop-shadow-md">
                        Comunidad
                    </span>
                </motion.div>

                {/* Subtitle / Value Proposition Placeholder */}
                <motion.h1
                    variants={itemVariants}
                    className="font-sans text-[1.35rem] sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-tight mb-6 drop-shadow-md leading-tight"
                >
                    Deja de ser pasajero. Empieza a construir tu propia Nave.
                </motion.h1>

                {/* Description Placeholder */}
                <motion.p
                    variants={itemVariants}
                    className="font-sans text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto font-light"
                >
                    Únete gratis a la comunidad de Tierra Dorada en Skool y aprende a estructurar tu don, compartir tu medicina y crear un proyecto con propósito junto a una tribu que camina en la misma dirección.
                </motion.p>

                {/* Call To Action Placeholder */}
                <motion.div variants={itemVariants} className="w-full sm:w-auto px-2 sm:px-0">
                    <a
                        href="https://www.skool.com/tierra-dorada-2783/about"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative w-full sm:auto inline-flex items-center justify-center px-8 sm:px-12 py-5 sm:py-6 min-h-[60px] sm:min-h-[72px] text-lg sm:text-xl font-bold text-[#050A1F] bg-gold rounded-full overflow-hidden shadow-[0_0_40px_-10px_rgba(200,153,51,0.6)] hover:shadow-[0_0_60px_-5px_rgba(200,153,51,0.9)] transition-all duration-500 border border-gold/50"
                        >
                            <motion.div 
                                className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 z-0"
                                animate={{ x: ['-400%', '500%'] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", repeatDelay: 1 }}
                            />
                            <div className="absolute inset-0 w-full h-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-0" />
                            <span className="relative z-10 flex items-center justify-center gap-3 drop-shadow-sm text-center">
                                Subirme a la Nave
                            </span>
                        </motion.button>
                    </a>
                </motion.div>

                {/* Etiqueta de escasez o tranquilidad (es gratis) */}
                <motion.div variants={itemVariants} className="mt-8 flex items-center gap-2 text-white/50 text-sm sm:text-base font-sans font-light">
                    <svg className="w-4 h-4 text-gold/70" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Acceso inmediato, 100% gratuito.</span>
                </motion.div>
            </motion.div>
        </section>
    );
}

