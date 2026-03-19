import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tierra Dorada | Construye tu Nave",
  description: "Comunidad Tierra Dorada - Deja de encajar en el sistema tradicional y comienza a construir la nave que llevará tu don al mundo.",
  openGraph: {
    title: "Tierra Dorada | Construye tu Nave",
    description: "Comunidad Tierra Dorada - Deja de encajar en el sistema tradicional y comienza a construir la nave que llevará tu don al mundo.",
    url: "https://www.tierradorada.ar/comunidad",
    siteName: "Tierra Dorada",
    images: [
      {
        url: "https://www.tierradorada.ar/comunidad/Portada-Comunidad.jpeg",
        width: 1200,
        height: 630,
        alt: "Comunidad Tierra Dorada",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tierra Dorada | Construye tu Nave",
    description: "Comunidad Tierra Dorada - Deja de encajar en el sistema tradicional y comienza a construir la nave que llevará tu don al mundo.",
    images: ["https://www.tierradorada.ar/comunidad/Portada-Comunidad.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
