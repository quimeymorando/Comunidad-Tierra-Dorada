"use client";

import { motion } from "framer-motion";

export default function StorySection() {
    return (
        <section className="relative w-full px-4 sm:px-6 py-16 md:py-24 bg-arena overflow-hidden text-center text-footer border-y border-footer/10 shadow-[inset_0_20px_40px_-20px_rgba(30,64,175,0.1)]">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-8 tracking-tight text-[#1E1E1E]">
                        El Astillero <span className="text-gold italic font-serif opacity-90">de tus Sueños</span>
                    </h2>
                    <p className="font-sans text-xl sm:text-2xl leading-relaxed font-normal text-[#1E1E1E]/80 mb-14 max-w-3xl">
                        El mundo nos enseñó a trabajar por dinero, no por propósito. Nos vendieron una seguridad que hoy se siente como una cárcel. Si sentís que tenés un don pero no sabés cómo convertirlo en una realidad, o si ya sabés qué querés hacer pero te faltan los recursos... <span className="font-bold text-[#1E1E1E]">no estás roto. Solo estás en el vehículo equivocado.</span>
                        <br /><br />
                        En Tierra Dorada, entendemos que tu proyecto no es solo un negocio; es tu medicina para el mundo. Aquí construimos la <span className="text-gold italic font-serif text-2xl sm:text-3xl font-semibold opacity-90 mx-1">«Nave»</span> que estructurará tu don para convertirlo en un servicio real y expansivo. <span className="font-bold text-[#1E1E1E]">¿Estás listo para dejar de ser un pasajero y empezar a navegar tu propia verdad?</span>
                    </p>


                </motion.div>
            </div>
        </section>
    );
}
