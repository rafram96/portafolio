export default function PainPoints() {
  const pains = [
    {
      icon: "⏱",
      text: "Mis empleados hacen lo mismo a mano todos los días y nunca termina",
    },
    {
      icon: "📂",
      text: "Tenemos todo en Excel y Word pero nada está conectado ni ordenado",
    },
    {
      icon: "🌐",
      text: "No tenemos presencia digital y perdemos clientes ante competidores más modernos",
    },
  ]

  return (
    <section id="problemas" className="py-28">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 text-center mb-16">
          ¿Te identificas con alguno de estos?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain, i) => (
            <div key={i} className="card p-8 text-center">
              <span className="text-5xl block mb-6">{pain.icon}</span>
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
