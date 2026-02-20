export default function Projects() {
  const projects = [
    {
      badge: "🔧 Automatización",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      title: "Alpamayo Engine — Firma Masiva de Expedientes Técnicos",
      problem:
        "Un equipo de arquitectos e ingenieros tardaba días en firmar manualmente cientos de planos y documentos técnicos para entregar un expediente completo. Cada archivo había que abrirlo, insertar la firma, guardar y cerrar — 300 veces.",
      solution:
        "Desarrollé una aplicación de escritorio en Python que escanea la carpeta del proyecto, convierte todos los archivos Word/Excel a PDF, detecta automáticamente si es un plano técnico o un documento A4, y estampa la firma digital de cada especialista en la ubicación correcta — sin tapar el contenido.",
      result:
        "Lo que antes tomaba 8 horas de trabajo manual ahora toma 20 minutos sin intervención humana. Procesa 500+ archivos por ejecución.",
      stack: ["Python", "PyQt", "PDF Automation", "COM Automation", "SQLite"],
    },
    {
      badge: "🌐 Web & Ecommerce",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      title: "Tienda Digital — Ecommerce Serverless para Negocio Local",
      problem:
        "Una tienda de artesanías en Lima vendía solo presencialmente. Quería vender online pero no podía pagar servidores mensuales ni plataformas costosas.",
      solution:
        "Construí un ecommerce ligero con Next.js desplegado en Vercel, con catálogo dinámico, carrito de compras y pasarela de pago integrada — sin costo de servidor mensual.",
      result:
        "En el primer mes online generó 40% más de ventas sin inversión recurrente en infraestructura.",
      stack: ["Next.js", "Vercel", "Stripe", "Tailwind CSS"],
    },
    {
      badge: "🤖 IA",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      title: "Asistente IA — Atención al Cliente Automatizada 24/7",
      problem:
        "Una notaría recibía cientos de consultas repetitivas por WhatsApp y email. El equipo perdía horas respondiendo las mismas preguntas sobre requisitos y horarios.",
      solution:
        "Implementé un chatbot con LLM local (Ollama) conectado a WhatsApp vía n8n, entrenado con los documentos y procedimientos de la notaría para dar respuestas precisas automáticamente.",
      result:
        "Redujo en 70% las consultas manuales. El equipo ahora solo atiende casos complejos que realmente necesitan atención humana.",
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
              {/* Badge */}
              <span
                className={`inline-block text-xs font-semibold px-3 py-1 rounded border mb-5 ${project.badgeColor}`}
              >
                {project.badge}
              </span>

              <h3 className="text-2xl font-bold text-slate-100 mb-6">
                {project.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Problema */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    El problema
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed italic">
                    {project.problem}
                  </p>
                </div>
                {/* Solución */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    La solución
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
                {/* Resultado */}
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    El resultado
                  </p>
                  <p className="text-indigo-300 text-sm leading-relaxed font-medium">
                    {project.result}
                  </p>
                </div>
              </div>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, j) => (
                  <span
                    key={j}
                    className="bg-slate-800 text-slate-300 font-mono text-xs px-3 py-1 rounded border border-indigo-500/10"
                  >
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
