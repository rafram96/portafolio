import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rafael Ramos - Portfolio",
  description:
    "Especialista en automatización de procesos, desarrollo web y soluciones con IA. Trabajo con pymes y emprendedores que quieren modernizarse sin depender de grandes agencias. Mi enfoque es práctico: soluciones concretas para problemas reales, sin tecnicismos innecesarios. Si buscas optimizar tu negocio y llevarlo al mundo digital, estás en el lugar correcto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="stars-bg" aria-hidden="true"></div>
        <div className="moon-bg" aria-hidden="true"></div>
        <div className="space-cat" aria-hidden="true">🐱</div>
        <div className="content-wrapper">
          <LenisProvider>
            {children}
          </LenisProvider>
        </div>
      </body>
    </html>
  );
}
