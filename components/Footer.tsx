export default function Footer() {
  return (
    <footer className="border-t border-indigo-500/10 py-10 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            Hecho con ☕ en Lima, Perú
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-slate-500 hover:text-indigo-400 transition text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-indigo-400 transition text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
