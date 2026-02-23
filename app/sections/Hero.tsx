import Image from "next/image"
import Navbar from "@/components/Navbar"

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        aria-hidden="true"
      />

      {/* Overlay gradiente */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.7) 85%, #020617 100%)",
        }}
        aria-hidden="true"
      />

      {/* Navbar transparente */}
      <Navbar />

      {/* Contenido — abajo a la izquierda */}
      <div className="absolute bottom-16 left-6 sm:left-10 md:left-16 max-w-xl z-10 px-2">
        {/* Eyebrow */}
        <p
          className="text-xs sm:text-sm uppercase tracking-[0.1em] mb-4"
          style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}
        >
          Desarrollador &amp; Automatizador
        </p>

        {/* H1 */}
        <h1
          className="font-bold text-white mb-4"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: 1.1,
          }}
        >
          Modernizo negocios que trabajan a la antigua.
        </h1>

        {/* Subtítulo */}
        <p
          className="mb-8 max-w-[420px]"
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "1rem",
            lineHeight: 1.6,
          }}
        >
          Automatización, apps web e IA para empresas que quieren dejar de perder tiempo.
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
