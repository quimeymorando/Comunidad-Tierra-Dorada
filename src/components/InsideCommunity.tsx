"use client";

import { motion } from "framer-motion";
import { Sparkles, Compass, Key, BookOpen, Users, Library, Blocks, Radio } from "lucide-react";

export default function InsideCommunity() {
    const resources = [
        {
            icon: <Users className="w-8 h-8 text-gold" strokeWidth={1.5} />,
            placeholder: "Acceso 24/7 a la Comunidad Skool"
        },
        {
            icon: <Library className="w-8 h-8 text-gold" strokeWidth={1.5} />,
            placeholder: "Biblioteca de Recursos y Plantillas"
        },
        {
            icon: <Blocks className="w-8 h-8 text-gold" strokeWidth={1.5} />,
            placeholder: "Módulos Colaborativos de los 7 Maestros"
        },
        {
            icon: <Radio className="w-8 h-8 text-gold" strokeWidth={1.5} />,
            placeholder: "Eventos de Conexión en Vivo"
        }
    ];

    return (
        <section className="relative w-full py-20 md:py-32 px-5 bg-[#FFFFFF] overflow-hidden text-[#1E1E1E] border-b border-[#1E1E1E]/5">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        ¿Qué obtendrás al subirte a la Nave hoy?
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {resources.map((res, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex flex-col items-center text-center p-8 bg-white/50 backdrop-blur-sm border border-gold/20 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(200,153,51,0.15)] transition-all duration-300 group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 border border-gold/30 group-hover:bg-gold/20 transition-colors">
                                {res.icon}
                            </div>
                            <h3 className="font-sans text-lg font-bold text-[#1E1E1E] leading-snug">
                                {res.placeholder}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 text-center px-8 py-4 bg-[#1E1E1E] rounded-full border border-gold/30 shadow-xl"
                >
                    <span className="font-sans text-lg sm:text-xl font-bold text-white tracking-wide">
                        ¡Acceso 100% gratuito para siempre!
                    </span>
                </motion.div>

            </div>
        </section>
    );
}

