export default function TechStack() {
  const tools = [
    { name: "Python", desc: "Automatización y backend" },
    { name: "JavaScript / TypeScript", desc: "Frontend y fullstack" },
    { name: "React / Next.js", desc: "Apps web modernas" },
    { name: "FastAPI", desc: "APIs rápidas y robustas" },
    { name: "SQL", desc: "Bases de datos relacionales" },
    { name: "Docker", desc: "Contenedores y despliegue" },
    { name: "AWS", desc: "Infraestructura en la nube" },
    { name: "Ollama / LLMs", desc: "IA local y modelos de lenguaje" },
    { name: "n8n", desc: "Automatización de flujos" },
  ]

  return (
    <section id="stack" className="py-28">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-100 text-center mb-4">
          Las herramientas que uso
        </h2>
        <p className="text-slate-400 text-center mb-16">
          Tecnologías probadas para soluciones confiables
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="bg-slate-900/60 border border-indigo-500/10 rounded-lg px-5 py-4 hover:border-indigo-500/30 transition group"
            >
              <p className="text-slate-100 font-mono text-sm font-semibold group-hover:text-indigo-300 transition">
                {tool.name}
              </p>
              <p className="text-slate-500 text-xs mt-1">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
