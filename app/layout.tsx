import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio — Desarrollo Web & Automatización para Negocios",
  description:
    "Ayudo a negocios tradicionales a trabajar más inteligente — automatizando lo repetitivo, digitalizando lo manual y construyendo herramientas a medida.",
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
        <div className="stars" aria-hidden="true"></div>
        <div className="moon" aria-hidden="true"></div>
        <div className="content-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
