export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Estrellas individuales decorativas */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="star" style={{ top: "15%", left: "10%" }}></div>
        <div className="star" style={{ top: "25%", left: "80%" }}></div>
        <div className="star" style={{ top: "45%", left: "5%" }}></div>
        <div className="star" style={{ top: "60%", left: "90%" }}></div>
        <div className="star" style={{ top: "70%", left: "30%" }}></div>
        <div className="star" style={{ top: "35%", left: "55%" }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20 w-full">
        {/* Disponibilidad */}
        <div className="mb-10 inline-flex items-center gap-3 bg-slate-900/60 backdrop-blur-sm border border-indigo-500/20 rounded-full px-5 py-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span className="text-slate-400 text-sm">Disponible para proyectos</span>
        </div>

        {/* Saludo */}
        <p className="text-indigo-400 text-lg mb-4 font-medium">Hola, soy [Tu Nombre]</p>

        {/* Título */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 leading-tight tracking-tight mb-6 max-w-4xl">
          Modernizo negocios que todavía{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            trabajan a la antigua.
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
          Construyo automatizaciones, apps web y herramientas con IA para pymes
          y empresas que quieren dejar de perder tiempo en procesos manuales.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#proyectos"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-8 py-3.5 rounded-lg transition text-center"
          >
            Ver mis proyectos
          </a>
          <a
            href="#contacto"
            className="border border-indigo-400/40 text-indigo-300 hover:bg-indigo-500/10 font-semibold px-8 py-3.5 rounded-lg transition text-center"
          >
            Hablemos
          </a>
        </div>
      </div>
    </section>
  )
}
