"use client"

import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#problemas", label: "Problemas" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#proceso", label: "Proceso" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <nav className="bg-[#020617]/80 backdrop-blur-md border-b border-indigo-500/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#inicio" className="text-xl font-bold text-slate-100 tracking-tight">
          &lt;Dev/&gt;
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-slate-400 hover:text-indigo-400 transition text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden md:inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition"
        >
          Hablemos
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-300 hover:text-slate-100"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-indigo-500/10 bg-[#020617]/95 backdrop-blur-md px-4 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-400 hover:text-indigo-400 transition text-sm block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition inline-block mt-2"
              >
                Hablemos
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
