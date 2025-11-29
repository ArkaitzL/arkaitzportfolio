import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  "personal": {
    "name": "Arkaitz L.",
    "title": "Full Stack Developer",
    "subtitle": "Especializado en tecnologías web y creación de videojuegos",
    "description": "Soy un programador apasionado por la tecnología y el desarrollo de software. He trabajado en varias empresas como desarrollador y también he llevado a cabo proyectos propios, incluyendo una empresa de creación de videojuegos y el desarrollo de páginas web como freelancer.",
    "email": "leonarkaitz@gmail.com",
    "location": "Gernika",
    "avatar": "/perfil.jpeg"
  },
  "links": {
    "github": "https://github.com/arkaitzl",
    "linkedin": "https://www.linkedin.com/in/arkaitz-l-3a834926a/",
    "email": "mailto:leonarkaitz@gmail.com",
    "malt": "https://www.malt.es/profile/arkaitzl",
    "itchio": "https://baboongamesoficial.itch.io/",
    "masinfo": "https://info.arkaitz.me",
    "booking": "https://cal.com/arkaitzl"
  },
  "skills": [
    {
      "category": "Frontend",
      "technologies": [
        "HTML", "CSS", "JavaScript", "JAMstack", "Astro",
        "Vite", "Tailwind", "Vue", "React", "AngularJS", "Bootstrap"
      ]
    },
    {
      "category": "Backend",
      "technologies": [
        "PHP", "Java", "C#", "Kotlin",
        "Node.js", "Laravel", ".Net",
        "SQL", "FireBase",
        "Postman"
      ]
    },
    {
      "category": "Game Development",
      "technologies": [
        "Unity", "Godot", "Blender"
      ]
    },
    {
      "category": "Tools & Others",
      "technologies": [
        "Git", "GitHub", "Fork", "Sonar", "JUnit", "Docker",
        "Seo tecnico"
      ]
    }
  ],
 "projects": [
    {
      "id": 1,
      "title": "HEARINIT",
      "description": "Plataforma que conecta audiólogos con pacientes. Diseño completo, optimización SEO y CMS integrado.",
      "image": "/proyectos/hearinit.png",
      "technologies": ["Astro", "TailwindCSS", "TypeScript", "CMS", "SEO"],
      "category": "web",
      "featured": true,
      "demoUrl": "https://hearinit.com",
      "githubUrl": "",
      "details": [
        "Diseño centrado en la facilidad de uso",
        "Rendimiento optimizado (PageSpeed 90+)",
        "CMS integrado",
        "Foro de comunidad"
      ]
    },
    {
      "id": 2,
      "title": "PixelNow",
      "description": "Herramienta web para crear pixel art de manera simple y rápida sin complicaciones.",
      "image": "/proyectos/pixelnow.png",
      "technologies": ["React", "TypeScript"],
      "category": "web",
      "featured": false,
      "demoUrl": "https://pixelnow.arkaitz.me",
      "githubUrl": "",
      "details": [
        "Dibujo instantáneo",
        "Interfaz intuitiva",
        "Exportación sencilla"
      ]
    },
    {
      "id": 3,
      "title": "BaboonLite",
      "description": "Librería para Unity que acelera el desarrollo de juegos y prototipos.",
      "image": "/proyectos/baboon-lite.png",
      "technologies": ["Unity", "C#"],
      "category": "game",
      "featured": false,
      "demoUrl": "https://satisfying-cadet-e91.notion.site/BaboOnLite-c6252ac92bbc4f8ea231b1276008c13a",
      "githubUrl": "https://github.com/ArkaitzL/BaboonLite-1",
      "details": [
        "Sistema de guardado",
        "Singletons automáticos",
        "Soporte multidioma"
      ]
    },
    {
      "id": 4,
      "title": "Paint Together",
      "description": "Lienzo colaborativo en tiempo real con autenticación de usuarios.",
      "image": "/proyectos/paint-together.png",
      "technologies": ["React", "TypeScript", "Supabase"],
      "category": "web",
      "featured": false,
      "demoUrl": "https://paint-together.arkaitz.me/",
      "githubUrl": "",
      "details": [
        "Dibujo colaborativo real-time",
        "Gestión de proyectos en nube"
      ]
    },
    {
      "id": 5,
      "title": "WorkFlow",
      "description": "Tracker de productividad minimalista para gestión de tiempo por tareas.",
      "image": "/proyectos/workflow.png",
      "technologies": ["React", "TypeScript", "TailwindCSS"],
      "category": "web",
      "featured": false,
      "demoUrl": "https://workflow.arkaitz.me",
      "githubUrl": "",
      "details": [
        "Diseño minimalista",
        "Cronómetro integrado",
        "Estadísticas simples"
      ]
    },
    {
      "id": 6,
      "title": "TuNuevaWeb",
      "description": "Servicio de creación de landing pages rápidas y optimizadas para negocios.",
      "image": "/proyectos/tnw.png",
      "technologies": ["Astro", "TailwindCSS", "SEO"],
      "category": "web",
      "featured": false,
      "demoUrl": "https://tunuevaweb.es",
      "githubUrl": "",
      "details": [
        "Desarrollo express",
        "SEO On-page",
        "Responsive total"
      ]
    },
    {
      "id": 7,
      "title": "Temple of Clouds",
      "description": "Plataformas 3D con mecánicas de vuelo y exploración en entornos aéreos.",
      "image": "/proyectos/temple-of-clouds.jpg",
      "technologies": ["Unity", "C#", "3D Modeling"],
      "category": "game",
      "featured": false,
      "demoUrl": "https://baboon-games-studios.itch.io/temple-of-clouds",
      "githubUrl": "https://github.com/baboongames-arkaitz/temple-of-clouds",
      "details": [
        "Físicas personalizadas",
        "Diseño de niveles vertical"
      ]
    },
    {
      "id": 8,
      "title": "SecurePass Generator",
      "description": "Generador de contraseñas robustas con opciones de seguridad avanzadas.",
      "image": "/proyectos/generador.png",
      "technologies": ["React", "TypeScript", "TailwindCSS"],
      "category": "web",
      "featured": false,
      "demoUrl": "https://securepass.arkaitz.me",
      "githubUrl": "",
      "details": [
        "Criptográficamente seguro",
        "Personalizable",
        "Copia rápida"
      ]
    }
  ],
  "experience": [
    {
      "company": "Hearinit [Freelance]",
      "position": "Desarrollador web",
      "period": "11/2024 - Presente",
      "description": "Desarrollo completo de plataforma web. Arquitectura, frontend, backend ligero y SEO técnico."
    },
    {
      "company": "Moddo [Freelance]",
      "position": "Desarrollador multiplataforma",
      "period": "11/2024 - 02/2025",
      "description": "Optimización de gestión de almacenes. Mejora de UI/UX en aplicación multiplataforma."
    },
    {
      "company": "Freelance",
      "position": "Desarrollador Web Senior",
      "period": "08/2024 - 11/2024",
      "description": "Sitios web de alto impacto para PYMES. Integración de herramientas de marketing y analítica."
    },
    {
      "company": "Ayesa",
      "position": "Desarrollador de Software",
      "period": "02/2024 - 08/2024",
      "description": "Desarrollo Enterprise con Spring Boot y Angular. Calidad de código y pruebas unitarias."
    },
    {
      "company": "Ludus Global",
      "position": "Desarrollador VR",
      "period": "02/2023 - 08/2023",
      "description": "Simulaciones de realidad virtual (VR) industriales usando Unity y C#."
    },
    {
      "company": "Proyectos Personales",
      "position": "Indie Game Dev",
      "period": "2023 - Presente",
      "description": "Desarrollo completo de videojuegos (Mobile/PC). Diseño, programación y publicación."
    }
  ]
};