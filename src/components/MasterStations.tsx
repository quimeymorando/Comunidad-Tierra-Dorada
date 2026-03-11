"use client";

import { motion } from "framer-motion";

const stations = [
    {
        title: "Estación del Ser",
        master: "Maestro del Ser",
        problem: "Resuelve la desconexión interna y el desconocimiento del propio potencial.",
    },
    {
        title: "Estación de la Abundancia",
        master: "Maestro de la Abundancia",
        problem: "Resuelve los bloqueos económicos y el miedo a cobrar por tu propósito.",
    },
    {
        title: "Estación de la Estructura",
        master: "Maestro de la Estructura",
        problem: "Resuelve el caos operativo y la falta de método al empezar.",
    },
    {
        title: "Estación de la Comunicación",
        master: "Maestro de la Comunicación",
        problem: "Resuelve la dificultad para expresar un mensaje que resuene con el mundo.",
    },
    {
        title: "Estación de la Tecnología",
        master: "Maestro de la Tecnología",
        problem: "Resuelve el agobio técnico y la parálisis frente a las herramientas digitales.",
    },
    {
        title: "Estación del Servicio",
        master: "Maestro del Servicio",
        problem: "Resuelve la soledad del líder y la dificultad para conectar con quienes necesitan su ayuda.",
    },
    {
        title: "Estación de la Energía",
        master: "Maestro de la Energía",
        problem: "Resuelve el agotamiento y la falta de foco espiritual durante la creación.",
    }
];

export default function MasterStations() {
    return (
        <section className="w-full bg-gradient-to-b from-azul-tierra-deep to-azul-tierra text-white">
            {stations.map((station, index) => {
                const isEven = index % 2 === 0;

                return (
                    <div key={index} className="w-full relative flex flex-col justify-center py-12 px-4 sm:px-6 md:px-12 border-b border-white/5">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`max-w-7xl mx-auto w-full flex flex-col-reverse ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}
                        >

                            {/* Bloque Foto Full Width Contextual */}
                            <div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] bg-white/5 rounded-[2rem] border border-white/10 shadow-2xl flex items-center justify-center p-8 backdrop-blur-sm overflow-hidden relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-azul-tierra-deep/40 to-transparent z-10" />
                                <span className="text-white font-heading text-2xl font-light opacity-60 group-hover:opacity-100 transition-opacity z-20">
                                    [ IMAGEN DE {station.master} ]
                                </span>
                            </div>

                            {/* Bloque Contenido de Texto Glassmorphism */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center p-8 lg:p-12 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 shadow-xl">
                                <span className="font-sans text-gold text-lg font-bold tracking-widest uppercase mb-4 drop-shadow-sm">
                                    {station.master}
                                </span>
                                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight drop-shadow-md">
                                    {station.title}
                                </h3>
                                <p className="font-sans text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-10">
                                    {station.problem}
                                </p>


                            </div>

                        </motion.div>
                    </div>
                );
            })}
        </section>
    );
}
