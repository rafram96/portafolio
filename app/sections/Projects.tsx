export default function Projects() {
  const projects = [
    {
      badge: "Automatización",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      title: "Alpamayo Engine — Firma Masiva de Expedientes Técnicos",
      metric: "8h → 20min",
      result: "Lo que antes tomaba 8 horas de trabajo manual ahora toma 20 minutos sin intervención humana. Procesa 500+ archivos por ejecución.",
      problem: "Un equipo tardaba días firmando manualmente cientos de planos y documentos técnicos — cada archivo había que abrirlo, firmar y guardar, 300 veces.",
      solution: "App de escritorio en Python que convierte todos los archivos a PDF, detecta si es plano o documento A4, y estampa la firma en la ubicación correcta automáticamente.",
      stack: ["Python", "PyQt", "PDF Automation", "COM Automation", "SQLite"],
    },
    {
      badge: "Web & Ecommerce",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      title: "Tienda Digital — Ecommerce Serverless para Negocio Local",
      metric: "+40% ventas",
      result: "En el primer mes online generó 40% más de ventas sin inversión recurrente en infraestructura.",
      problem: "Una tienda de artesanías en Lima vendía solo presencialmente y no podía costear servidores ni plataformas mensuales.",
      solution: "Ecommerce ligero con Next.js en Vercel — catálogo dinámico, carrito y pasarela de pago integrada, costo de servidor cero.",
      stack: ["Next.js", "Vercel", "Stripe", "Tailwind CSS"],
    },
    {
      badge: "IA",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      title: "Asistente IA — Atención al Cliente Automatizada 24/7",
      metric: "−70% consultas",
      result: "Redujo en 70% las consultas manuales. El equipo ahora solo atiende casos complejos que realmente necesitan atención humana.",
      problem: "Una notaría recibía cientos de consultas repetitivas por WhatsApp y email — el equipo perdía horas respondiendo siempre lo mismo.",
      solution: "Chatbot con LLM local (Ollama) conectado a WhatsApp vía n8n, entrenado con documentos y procedimientos reales de la notaría.",
      stack: ["Ollama", "n8n", "Python", "FastAPI", "WhatsApp API"],
    },
  ]

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
              {/* Badge + título */}
              <span className={`inline-block text-xs font-semibold px-3 py-1 rounded border mb-4 ${project.badgeColor}`}>
                {project.badge}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-6">
                {project.title}
              </h3>

              {/* Resultado destacado */}
              <div className="relative rounded-xl bg-indigo-950/40 border border-indigo-500/20 px-6 py-5 mb-4 overflow-hidden">
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-5xl md:text-7xl font-black text-indigo-500/10 select-none pointer-events-none leading-none whitespace-nowrap"
                >
                  {project.metric}
                </span>
                <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">Resultado</p>
                <p className="text-indigo-200 text-sm md:text-base leading-relaxed font-medium relative z-10">
                  {project.result}
                </p>
              </div>

              {/* Problema + Solución */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">El problema</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">La solución</p>
                  <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
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
    </section>
  )
}