import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import InsideCommunity from "@/components/InsideCommunity";
import MasterStations from "@/components/MasterStations";
import ClosingSection from "@/components/ClosingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="fixed inset-0 w-screen h-screen z-[9999] overflow-x-hidden overflow-y-auto bg-[#0A1128] selection:bg-gold/30 selection:text-white scroll-smooth">
      {/* 
        "Modo Pantalla Completa Real" 
        Este contenedor usa fixed inset-0 y un z-index altísimo para cubrir todo 
        el viewport sin importar dónde esté incrustado.
      */}
      <div className="w-full flex-1 flex flex-col isolate">
        <HeroSection />
        <StorySection />
        <InsideCommunity />
        <MasterStations />
        <ClosingSection />
        <Footer />
      </div>
    </main>
  );
}


