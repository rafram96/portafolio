"use client"

import Image from "next/image"
import Navbar from "@/components/Navbar"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

const BACKGROUNDS = [
  "/bgs/bg2.jpg",
  "/bgs/bg3.jpg",
  "/bgs/bg8.jpg",
  "/bgs/bg10.jpg",
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const slotRefs = useRef<(HTMLDivElement | null)[]>([])

  // Carrusel automático
  useEffect(() => {
    if (BACKGROUNDS.length <= 1) return
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % BACKGROUNDS.length)
    }, 8000)
    return () => clearInterval(id)
  }, [])

  // Parallax via scroll nativo (Lenis dispara el evento scroll nativo)
  useEffect(() => {
    const el = parallaxRef.current
    if (!el) return
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.35}px)`
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Reiniciar animación Ken Burns cada vez que cambia la imagen activa
  useLayoutEffect(() => {
    const el = slotRefs.current[current]
    if (!el) return
    el.style.animation = "none"
    el.getBoundingClientRect() // fuerza reflow
    el.style.animation = ""
  }, [current])

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Contenedor parallax */}
      <div ref={parallaxRef} className="hero-parallax">
        {BACKGROUNDS.map((src, index) => (
          <div
            key={src}
            ref={(el) => { slotRefs.current[index] = el }}
            className={`hero-bg-slot ${
              index === current ? "hero-bg-active" : ""
            }`}
            style={{ opacity: index === current ? 1 : 0 }}
          >
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              className="object-cover object-center"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>

      {/* Overlay gradiente */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.55) 85%, #020617 100%)",
        }}
        aria-hidden="true"
      />

      {/* Navbar transparente */}
      <Navbar />

      {/* Contenido — abajo a la izquierda */}
      <div className="absolute bottom-16 left-6 sm:left-10 md:left-16 max-w-xl z-10 px-2">
        {/* Eyebrow */}
        <p
          className="text-xs sm:text-sm uppercase tracking-widest mb-4"
          style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}
        >
          Desarrollador &amp; Automatizador
        </p>

        {/* H1 */}
        <h1
          className="font-bold text-white mb-4"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 4rem)",
            lineHeight: 1.1,
          }}
        >
          Especialista en automatización, desarrollo web y soluciones con IA
        </h1>

        {/* Subtítulo */}
        <p
          className="mb-8 max-w-[560px]"
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "clamp(0.85rem, 1vw, 1rem)",
            lineHeight: 1.6,
          }}
        >
          Trabajo con pymes y emprendedores que quieren modernizarse sin depender de grandes agencias. Mi enfoque es práctico: soluciones concretas para problemas reales, sin tecnicismos innecesarios. Si buscas optimizar tu negocio y llevarlo al mundo digital, estás en el lugar correcto.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4 mb-5">
          <a
            href="#proyectos"
            className="bg-white text-black font-medium px-6 py-2.5 rounded hover:bg-gray-200 transition text-sm"
          >
            Ver proyectos →
          </a>
          <a
            href="#contacto"
            className="text-white text-sm font-normal hover:underline underline-offset-4 transition"
          >
            Hablemos
          </a>
        </div>

        {/* Detalle enterprise */}
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          ¿Necesitas algo enterprise?{" "}
          <a href="#contacto" className="hover:underline underline-offset-2">
            Conversemos →
          </a>
        </p>
      </div>
    </section>
  )
}
