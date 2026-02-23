"use client"

import { useState } from "react"

const tools = [
  // Página 1 — las 9 más relevantes para el perfil
  { name: "Python", desc: "Automatización de procesos y desarrollo backend", icon: "python", color: "3776AB" },
  { name: "React / Next.js", desc: "Interfaces web rápidas y profesionales", icon: "nextdotjs", color: "ffffff" },
  { name: "JavaScript / TypeScript", desc: "Desarrollo web moderno y robusto", icon: "typescript", color: "3178C6" },
  { name: "n8n", desc: "Automatización de flujos entre herramientas", icon: "n8n", color: "EA4B71" },
  { name: "LLMs", desc: "Modelos de inteligencia artificial aplicados al negocio", icon: "ollama", color: "ffffff" },
  { name: "FastAPI", desc: "Integración y comunicación entre sistemas", icon: "fastapi", color: "009688" },
  { name: "Docker", desc: "Despliegue consistente en cualquier entorno", icon: "docker", color: "2496ED" },
  { name: "AWS / Serverless", desc: "Infraestructura en la nube escalable y económica", icon: "serverless", color: "FD5750" },
  { name: "PostgreSQL", desc: "Almacenamiento seguro de información estructurada", icon: "postgresql", color: "4169E1" },
  // Página 2
  { name: "MongoDB", desc: "Gestión de datos flexibles y no estructurados", icon: "mongodb", color: "47A248" },
  { name: "Redis", desc: "Optimización de rendimiento en tiempo real", icon: "redis", color: "FF4438" },
  { name: "Vercel", desc: "Publicación y disponibilidad web garantizada", icon: "vercel", color: "ffffff" },
  { name: "Tailwind CSS", desc: "Diseño visual moderno y consistente", icon: "tailwindcss", color: "06B6D4" },
  { name: "Git", desc: "Control de versiones y respaldo del código", icon: "git", color: "F05032" },
]

const PAGE_SIZE = 9

export default function TechStack() {
  const [page, setPage] = useState(0)

  const totalPages = Math.ceil(tools.length / PAGE_SIZE)
  const visible = tools.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  return (
    <section id="stack" className="py-28">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 text-center mb-4">
          Las herramientas que uso
        </h2>
        <p className="text-slate-400 text-center mb-16">
          Tecnologías probadas para soluciones confiables
        </p>

        {/* Grid con altura fija para que la navegación no se mueva */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 max-w-4xl mx-auto" style={{ minHeight: "480px" }}>
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
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-indigo-500/20 text-slate-300 text-lg hover:border-indigo-500/60 hover:text-indigo-300 disabled:opacity-20 disabled:cursor-not-allowed transition"
            aria-label="Página anterior"
          >
            ←
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === page
                    ? "w-2.5 h-2.5 bg-indigo-400"
                    : "w-2 h-2 bg-slate-600 hover:bg-slate-400"
                }`}
                aria-label={`Ir a página ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            className="w-11 h-11 flex items-center justify-center rounded-full border border-indigo-500/20 text-slate-300 text-lg hover:border-indigo-500/60 hover:text-indigo-300 disabled:opacity-20 disabled:cursor-not-allowed transition"
            aria-label="Página siguiente"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}