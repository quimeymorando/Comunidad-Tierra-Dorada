export default function Footer() {
    return (
        <footer className="w-full bg-footer text-lino py-6 px-4 sm:px-6 relative overflow-hidden flex flex-col items-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-2">
                <h3 className="font-heading text-lg md:text-xl font-bold tracking-widest text-white/90">
                    TIERRA DORADA
                </h3>

                <p className="font-sans text-sm sm:text-base text-white/70 font-light italic tracking-wide">
                    &quot;Construyendo naves para un mundo despierto&quot;
                </p>

                <div className="w-16 h-px bg-gold/30 my-2" />

                <div className="flex gap-8 text-sm md:text-base font-sans font-medium text-white/60">
                    <a href="#" className="hover:text-gold hover:scale-105 transition-all">Términos</a>
                    <a href="#" className="hover:text-gold hover:scale-105 transition-all">Privacidad</a>
                    <a href="#" className="hover:text-gold hover:scale-105 transition-all">Contacto</a>
                </div>

                <p className="text-[10px] sm:text-xs text-white/30 font-sans mt-2">
                    © {new Date().getFullYear()} Comunidad Tierra Dorada. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
