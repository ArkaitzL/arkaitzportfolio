import React, { useState, useEffect } from 'react';
import { Portfolio } from './pages/Portfolio';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { RedirectPage } from './pages/RedirectPage';

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  const [activeSection, setActiveSection] = useState('home');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollPositionRef = React.useRef<number>(0);

  // Router helper
  const navigate = (path: string) => {
    try {
      // Guardar la posición del scroll actual antes de navegar
      if (currentPath === '/' && path.startsWith('/proyecto/')) {
        scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
      }

      // Iniciar transición de salida
      setIsTransitioning(true);

      // Esperar a que termine la animación de salida antes de cambiar la ruta
      setTimeout(() => {
        window.history.pushState({}, '', path);
        setCurrentPath(path);

        // Si volvemos a la página principal, restaurar el scroll
        if (path === '/' && scrollPositionRef.current > 0) {
          // Esperar a que el DOM se actualice
          setTimeout(() => {
            window.scrollTo({
              top: scrollPositionRef.current,
              behavior: 'instant' as ScrollBehavior
            });
            scrollPositionRef.current = 0;
            setIsTransitioning(false);
          }, 50);
        } else {
          // Para otras navegaciones, scroll al inicio
          window.scrollTo(0, 0);
          setTimeout(() => setIsTransitioning(false), 50);
        }
      }, 300); // Duración de la animación de salida
    } catch (e) {
      console.error("Navigation error:", e);
      setIsTransitioning(false);
    }
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Use getBoundingClientRect to find the section currently in the middle of the viewport
      const sectionIds = ['home', 'manifesto', 'work', 'experience'];
      const viewportMiddle = window.innerHeight / 2;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section covers the middle of the screen
          if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Basic Routing Logic
  if (currentPath === '/reservas') {
    return <RedirectPage />;
  }

  if (currentPath.startsWith('/proyecto/')) {
    const parts = currentPath.split('/');
    const idStr = parts[2];
    const projectId = parseInt(idStr, 10);

    if (!isNaN(projectId)) {
      return (
        <div className="bg-background min-h-screen text-primary font-sans transition-colors duration-500">
          <ProjectDetailPage projectId={projectId} onNavigate={navigate} />
        </div>
      );
    }
  }

  return (
    <div className="bg-background min-h-screen text-primary font-sans transition-colors duration-500">
      <div className="bg-grain" />
      <Portfolio theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} onNavigate={navigate} isTransitioning={isTransitioning} />
    </div>
  );
}
