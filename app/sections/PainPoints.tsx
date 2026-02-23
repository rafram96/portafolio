import { Clock, FolderX, AlertTriangle } from "lucide-react"

const pains = [
  {
    icon: Clock,
    text: "Mis empleados repiten las mismas tareas a mano todos los días y el tiempo nunca alcanza.",
  },
  {
    icon: FolderX,
    text: "Toda la información está en Excel y Word dispersos — nada conectado, nada ordenado.",
  },
  {
    icon: AlertTriangle,
    text: "Cometemos errores costosos porque los procesos dependen de personas, no de sistemas.",
  },
]

export default function PainPoints() {
  return (
    <section id="problemas" className="py-28">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 text-center mb-16">
          ¿Te identificas con alguno de estos casos?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <div key={i} className="card p-8 text-center group">
              <div className="w-14 h-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-6 group-hover:border-indigo-500/50 transition">
                <pain.icon className="w-7 h-7 text-indigo-400" strokeWidth={1.5} />
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                &ldquo;{pain.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-indigo-400 mt-12 text-lg font-medium">
          Si dijiste sí a alguna — podemos trabajar juntos.
        </p>
      </div>
    </section>
  )
}
