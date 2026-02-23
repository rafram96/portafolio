"use client"

import { useState, useEffect } from "react"
import { X, Search } from "lucide-react"

const projects = [
  {
    badge: "Automatización",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    title: "Alpamayo Engine — Visado Inteligente de Expedientes Técnicos",
    metric: "8h → 20min",
    problem: "Un equipo tardaba días firmando manualmente cientos de planos y documentos técnicos — cada archivo había que abrirlo, escalar la firma, colocarla sin tapar el cajetín, guardar y cerrar. 500 veces.",
    solution: "App de escritorio en Python que convierte todos los archivos a PDF, detecta si es plano o documento A4, y estampa la firma en la ubicación correcta automáticamente.",
    result: "Elimina riesgo contractual por firmas mal posicionadas. Reduce el cierre de expedientes de 3 días a 30 minutos.",
    stack: ["Python", "PyQt", "PyMuPDF", "COM Automation", "Pillow", "SQLite"],
    detail: {
      features: [
        "Backup automático del expediente original antes de procesar",
        "Detección de geometría PDF + orientación del membrete",
        "Algoritmo de búsqueda de espacio blanco (collision avoidance)",
        "Escalado vectorial dinámico según formato (A0 → +300%)",
        "Multi-firma por documento (Gerente + Jefe + Especialista)",
        "Modo batch con lazy loading para archivos >1GB",
        "Logs de auditoría: qué se firmó, cuándo, con qué firma",
      ],
      fullSolution: [
        "Escaneo recursivo de carpetas del proyecto",
        "Conversión silenciosa de DOCX/XLSX a PDF",
        "Detección automática del tipo de documento — plano vs A4",
        "Escalado proporcional de firma según tamaño de página",
        "Análisis del cuadrante inferior derecho para evitar tapar el membrete",
        "Estampado vectorial manteniendo transparencia",
        "Reporte de trazabilidad con cada archivo procesado",
      ],
      businessValue: "Elimina riesgo contractual por firmas mal posicionadas. Reduce tiempo de cierre de expedientes de 3 días a 30 minutos. Garantiza que 500+ documentos queden correctamente visados sin supervisión.",
    },
  },
]

export default function Projects() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null)

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [selected])

  return (
    <section id="proyectos" className="py-28">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 text-center mb-4">
          Proyectos reales, resultados concretos
        </h2>
        <p className="text-slate-400 text-center mb-16">
          No vendo promesas — muestro lo que ya construí.
        </p>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <div key={i} className="card p-8 md:p-10">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-5">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded border ${project.badgeColor}`}>
                  {project.badge}
                </span>
                <button
                  onClick={() => setSelected(project)}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-indigo-400 transition cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  Ver detalles
                </button>
              </div>

              <h3 className="text-2xl font-bold text-slate-100 mb-4">
                {project.title}
              </h3>

              {/* Resultado destacado */}
              <div className="relative bg-indigo-950/40 border border-indigo-500/20 rounded-xl p-5 mb-6 overflow-hidden">
                <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                  Resultado
                </p>
                <p className="text-slate-200 text-sm leading-relaxed relative z-10">
                  {project.result}
                </p>
                <span className="absolute right-4 bottom-1 text-4xl font-black text-indigo-400/15 select-none leading-none">
                  {project.metric.split("|")[0].trim()}
                </span>
              </div>

              {/* Problema / Solución */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    El problema
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed italic">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    La solución
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, j) => (
                  <span key={j} className="bg-slate-800 text-slate-300 font-mono text-xs px-3 py-1 rounded border border-indigo-500/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-slate-900 border border-indigo-500/20 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cerrar */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-200 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badge + Título */}
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded border mb-4 ${selected.badgeColor}`}>
              {selected.badge}
            </span>
            <h3 className="text-xl font-bold text-slate-100 mb-6">
              {selected.title}
            </h3>

            {/* Solución completa */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Cómo funciona
              </p>
              <ul className="flex flex-col gap-2">
                {selected.detail.fullSolution.map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="text-indigo-400 font-mono text-xs mt-0.5 shrink-0">
                      0{i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="mb-6">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Características técnicas
              </p>
              <ul className="flex flex-col gap-2">
                {selected.detail.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <span className="text-indigo-400 mt-0.5 shrink-0">→</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Business value */}
            <div className="bg-indigo-950/40 border border-indigo-500/20 rounded-xl p-4 mb-6">
              <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
                Valor de negocio
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selected.detail.businessValue}
              </p>
            </div>

            {/* Stack */}
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {selected.stack.map((tech, j) => (
                  <span key={j} className="bg-slate-800 text-slate-300 font-mono text-xs px-3 py-1 rounded border border-indigo-500/10">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
