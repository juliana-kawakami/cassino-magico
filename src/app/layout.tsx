"use client";

import { ReactNode } from "react";
import { Montserrat } from "next/font/google"; // Import Montserrat font
import "./globals.css";

interface RootLayoutProps {
  children: ReactNode;
  session?: any; // Optional session prop
}

// Configuração da fonte Montserrat
const montserrat = Montserrat({
  subsets: ["latin"], // Otimiza para o subconjunto latino
  display: "swap", // Usa uma fonte de fallback enquanto carrega
  variable: "--font-montserrat", // Define uma variável CSS para a fonte
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <body className="w-[1920px]">{children}</body>
    </html>
  );
}
