# Portfolio de Arkaitz L.

Portfolio personal desarrollado con React, TypeScript y TailwindCSS.

## 📁 Estructura del Proyecto

```
arkaitzportfolio_v2/
├── components/
│   ├── ui/                    # Componentes de UI reutilizables
│   │   ├── Icons.tsx
│   │   ├── RevealOnScroll.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── StickyProjectCard.tsx
│   │   ├── Marquee.tsx
│   │   └── index.ts
│   ├── sections/              # Secciones de la página principal
│   │   ├── Hero.tsx
│   │   ├── SkillsMarquee.tsx
│   │   ├── Manifesto.tsx
│   │   ├── Work.tsx
│   │   ├── Experience.tsx
│   │   ├── FreelanceCTA.tsx
│   │   └── index.ts
│   └── layout/                # Componentes de layout
│       ├── Dock.tsx
│       ├── Footer.tsx
│       └── index.ts
├── pages/                     # Páginas de la aplicación
│   ├── Portfolio.tsx
│   ├── ProjectDetailPage.tsx
│   ├── RedirectPage.tsx
│   └── index.ts
├── data/
│   └── portfolio.json         # Datos del portfolio (única fuente de verdad)
├── types.ts                   # Definiciones de tipos TypeScript
├── App.tsx                    # Componente principal y router
└── index.css                  # Estilos globales

```

## 🚀 Características

- **Diseño Responsivo**: Optimizado para móvil, tablet y escritorio
- **Animaciones Fluidas**: Transiciones suaves y efectos visuales premium
- **Modo Oscuro/Claro**: Tema personalizable con persistencia
- **SEO Optimizado**: Meta tags y estructura semántica
- **Rendimiento**: Carga rápida y optimización de assets

## 🛠️ Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **TailwindCSS** - Framework de CSS
- **Vite** - Build tool y dev server

## 📦 Instalación

```bash
npm install
```

## 🏃‍♂️ Desarrollo

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 📝 Gestión de Contenido

Todo el contenido del portfolio se gestiona desde un único archivo JSON:

**`data/portfolio.json`**

Este archivo contiene:
- Información personal
- Enlaces sociales
- Skills y tecnologías
- Proyectos
- Experiencia laboral

Para actualizar el contenido, simplemente edita este archivo y los cambios se reflejarán automáticamente.

## 🎨 Personalización

### Colores y Temas

Los colores se definen en `index.css` usando variables CSS:

```css
:root {
  --bg-background: ...
  --text-primary: ...
  --accent-color: ...
}
```

### Componentes

Todos los componentes están organizados por tipo:

- **UI**: Componentes reutilizables básicos
- **Sections**: Secciones específicas de la página principal
- **Layout**: Componentes de estructura (header, footer, etc.)
- **Pages**: Páginas completas de la aplicación

## 📱 Navegación

El portfolio incluye un sistema de routing básico:

- `/` - Página principal
- `/proyecto/:id` - Detalle de proyecto
- `/reservas` - Redirección a calendario de reservas

## 🔧 Mantenimiento

### Agregar un nuevo proyecto

1. Abre `data/portfolio.json`
2. Agrega un nuevo objeto al array `projects`
3. Incluye todos los campos requeridos (id, title, description, etc.)

### Agregar una nueva sección

1. Crea el componente en `components/sections/`
2. Exportalo en `components/sections/index.ts`
3. Impórtalo y úsalo en `pages/Portfolio.tsx`

## 📄 Licencia

© 2025 Arkaitz L. Ningún derecho reservado.
