"use client"

import { useState, useRef } from "react"

const tools = [
  // Página 1 — las 9 más relevantes para el perfil
  { name: "Python", desc: "Automatización de procesos y desarrollo backend", icon: "python", color: "ECD53F" },
  { name: "React / Next.js", desc: "Interfaces web rápidas y profesionales", icon: "react", color: "61DAFB" },
  { name: "JavaScript / TypeScript", desc: "Desarrollo web moderno y robusto", icon: "typescript", color: "3178C6" },
  { name: "n8n", desc: "Automatización de flujos entre herramientas", icon: "n8n", color: "EA4B71" },
  { name: "LLMs", desc: "Modelos de inteligencia artificial aplicados al negocio", icon: "ollama", color: "ffffff" },
  { name: "FastAPI", desc: "Integración y comunicación entre sistemas", icon: "fastapi", color: "009688" },
  { name: "Docker", desc: "Despliegue consistente en cualquier entorno", icon: "docker", color: "2496ED" },
  { name: "AWS / Serverless", desc: "Infraestructura en la nube escalable y económica", icon: "serverless", color: "FD5750" },
  { name: "Google Gemini", desc: "Integración de inteligencia artificial en aplicaciones", icon: "googlegemini", color: "ab87de" },
  // Página 2
  { name: "LangChain", desc: "Orquestación de LLMs y sistemas RAG", icon: "langchain", color: "ffffff" },
  { name: "PostgreSQL", desc: "Almacenamiento seguro de información estructurada", icon: "postgresql", color: "4169E1" },
  { name: "MongoDB", desc: "Gestión de datos flexibles y no estructurados", icon: "mongodb", color: "47A248" },
  { name: "Redis", desc: "Optimización de datos consultados en tiempo real", icon: "redis", color: "FF4438" },
  { name: "GitHub", desc: "Colaboración y control de versiones del código", icon: "github", color: "ffffff" },
  { name: "Qt", desc: "Desarrollo de interfaces gráficas de escritorio", icon: "qt", color: "41CD52" },
  { name: "Vercel", desc: "Publicación y disponibilidad web garantizada", icon: "vercel", color: "ffffff" },
  { name: "Tailwind CSS", desc: "Diseño visual moderno y consistente", icon: "tailwindcss", color: "06B6D4" },
  { name: "Git", desc: "Control de versiones y respaldo del código", icon: "git", color: "F05032" },
  // Página 3
  { name: "PgVector", desc: "Base de datos vectorial en PostgreSQL", icon: "postgresql", color: "FF0000" },
  { name: "Node.js", desc: "Backend ligero para APIs y servicios", icon: "nodedotjs", color: "339933" },
  { name: "OpenCV", desc: "Visión por computadora y procesamiento de imágenes", icon: "opencv", color: "5c3bf5" },
  { name: "Hugging Face", desc: "Uso de modelos open-source y fine-tuning", icon: "huggingface", color: "FFD21E" },
]

const PAGE_SIZE = 9

export default function TechStack() {
  const [page, setPage] = useState(0)
  const [fading, setFading] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const totalPages = Math.ceil(tools.length / PAGE_SIZE)
  const visible = tools.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  const goTo = (next: number) => {
    if (fading) return
    setFading(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setPage(next)
      setFading(false)
    }, 250)
  }

  return (
    <section id="stack" className="py-28">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 text-center mb-4">
          Las herramientas que uso
        </h2>
        <p className="text-indigo-300/80 text-center text-lg mb-3 font-medium">
          Diseño sistemas que conectan procesos, datos e inteligencia.
        </p>
        <p className="text-slate-400 text-center mb-16">
          Tecnologías probadas para soluciones confiables
        </p>

        {/* Grid con altura fija para que la navegación no se mueva */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-4xl mx-auto transition-all duration-250"
          style={{
            minHeight: "480px",
            opacity: fading ? 0 : 1,
            transform: fading ? "translateY(8px)" : "translateY(0px)",
            transition: "opacity 250ms ease, transform 250ms ease",
          }}
        >
          {visible.map((tool) => (
            <div
              key={tool.name}
              className="bg-slate-900/60 border border-indigo-500/10 rounded-xl px-6 py-5 hover:border-indigo-500/30 transition group flex items-center justify-between"
            >
              <div>
                <p className="text-slate-100 font-mono text-base font-semibold group-hover:text-indigo-300 transition">
                  {tool.name}
                </p>
                <p className="text-slate-500 text-sm mt-1">{tool.desc}</p>
              </div>

              <div className="relative w-10 h-10 shrink-0 ml-4">
                <img
                  src={`https://cdn.simpleicons.org/${tool.icon}/6366f1`}
                  alt={tool.name}
                  className="absolute inset-0 w-10 h-10 opacity-50 group-hover:opacity-0 transition duration-300"
                />
                <img
                  src={`https://cdn.simpleicons.org/${tool.icon}/${tool.color}`}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition duration-300"
                />
              </div>
            </div>
          ))}
          {/* Placeholders invisibles para mantener el alto del grid */}
          {Array.from({ length: PAGE_SIZE - visible.length }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="rounded-xl px-6 py-5 invisible"
              aria-hidden="true"
            >
              <p className="font-mono text-sm font-semibold">&nbsp;</p>
              <p className="text-xs mt-1">&nbsp;</p>
            </div>
          ))}
        </div>

        {/* Navegación */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={() => goTo((page - 1 + totalPages) % totalPages)}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-indigo-500/20 text-slate-300 text-lg hover:border-indigo-500/60 hover:text-indigo-300 transition"
            aria-label="Página anterior"
          >
            ←
          </button>

          <div className="flex items-center gap-2">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className={`rounded-full transition-all duration-300 ${
                  dot === page % 3
                    ? "w-2.5 h-2.5 bg-indigo-400"
                    : "w-2 h-2 bg-slate-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => goTo((page + 1) % totalPages)}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-indigo-500/20 text-slate-300 text-lg hover:border-indigo-500/60 hover:text-indigo-300 transition"
            aria-label="Página siguiente"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}