"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import fotoJoaco from "../../public/foto-joaco.png";
import fotoMalu from "../../public/foto-malu.jpeg";
import fotoMeli from "../../public/foto-melisa.jpeg";
import fotoYuli from "../../public/foto-yuli.jpeg";
import fotoRodri from "../../public/foto-rodrigo.jpeg";
import fotoMarian from "../../public/foto-mariangeles.jpeg";
import fotoQuimey from "../../public/foto-quimey.png";
import fotoBarbra from "../../public/foto-barbra.jpeg";

const masters = [
    { 
        name: "Joaquin Alterman", 
        image: fotoJoaco, 
        position: "object-top",
        role: "NODRIZA",
        title: "Propósito y Arquitectura del Camino.", 
        description: "Durante muchos años busqué respuestas desde la mente. Me formé como ingeniero, creyendo que si entendía lo suficiente podría ordenar la vida. Con el tiempo descubrí que lo esencial no se resuelve solo pensando, sino aprendiendo a escucharse con honestidad. Hoy acompaño a personas que sienten que hay algo dentro suyo que quiere tomar forma en el mundo: una idea, un proyecto, una forma de servir. Muchas veces ese impulso está ahí, pero falta claridad, dirección o una estructura que permita sostenerlo. En esta estación trabajamos justamente en eso: reconocer lo que tu alma quiere crear y empezar a construir la nave que pueda llevarlo a la realidad. No se trata de encajar en un camino existente, sino de empezar a navegar uno propio." 
    },
    { 
        name: "Malu Miranda", 
        image: fotoMalu, 
        position: "object-center",
        role: "ALTO RENDIMIENTO CONSCIENTE",
        title: "Rendimiento sostenido desde coherencia y presencia", 
        description: "Acompaño a líderes y emprendedores que funcionan hacia afuera pero que en silencio sienten que se perdieron a sí mismos en el camino. Lo hago a través de Semillas Sagradas, mi método propio que integra neurociencia, PNL y espiritualidad aplicada. Desde ahí trabajamos para salir del piloto automático y construir un liderazgo desde coherencia interna real. En este proceso se llevan claridad sobre quiénes son más allá de sus roles, herramientas para gestionar el sistema nervioso bajo presión y una nueva forma de sostener resultados — sin perderse en el proceso." 
    },
    { 
        name: "Melisa Rodriguez", 
        image: fotoMeli, 
        position: "object-top",
        role: "ARQUITECTURA DE REALIDADES",
        title: "Diseñar una realidad alineada con quien realmente eres", 
        description: "Acompaño a personas que sienten que están habitando estructuras que ya no las representan, repitiendo patrones o sin una base sólida desde donde proyectarse. Trabajo desde la premisa de que somos nuestra propia obra en construcción. Mi enfoque propone revisar, rediseñar y reconstruir la arquitectura interna, para salir de lo automático y empezar a crear una realidad elegida con conciencia. En este proceso se llevan claridad estructural, dirección interna, autonomía emocional y herramientas concretas para sostener decisiones alineadas. Aprenden a diseñarse a sí mismos con coherencia, a habitar su vida con mayor presencia y a construir una realidad que refleje verdaderamente quiénes son." 
    },
    { 
        name: "Yuli Melian", 
        image: fotoYuli, 
        position: "object-center",
        role: "HUMANFLOW",
        title: "El cuerpo como portal para recordar quién eres", 
        description: "El CUERPO es el portal. El MOVIMIENTO, la llave. La NATURALEZA, el sostén. Hola soy Yuli Melian y guio espacios donde la energía se eleva, la frecuencia se ordena y tu diseño humano se activa desde la experiencia viva. No se trata de entender… sino de SENTIR, habitar y recordarnos quienes SOMOS." 
    },
    { 
        name: "Rodrigo Ariel Nuñez", 
        image: fotoRodri, 
        position: "object-center",
        role: "EMPRENDIZAJE",
        title: "Asumir la abundancia y liderar tu propia vida financiera", 
        description: "Ayudo a las personas a asumir su abundancia. Transformando su relacion con el dinero, el emprendimiento y los negocios. El pilar fundamental esta basado en aceptar, perdonar y amar a mama y papa. Agradecer todo lo que he tenido y asumirme desde el creador de mi propia realidad. Tomar la rienda financiera de mi vida, es pasar de adolecer la vida a ser un hombre/mujer adulta y responsable." 
    },
    { 
        name: "Mariángeles García", 
        image: fotoMarian, 
        position: "object-center",
        role: "YUNO",
        title: "Estratega de Branding | Mentora de Marcas", 
        description: "Acompaño a profesionales, emprendedores y empresas en la construcción de marcas sólidas, auténticas y con propósito, totalmente alineadas con la identidad de cada uno. Mi trabajo integra estrategia, identidad y comunicación para desarrollar marcas que no solo se vean bien, sino que tengan dirección, coherencia y capacidad de crecer y expandirse. Soy cofundadora de YUNO, una agencia especializada en Branding, comunicación y ecosistemas digitales para marcas que quieren escalar con estrategia e impacto en el mundo digital. Soy una apasionada por las marcas y pero más me mueven las personas que están detrás de ellas, por eso desarrollo mentorías, capacitaciones y talleres donde acompaño a otros a construir la marca que desean, integrando su historia, su identidad y todo aquello que los hace únicos." 
    },
    { 
        name: "Quimey Morando", 
        image: fotoQuimey, 
        position: "object-center",
        role: "FUSIÓN CIBER-ESPIRITUAL",
        title: "Tecnología e Inteligencia Artificial", 
        description: "La tecnología avanza cada vez más rápido, y muchas veces puede sentirse lejana, confusa o incluso intimidante. Sin embargo, cuando aprendemos a relacionarnos con ella de forma simple, se convierte en una gran aliada para crear, trabajar y compartir lo que tenemos para ofrecer. Acompaño a personas que quieren empezar a utilizar herramientas de inteligencia artificial sin sentirse perdidas en el proceso. Desde lo más básico hasta aplicaciones más avanzadas, el objetivo es que la tecnología deje de ser un obstáculo y se transforme en una herramienta a tu favor. En esta estación exploramos cómo amigarnos con la IA y usarla de forma práctica para potenciar nuestras ideas, simplificar tareas y abrir nuevas posibilidades para nuestros proyectos." 
    },
    {
        name: "Barbra Podestá",
        image: fotoBarbra,
        position: "object-top",
        role: "EMPERATRIZ",
        title: "Astróloga y Alquimista",
        description: "Traduzco el lenguaje de los astros y lo bajo a la Tierra. Leo el cielo en tiempo real y guío mi vida a través de las energías del Universo. Formo seres para que puedan comprender, traducir y aprovechar el cielo tanto como lo hago yo. Me especializo en QUIRÓN, la herida del alma, acompañándote a tomar conciencia y liberar memorias de dolor."
    }
];

export default function MasterStations() {
    return (
        <section className="relative w-full py-20 md:py-32 px-5 bg-[#0A1128] overflow-hidden">
            {/* Elementos celestiales decorativos */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-32"
                >
                    <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-6">
                        Los <span className="text-gold italic font-serif font-light">Maestros</span> de tu Viaje
                    </h2>
                    <p className="font-sans text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
                        Expertos dedicados a acompañarte en cada estación de tu desarrollo.
                    </p>
                </motion.div>

                {/* Lista Editorial de Maestros */}
                <div className="flex flex-col gap-16 md:gap-32">
                    {masters.map((master, index) => {
                        // isEven define if the image is on the left (even) or right (odd) on desktop
                        const isEven = index % 2 === 0;
                        
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-16 lg:gap-24 group`}
                            >
                                {/* Master Photo Wrapper */}
                                <div className="w-full md:w-5/12 lg:w-1/2 flex justify-center relative">
                                    {/* Fondo decorativo dorado que hace un sutil borde offset */}
                                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 w-full max-w-[400px] lg:max-w-[480px] aspect-[4/5] rounded-[2rem] border border-gold/30 bg-transparent -z-10 opacity-60" />

                                    <div className="relative w-full max-w-[400px] lg:max-w-[480px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(200,153,51,0.2)] border border-gold/40 bg-[#050A1F]">
                                        <Image
                                            src={master.image}
                                            alt={master.name}
                                            fill
                                            className={`object-cover ${master.position}`}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/50 via-transparent to-transparent z-10" />
                                        
                                        {/* Corner Accents (Detalles Esquina Dorados Estáticos) */}
                                        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/80 rounded-tr-[1.8rem] z-20 m-1" />
                                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/80 rounded-bl-[1.8rem] z-20 m-1" />
                                    </div>
                                </div>

                                {/* Contenido de texto editorial */}
                                <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col items-center text-center md:items-start md:text-left">
                                    <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full mb-4 md:mb-6 border border-gold/20 shadow-sm">
                                        {master.role}
                                    </span>
                                    
                                    <h3 className="font-heading text-[2.2rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 md:mb-4 tracking-tight drop-shadow-md">
                                        {master.name}
                                    </h3>
                                    
                                    <h4 className="font-sans text-xl md:text-2xl text-gold/90 font-light italic tracking-wide mb-6 md:mb-8">
                                        {master.title}
                                    </h4>
                                    
                                    <p className="font-sans text-base sm:text-lg md:text-[1.1rem] md:leading-relaxed text-white/70 leading-relaxed font-light max-w-xl">
                                        {master.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

