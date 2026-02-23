import { Zap, Globe, Bot, LayoutDashboard } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "Optimización y Automatización de Procesos",
    description: "Reducimos horas de trabajo manual y errores operativos.",
    cases: [
      "Todo lo que hoy hace alguien a mano, mañana lo hace el sistema",
      "Documentos, reportes y expedientes generados automáticamente",
      "Tus herramientas actuales conectadas y sincronizadas entre sí",
      "Seguimiento automático de tareas, aprobaciones y plazos sin intervención manual del equipo",
    ],
  },
  {
    icon: Bot,
    title: "Sistemas con Inteligencia Artificial",
    description: "Automatiza atención y procesamiento de información.",
    cases: [
      "Chatbots 24/7 entrenados con información real de tu empresa",
      "Asistentes conectados a WhatsApp o web",
      "Análisis y procesamiento automático de documentos",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Sistemas Internos a Medida",
    description: "Reemplaza hojas de Excel dispersas por una plataforma centralizada.",
    cases: [
      "Dashboards de control para gerencia",
      "Gestión de clientes, proyectos o inventario",
      "CRM interno personalizado",
      "Plataformas internas adaptadas a tu proceso real",
    ],
  },
  {
    icon: Globe,
    title: "Presencia Digital Profesional",
    description: "Tu empresa visible, organizada y lista para conseguir clientes.",
    cases: [
      "Páginas web diseñadas para convertir visitas en clientes",
      "Tiendas online ligeras, rápidas y sin costo de servidor",
      "Sistemas de reservas o cotización online",
      "Integración con pasarelas de pago y WhatsApp",
    ],
  },
]

export default function Services() {

  return (
    <section id="servicios" className="py-28" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(15,23,42,0.35) 18%, rgba(15,23,42,0.35) 82%, transparent 100%)" }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 text-center mb-4">
          Qué puedo hacer por tu negocio
        </h2>
        <p className="text-slate-400 text-center mb-16 max-w-xl mx-auto">
          De procesos manuales a sistemas que trabajan solos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div key={i} className="card p-8">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-indigo-400" strokeWidth={1.5} />
              </div>
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
