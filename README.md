# Portafolio — Rafael Ramos

Portfolio personal de un desarrollador freelance peruano especializado en automatización de procesos, desarrollo web y soluciones con inteligencia artificial para pymes y emprendedores.

---

## Estructura del proyecto (`app/`)

```
app/
├── globals.css         # Estilos globales, animaciones y clases utilitarias
├── layout.tsx          # Layout raíz: fuentes, metadata, fondo estrellado, Lenis
├── page.tsx            # Composición de secciones (orden de aparición en la página)
└── sections/
    ├── Hero.tsx        # Pantalla inicial fullscreen con carrusel de fondos
    ├── PainPoints.tsx  # Problemas comunes del cliente objetivo
    ├── Services.tsx    # Servicios ofrecidos (4 categorías)
    ├── Projects.tsx    # Proyectos reales con problema / solución / resultado
    ├── HowIWork.tsx    # Proceso de trabajo en 4 pasos
    ├── TechStack.tsx   # Stack tecnológico
    └── CTA.tsx         # Llamada a la acción final con contacto directo
```

---

## Secciones — Contenido y Display

### 1. `Hero.tsx` — `#inicio`
**Ocupa:** 100% del viewport (fullscreen)

**Contenido:**
- Eyebrow en mayúsculas: `DESARROLLADOR & AUTOMATIZADOR`
- H1: *"Especialista en automatización, desarrollo web y soluciones con IA"*
- Subtítulo párrafo de 2 líneas describiendo el enfoque sin tecnicismos
- Dos CTAs: botón blanco sólido ("Ver proyectos →") y enlace ghost ("Hablemos")
- Línea pequeña al pie: *"¿Necesitas algo enterprise? Conversemos →"*
- Navbar transparente absoluta superpuesta (logo "Rafael Ramos" + 3 enlaces)

**Display:**
- Fondo: carrusel automático de 9 imágenes (de `public/bgs/bg1.jpg` a `bg10.jpg`, omitiendo `bg4.jpg`) con transición crossfade de 2.8 segundos (`cubic-bezier(0.4, 0, 0.15, 1)`)
- Cada imagen activa ejecuta animación **Ken Burns** (zoom out: `scale(1.1) → scale(1.0)` en 12s en desktop, `scale(1.18) → scale(1.0)` en móvil) con pan diagonal
- El contenedor de imágenes tiene efecto **parallax** — se desplaza a un 35% de la velocidad del scroll (`scrollY × 0.35px`)
- Overlay con gradiente vertical de negro semitransparente que se funde con el fondo oscuro del sitio en la parte inferior
- Todo el contenido textual se posiciona con `position: absolute` en el sector inferior-izquierdo
- En móvil: el parallax se desactiva y el Ken Burns usa valores más suaves

---

### 2. `PainPoints.tsx` — `#problemas`
**Ocupa:** Sección estándar con `padding-y: 7rem`

**Contenido:**
- Título: *"¿Te identificas con alguno de estos?"*
- 3 tarjetas con puntos de dolor del cliente objetivo:
  - ⏱ `"Mis empleados hacen lo mismo a mano todos los días y nunca termina"`
  - 📂 `"Tenemos todo en Excel y Word pero nada está conectado ni ordenado"`
  - 🌐 `"No tenemos presencia digital y perdemos clientes ante competidores más modernos"`
- Cierre en índigo: *"Si dijiste sí a alguna — podemos trabajar juntos."*

**Display:**
- Grid de 3 columnas en desktop, 1 columna en móvil
- Cada tarjeta usa la clase `.card`: fondo `#0f172a`, borde índigo sutil `rgba(99,102,241,0.15)`, hover glow índigo
- Texto de cada tarjeta entre comillas tipográficas (`&ldquo;` / `&rdquo;`)

---

### 3. `Services.tsx` — `#servicios`
**Ocupa:** Sección estándar con `padding-y: 7rem` y fondo con gradiente que integra `rgba(15,23,42,0.35)` en el centro, fundiendo con las secciones adyacentes

**Contenido:**
- Título: *"Qué puedo hacer por tu negocio"*
- Subtítulo: *"Soluciones concretas para problemas reales"*
- 4 tarjetas de servicios:
  - 🔧 **Automatización de Procesos** — generación de documentos, firma digital masiva, flujos entre herramientas
  - 🌐 **Páginas Web & Ecommerce** — landing pages, tiendas online, sistemas de reservas
  - 🤖 **Integración de IA** — chatbots, asistentes en WhatsApp, procesamiento de documentos con IA
  - ⚙️ **Apps Web a Medida** — dashboards internos, sistemas de gestión, reemplazos de Excel

**Display:**
- Grid 2×2 en desktop, 1 columna en móvil
- Cada tarjeta muestra: ícono emoji grande → título → descripción corta → lista de 3 casos de uso con flechas índigo (`→`)

---

### 4. `Projects.tsx` — `#proyectos`
**Ocupa:** Sección estándar con `padding-y: 7rem`

**Contenido:**
- Título: *"Proyectos reales, resultados concretos"*
- Subtítulo: *"No vendo promesas — muestro lo que ya construí."*
- 3 proyectos reales:

  **① Alpamayo Engine — Firma Masiva de Expedientes Técnicos**
  - Badge: 🔧 Automatización (amber)
  - Problema: equipo de arquitectos firmando 300 archivos manualmente en días
  - Solución: app de escritorio en Python que convierte Word/Excel a PDF y estampa firmas digitales automáticamente
  - Resultado: *"8 horas → 20 minutos. Procesa 500+ archivos por ejecución."*
  - Stack: Python, PyQt, PDF Automation, COM Automation, SQLite

  **② Tienda Digital — Ecommerce Serverless para Negocio Local**
  - Badge: 🌐 Web & Ecommerce (índigo)
  - Problema: tienda de artesanías limeña sin presencia online, sin presupuesto para servidores
  - Solución: ecommerce con Next.js + Vercel sin costo mensual, carrito y pasarela de pago integrada
  - Resultado: *"40% más ventas en el primer mes sin inversión recurrente en infraestructura."*
  - Stack: Next.js, Vercel, Stripe, Tailwind CSS

  **③ Asistente IA — Atención al Cliente Automatizada 24/7**
  - Badge: 🤖 IA (purple)
  - Problema: notaría con cientos de consultas repetitivas en WhatsApp
  - Solución: chatbot con LLM local (Ollama) conectado a WhatsApp vía n8n
  - Resultado: *"70% menos consultas manuales."*
  - Stack: Ollama, n8n, Python, FastAPI, WhatsApp API

**Display:**
- Cards apiladas en columna (full-width), una por proyecto
- Dentro de cada card: badge coloreado → título → grid de 3 columnas (Problema / Solución / Resultado), cada columna con etiqueta en uppercase gris y texto en tonos distintos (gris italic / blanco / índigo claro)
- Stack debajo como badges monoespacio gris oscuro

---

### 5. `HowIWork.tsx` — `#proceso`
**Ocupa:** Sección estándar con `padding-y: 7rem` y mismo gradiente de fondo que `Services`

**Contenido:**
- Título: *"Un proceso diseñado para tu tranquilidad"*
- Subtítulo: *"Así es como trabajo en cada proyecto"*
- 4 pasos:
  - 01 💬 **Diagnóstico** — Escucha de necesidades y análisis del proceso actual
  - 02 📋 **Estrategia** — Propuesta con inversión clara y plazos definidos
  - 03 🔨 **Desarrollo** — Construcción por etapas con avances constantes
  - 04 🚀 **Puesta en marcha** — Lanzamiento con acompañamiento y capacitación

**Display:**
- Grid de 4 columnas en desktop, 1 columna en móvil
- Línea conector horizontal entre los pasos (visible solo en desktop): gradiente `transparent → índigo/30 → transparent`
- Cada paso: círculo con borde índigo sutil conteniendo el ícono → etiqueta "Paso 01" en índigo uppercase → título → descripción

---

### 6. `TechStack.tsx` — `#stack`
**Ocupa:** Sección estándar con `padding-y: 7rem`

**Contenido:**
- Título: *"Las herramientas que uso"*
- Subtítulo: *"Tecnologías probadas para soluciones confiables"*
- 9 tecnologías:
  - Python — Automatización y backend
  - JavaScript / TypeScript — Frontend y fullstack
  - React / Next.js — Apps web modernas
  - FastAPI — APIs rápidas y robustas
  - SQL — Bases de datos relacionales
  - Docker — Contenedores y despliegue
  - AWS — Infraestructura en la nube
  - Ollama / LLMs — IA local y modelos de lenguaje
  - n8n — Automatización de flujos

**Display:**
- Grid de 3 columnas (2 en móvil), centrado con `max-w-3xl`
- Cada celda: fondo `slate-900/60`, borde índigo muy sutil, hover que ilumina el nombre a índigo
- Nombre en fuente monoespaciada (`font-mono`) + descripción pequeña gris debajo

---

### 7. `CTA.tsx` — `#contacto`
**Ocupa:** Sección estándar con `padding-y: 7rem`

**Contenido:**
- Título: *"Hablemos de tu próximo proyecto"*
- Párrafo: *"Trabajo con empresas que buscan optimizar sus procesos y con personas que quieren llevar una idea al mundo digital. La primera consulta es sin costo y sin compromiso."*
- 2 botones de contacto:
  - WhatsApp: `https://wa.me/51957673645` (botón índigo sólido)
  - Email: `holbiru@gmail.com` (botón ghost con borde)
- Email visible debajo de los botones
- Indicador de disponibilidad: punto verde pulsante + *"Respondo en menos de 24 horas"*

**Display:**
- Contenido centrado con `max-w-3xl mx-auto text-center`
- Gradiente de fondo que parte de `transparent` arriba y va a `#020617` abajo, con el tinte índigo-950 creciendo en el centro — creando la transición desde la sección anterior
- Los 2 botones se apilan en columna en móvil y van en fila en desktop

---

## Diseño global (`globals.css` + `layout.tsx`)

### Paleta
| Rol               | Color                     |
|-------------------|---------------------------|
| Fondo de página   | `#020617` (slate-950)     |
| Fondo de tarjetas | `#0f172a` (slate-900)     |
| Acento principal  | `#6366f1` (indigo-500)    |
| Acento hover      | `#818cf8` (indigo-400)    |
| Acento cálido     | `#f59e0b` (amber-400)     |
| Texto principal   | `#f1f5f9` (slate-100)     |
| Texto secundario  | `#94a3b8` (slate-400)     |

### Fuentes
- **Cuerpo y UI:** Geist Sans (variable CSS `--font-geist-sans`)
- **Badges técnicos:** Geist Mono (`font-mono`)

### Elementos decorativos globales (fijos en pantalla)
Están en `layout.tsx` y son `position: fixed`, visibles solo en las secciones debajo del hero:
- **`.stars-bg`** — campo estelar creado con `radial-gradient` repetidos (dos capas con animaciones `twinkle` y `twinkle-delay` de 4–5s para centelleo)
- **`.moon-bg`** — luna decorativa en esquina superior derecha, gradiente gris con cráteres vía pseudo-elemento, animación `float` de 6s
- **`.space-cat`** — gatito astronauta 🐱 sobre la luna, en esfera semitransparente con borde brillante, misma animación `float` con 0.4s de desfase. Oculto en móvil

### Transiciones entre secciones
Las secciones con fondo diferente (`Services`, `HowIWork`, `CTA`) usan un gradiente CSS directamente en su `background` que parte de `transparent` en los extremos, evitando bordes abruptos con las secciones adyacentes de fondo `#020617`.

### Scroll
Gestionado por **Lenis** (`components/LenisProvider.tsx`), configurado con `autoRaf: true` y soporte de anclas (`anchors: true`). El `scroll-behavior` nativo está en `auto` para ceder el control a Lenis.

---

## Orden de secciones en `page.tsx`

```
<Hero />          → #inicio
<PainPoints />    → #problemas
<Services />      → #servicios
<Projects />      → #proyectos
<HowIWork />      → #proceso
<TechStack />     → #stack
<CTA />           → #contacto
<Footer />        → (no tiene id)
```
