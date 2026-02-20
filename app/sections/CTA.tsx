export default function CTA() {
  return (
    <section
      id="contacto"
      className="py-28 relative overflow-hidden"
    >
      {/* Gradiente de fondo */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 via-indigo-950/40 to-[#020617] pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6">
          ¿Listo para dejar de perder tiempo?
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Cuéntame qué problema tienes. La primera conversación es gratis y sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="https://wa.me/51XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-10 py-4 rounded-lg transition text-center text-lg"
          >
            Escríbeme por WhatsApp
          </a>
          <a
            href="mailto:tu@email.com"
            className="border border-indigo-400/40 text-indigo-300 hover:bg-indigo-500/10 font-semibold px-10 py-4 rounded-lg transition text-center text-lg"
          >
            Envíame un email
          </a>
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-slate-500 text-sm">
            📧 tu@email.com
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            Respondo en menos de 24 horas
          </div>
        </div>
      </div>
    </section>
  )
}
