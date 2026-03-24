"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center md:justify-start text-center px-4 sm:px-6 pt-12 pb-12 md:pt-24 md:pb-32 overflow-hidden bg-[#0A1128]">
            
            {/* Imagen de Fondo "Red de Nodos" con sus colores originales */}
            <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 pointer-events-none"
                style={{ 
                    backgroundImage: "url('/comunidad/Red-de-nodos.jpeg')" 
                }}
            />
            
            {/* Capas de degradado sutiles para legibilidad */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0A1128]/60 via-transparent to-[#0A1128]/80 pointer-events-none" />
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(200,153,51,0.03)_0%,transparent_80%)] pointer-events-none" />

            <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center">
                {/* Logo textual premium - Escalas originales compactas */}
                <div className="mb-6 md:mb-10 flex flex-col items-center px-2">
                    <span className="font-heading text-[3.2rem] leading-[1.0] sm:text-6xl md:text-7xl lg:text-[7rem] font-black text-white tracking-tighter drop-shadow-2xl md:leading-[0.9] text-center uppercase">
                        TIERRA DORADA
                    </span>
                    <span className="font-serif text-2xl sm:text-2xl md:text-3xl lg:text-4xl text-gold italic font-light tracking-[0.2em] mt-2 md:mt-4 opacity-100 drop-shadow-[0_0_15px_rgba(200,153,51,0.9)] drop-shadow-[0_0_35px_rgba(200,153,51,0.6)]">
                        Comunidad
                    </span>
                </div>

                {/* Description Card - Ceñida al copy */}
                <div className="relative mb-6 md:mb-8 p-4 md:px-10 md:py-8 rounded-[1.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-xl max-w-3xl mx-auto overflow-hidden group text-center mx-4 sm:mx-0">
                    <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <p className="font-sans text-[0.95rem] leading-relaxed sm:text-lg md:text-xl text-white md:leading-relaxed font-bold drop-shadow-md relative z-10">
                        Únete gratis a la comunidad de Tierra Dorada en Skool y aprende a estructurar tu don, compartir tu medicina y crear un proyecto con propósito junto a una tribu que camina en la misma dirección.
                    </p>
                </div>

                {/* Call To Action */}
                <div className="w-full sm:w-auto px-4 sm:px-0">
                    <a
                        href="https://www.skool.com/tierra-dorada-2783/about"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                    >
                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-12 py-4.5 sm:py-6 min-h-[58px] sm:min-h-[72px] text-lg sm:text-xl font-bold text-[#050A1F] bg-gold rounded-full overflow-hidden shadow-[0_0_40px_-10px_rgba(200,153,51,0.6)] hover:shadow-[0_0_60px_-5px_rgba(200,153,51,0.9)] transition-all duration-500 border border-gold/50 cursor-pointer"
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
                </div>

                {/* Footer Tagline */}
                <div className="mt-10 flex items-center gap-2 text-white/90 text-[13px] sm:text-base font-sans font-light bg-black/20 py-2 px-4 rounded-full backdrop-blur-sm">
                    <svg className="w-4 h-4 text-gold/70" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Acceso inmediato, 100% gratuito.</span>
                </div>
            </div>
        </section>
    );
}

