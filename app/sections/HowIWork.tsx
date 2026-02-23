export default function HowIWork() {
  const steps = [
    {
      number: "01",
      icon: "💬",
      title: "Diagnóstico",
      //description: "Entiendo tu problema real, no asumo nada.",
      description: "Escucho tus necesidades y analizo tu proceso actual para identificar el problema real"
    },
    {
      number: "02",
      icon: "📋",
      title: "Estrategia",
      description: "Presento una propuesta con inversión clara y plazos definidos.",
    },
    {
      number: "03",
      icon: "🔨",
      title: "Desarrollo",
      description: "Construyo la solución por etapas, entregando avances constantes para asegurar que vamos por buen camino.",
    },
    {
      number: "04",
      icon: "🚀",
      title: "Puesta en marcha",
      description: "Lanzamos el proyecto con acompañamiento y capacitación para que tú y tu equipo tengan el control total.",
    },
  ]

  return (
    <section id="proceso" className="py-28" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(15,23,42,0.35) 18%, rgba(15,23,42,0.35) 82%, transparent 100%)" }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 text-center mb-4">
          Un proceso diseñado para tu tranquilidad
        </h2>
        <p className="text-slate-400 text-center mb-16">
          Así es como trabajo en cada proyecto
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Línea conectora (desktop) */}
          <div
            className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-transparent via-indigo-500/30 to-transparent"
            aria-hidden="true"
          ></div>

          {steps.map((step, i) => (
            <div key={i} className="text-center relative">
              {/* Número + ícono */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 border border-indigo-500/20 mb-6">
                <span className="text-2xl">{step.icon}</span>
              </div>
              <p className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2">
                Paso {step.number}
              </p>
              <h3 className="text-lg font-bold text-slate-100 mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
