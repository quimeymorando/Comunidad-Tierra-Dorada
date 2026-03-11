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
        <section className="relative w-full py-20 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-azul-tierra to-azul-tierra-deep text-white flex flex-col items-center justify-center overflow-hidden border-t border-white/10">

            {/* Cielo estrellado idéntico al Hero */}
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

            {/* Luz focal trasera (Removida a pedido del usuario) */}

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <motion.p
                    className="font-sans text-xl sm:text-2xl md:text-4xl leading-snug mb-12 font-light drop-shadow-md text-white/90"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Tu propósito es la medicina que el mundo necesita. Tierra Dorada es el respaldo que esperabas para dejar de dudar. <br /><br />
                    <span className="font-serif italic text-gold font-light tracking-wide text-2xl sm:text-3xl md:text-5xl">¿Vas a subirte o vas a seguir mirando desde la orilla?</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <a
                        href="https://www.skool.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full sm:w-auto"
                    >
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-12 py-6 min-h-[64px] text-xl sm:text-2xl font-black text-azul-tierra-deep bg-gold rounded-full overflow-hidden shadow-[0_0_40px_-10px_rgba(200,153,51,0.6)] hover:shadow-[0_0_60px_-10px_rgba(200,153,51,0.9)] transition-all duration-500"
                        >
                            <motion.div 
                                className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12 z-0"
                                animate={{ x: ['-300%', '400%'] }}
                                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut", repeatDelay: 1 }}
                            />
                            <div className="absolute inset-0 w-full h-full bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out z-0" />
                            <span className="relative z-10 drop-shadow-sm">
                                ¡Sí, quiero construir mi nave y entrar a la comunidad!
                            </span>
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
