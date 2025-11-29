import React, { useState, useEffect } from 'react';
import { Icons } from '../ui/Icons';

interface DockProps {
    theme: string;
    toggleTheme: () => void;
    activeSection: string;
    onNavigate: (path: string) => void;
}

export const Dock: React.FC<DockProps> = ({ theme, toggleTheme, activeSection, onNavigate }) => {
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const containerRef = React.useRef<HTMLDivElement>(null);
    const itemsRef = React.useRef<(HTMLButtonElement | null)[]>([]);

    const scrollTo = (id: string) => {
        // If not on homepage, go home first
        if (window.location.pathname !== '/') {
            onNavigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: id === 'home' ? 0 : offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const menuItems = [
        { id: 'home', label: 'Inicio', icon: Icons.Home },
        { id: 'work', label: 'Proyectos', icon: Icons.Monitor },
        { id: 'experience', label: 'Experiencia', icon: Icons.Briefcase }
    ];

    // Map 'manifesto' (Áreas de Desarrollo) to 'home' for the active state
    const activeId = (activeSection === 'manifesto' || activeSection === 'home') ? 'home' : activeSection;

    useEffect(() => {
        const activeIndex = menuItems.findIndex(item => item.id === activeId);
        const el = itemsRef.current[activeIndex];
        const container = containerRef.current;

        if (el && container && window.location.pathname === '/') {
            const containerRect = container.getBoundingClientRect();
            const elRect = el.getBoundingClientRect();

            setIndicatorStyle({
                left: elRect.left - containerRect.left,
                width: elRect.width,
                opacity: 1
            });
        } else {
            setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
        }
    }, [activeId, window.location.pathname]);

    return (
        <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 inset-x-0 mx-auto w-fit z-50 animate-fade-in max-w-[95vw]">
            <div
                ref={containerRef}
                className="relative flex items-center gap-0.5 sm:gap-1 md:gap-2 p-1.5 sm:p-2 bg-surface/70 dark:bg-[#0a0a0a]/70 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-full shadow-2xl shadow-black/20 ring-1 ring-white/20 dark:ring-white/5"
            >
                {/* Sliding Active Indicator */}
                <div
                    className="absolute top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 bg-primary rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-md"
                    style={{
                        left: indicatorStyle.left,
                        width: indicatorStyle.width,
                        opacity: indicatorStyle.opacity
                    }}
                />

                {menuItems.map((item, index) => {
                    const isActive = activeId === item.id && window.location.pathname === '/';
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            ref={el => itemsRef.current[index] = el}
                            onClick={() => scrollTo(item.id)}
                            className={`relative z-10 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full transition-colors duration-300 flex items-center gap-2 ${isActive
                                ? 'text-background font-bold'
                                : 'text-secondary hover:text-primary'
                                }`}
                        >
                            <span className="md:hidden">
                                <Icon className="w-5 h-5" />
                            </span>
                            <span className="hidden md:block text-sm font-medium">
                                {item.label}
                            </span>
                        </button>
                    );
                })}

                <div className="w-[1px] h-4 sm:h-5 md:h-6 bg-border/50 mx-0.5 sm:mx-1 md:mx-2 relative z-10" />

                <button
                    onClick={toggleTheme}
                    className="relative z-10 p-2 sm:p-2.5 md:p-3 rounded-full text-secondary hover:text-primary hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 active:rotate-12"
                    title={theme === 'dark' ? 'Cambiar a Modo Claro' : 'Cambiar a Modo Oscuro'}
                >
                    {theme === 'dark' ? <Icons.Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Icons.Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                </button>

                <button
                    onClick={() => onNavigate('/reservas')}
                    className="relative z-10 p-2 sm:p-2.5 md:p-3 rounded-full bg-primary text-background hover:scale-110 active:scale-95 transition-all duration-300 ml-0.5 sm:ml-1 hover:shadow-[0_0_15px_-3px_var(--accent-color)]"
                    title="Contáctame"
                >
                    <Icons.Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
            </div>
        </div>
    );
};
