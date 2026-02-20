export default function HowIWork() {
  const steps = [
    {
      number: "01",
      icon: "💬",
      title: "Conversamos",
      description: "Entiendo tu problema real, no asumo nada.",
    },
    {
      number: "02",
      icon: "📋",
      title: "Te propongo",
      description: "Presupuesto claro, plazos reales, sin letra chica.",
    },
    {
      number: "03",
      icon: "🔨",
      title: "Construyo",
      description: "Trabajo en iteraciones, te muestro avances.",
    },
    {
      number: "04",
      icon: "🚀",
      title: "Entregamos",
      description: "Capacitación incluida, no te dejo solo.",
    },
  ]

  return (
    <section id="proceso" className="py-28 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 text-center mb-4">
          Sin tecnicismos. Sin sorpresas.
        </h2>
        <p className="text-slate-400 text-center mb-16">
          Así es como trabajo en cada proyecto
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Línea conectora (desktop) */}
          <div
            className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"
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
