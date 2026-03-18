"use client";

import { motion } from "framer-motion";

export default function StorySection() {
    return (
        <section className="relative w-full px-5 py-20 md:py-32 bg-[#EAE4DD] overflow-hidden text-center text-[#1E1E1E] border-y border-[#1E1E1E]/5 shadow-[inset_0_20px_40px_-20px_rgba(30,64,175,0.05)]">
            {/* Elemento de diseño sutil de fondo */}
            <div className="absolute top-0 right-0 p-32 opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3 rotate-12">
                <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="49" stroke="#C89933" strokeWidth="2" strokeDasharray="4 8" />
                    <circle cx="50" cy="50" r="35" stroke="#1E1E1E" strokeWidth="1" />
                </svg>
            </div>

            <div className="relative max-w-3xl mx-auto flex flex-col items-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-block text-gold font-bold tracking-[0.2em] uppercase text-sm mb-6 bg-gold/10 px-4 py-1.5 rounded-full border border-gold/20">
                        INICIO DE LA JORNADA
                    </span>
                    
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 tracking-tight text-[#1E1E1E] leading-tight">
                        El Astillero <span className="text-gold italic font-serif">de tus Sueños</span>
                    </h2>
                    
                    <div className="font-sans text-lg sm:text-xl md:text-[1.35rem] leading-relaxed font-normal text-[#1E1E1E]/80 mb-8 space-y-6">
                        <p>
                            El mundo nos enseñó a trabajar por dinero, no por propósito.<br/>
                            Nos vendieron una seguridad que con el tiempo empieza a sentirse como una cárcel.<br/>
                            Quizás sentís que tenés un don, pero no sabés cómo llevarlo a la realidad.<br/>
                            O tal vez ya sabés lo que querés hacer… pero no encontrás los recursos para empezar.
                        </p>
                        
                        <p>
                            <span className="font-bold text-[#1E1E1E] bg-gold/10 px-1 py-0.5 rounded">No estás roto. Solo estás en el vehículo equivocado.</span>
                        </p>
                        
                        <p>
                            En Tierra Dorada entendemos que tu proyecto no es solo un negocio: es tu medicina para el mundo.<br/>
                            Aquí construimos la Nave que te permitirá estructurar tu don y convertirlo en un servicio real y expansivo.
                        </p>

                        <p className="font-bold text-[#1E1E1E] pt-2">
                            ¿Estás listo para dejar de ser un pasajero y empezar a navegar tu propia verdad?
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}


