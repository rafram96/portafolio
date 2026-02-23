"use client"

import { type ReactNode, useEffect } from "react"
import Lenis from "lenis"
import "lenis/dist/lenis.css"

type Props = { children: ReactNode }

export default function LenisProvider({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, anchors: true })
    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}
