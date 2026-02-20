export default function Services() {
  const services = [
    {
      icon: "🔧",
      title: "Automatización de Procesos",
      description: "Elimina las tareas repetitivas que consumen horas de tu equipo.",
      cases: [
        "Generación automática de documentos y reportes",
        "Firma digital masiva de expedientes",
        "Flujos automáticos entre herramientas (email, Excel, Drive, etc.)",
      ],
    },
    {
      icon: "🌐",
      title: "Páginas Web & Ecommerce",
      description: "Tu negocio en internet, sin complicaciones técnicas.",
      cases: [
        "Landing pages profesionales para captar clientes",
        "Tiendas online ligeras y rápidas",
        "Sistemas de reservas o cotización online",
      ],
    },
    {
      icon: "🤖",
      title: "Integración de IA",
      description: "Haz que tu negocio piense — aunque tú estés durmiendo.",
      cases: [
        "Chatbots para atención al cliente 24/7",
        "Asistentes que responden por WhatsApp o tu web",
        "Procesamiento automático de documentos con IA",
      ],
    },
    {
      icon: "⚙️",
      title: "Apps Web a Medida",
      description: "Si necesitas algo que no existe en el mercado, lo construimos.",
      cases: [
        "Dashboards internos para tu equipo",
        "Sistemas de gestión simples (clientes, proyectos, inventario)",
        "Reemplazar hojas de Excel por algo más robusto",
      ],
    },
  ]

  return (
    <section id="servicios" className="py-28 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 text-center mb-4">
          Qué puedo hacer por tu negocio
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
          Soluciones concretas para problemas reales
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div key={i} className="card p-8">
              <span className="text-4xl block mb-4">{service.icon}</span>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{service.title}</h3>
              <p className="text-slate-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.cases.map((c, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="text-indigo-400 mt-0.5">→</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
