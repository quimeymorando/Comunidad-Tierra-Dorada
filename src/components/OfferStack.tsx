"use client";

import { motion } from "framer-motion";
import { Users, Library, Blocks, Radio } from "lucide-react";

export default function OfferStack() {
    const benefits = [
        {
            icon: <Users className="w-8 h-8 text-gold" />,
            text: "Acceso 24/7 a la Comunidad Skool"
        },
        {
            icon: <Library className="w-8 h-8 text-gold" />,
            text: "Biblioteca de Recursos y Plantillas"
        },
        {
            icon: <Blocks className="w-8 h-8 text-gold" />,
            text: "Módulos Colaborativos de los 7 Maestros"
        },
        {
            icon: <Radio className="w-8 h-8 text-gold" />,
            text: "Eventos de Conexión en Vivo"
        }
    ];

    return (
        <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 bg-arena overflow-hidden border-t border-footer/10 shadow-[inset_0_20px_40px_-20px_rgba(30,64,175,0.1)]">

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E1E1E] text-center mb-12 tracking-tight drop-shadow-sm">
                    ¿Qué obtendrás al subirte a la Nave hoy?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-16">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="flex items-center gap-6 p-6 sm:p-8 bg-lino border border-footer/10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="p-4 bg-white rounded-full shadow-inner flex-shrink-0">
                                {benefit.icon}
                            </div>
                            <p className="font-sans text-xl sm:text-2xl font-bold text-[#1E1E1E]">
                                {benefit.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center bg-white/50 px-8 py-6 rounded-full border border-footer/10 shadow-sm mb-12"
                >
                    <span className="font-sans text-xl sm:text-2xl font-black text-[#1E1E1E] drop-shadow-sm tracking-wide">
                        ¡Acceso 100% gratuito para siempre!
                    </span>
                </motion.div>


            </div>
        </section>
    );
}
