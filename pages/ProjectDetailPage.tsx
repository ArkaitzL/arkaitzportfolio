import React, { useState, useEffect } from 'react';
import PORTFOLIO_DATA from '../data/portfolio.json';
import { Project } from '../types';
import { Icons } from '../components/ui/Icons';
import { MagneticButton } from '../components/ui/MagneticButton';
import RevealOnScroll from '../components/ui/RevealOnScroll';

interface ProjectDetailPageProps {
    projectId: number;
    onNavigate: (path: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectId, onNavigate }) => {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId) as Project | undefined;
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        // Activar la animación de entrada después de un pequeño delay
        const timer = setTimeout(() => setIsLoaded(true), 50);
        return () => clearTimeout(timer);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-background text-primary">
                <h1 className="text-2xl font-bold mb-4">Proyecto no encontrado</h1>
                <MagneticButton onClick={() => onNavigate('/')}>Volver al Inicio</MagneticButton>
            </div>
        );
    }

    return (
        <div className={`min-h-screen bg-background text-primary pb-32 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-grain" />

            {/* Navigation */}
            <div className={`fixed top-0 left-0 right-0 p-6 md:p-10 z-50 pointer-events-none transition-all duration-500 delay-100 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
                <div className="flex justify-between items-center pointer-events-auto">
                    <button
                        type="button"
                        onClick={() => onNavigate('/')}
                        className="group relative flex items-center gap-2.5 px-5 py-3 rounded-full transition-all duration-300 bg-black dark:bg-white text-white dark:text-black font-medium hover:gap-3.5 hover:px-6 active:scale-95 shadow-lg hover:shadow-xl overflow-hidden"
                    >
                        {/* Subtle hover gradient effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-black/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

                        <Icons.ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5 relative z-10" />
                        <span className="text-sm tracking-wide relative z-10">Volver</span>
                    </button>
                </div>
            </div>

            {/* Hero Image */}
            <div className={`relative w-full h-[60vh] md:h-[70vh] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Content Container */}
            <div className={`container mx-auto px-3 md:px-6 relative z-20 -mt-20 md:-mt-32 transition-all duration-700 delay-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <RevealOnScroll>
                    <div className="bg-surface border border-border rounded-3xl md:rounded-[2.5rem] p-5 md:p-16 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10" />

                        <div className="flex flex-col md:flex-row gap-4 justify-between items-start mb-8 md:mb-12">
                            <div>
                                <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs md:text-sm font-bold tracking-wider uppercase mb-3 md:mb-4">
                                    {project.category}
                                </span>
                                <h1 className="text-3xl sm:text-4xl md:text-8xl font-display font-bold text-primary leading-none mb-4">
                                    {project.title}
                                </h1>
                            </div>

                            <div className="flex gap-4 mt-4 md:mt-0">
                                {project.demoUrl && (
                                    <MagneticButton href={project.demoUrl} className="px-6 py-3">
                                        Visitar Sitio <Icons.ArrowUpRight className="w-4 h-4" />
                                    </MagneticButton>
                                )}
                                {project.githubUrl && (
                                    <MagneticButton href={project.githubUrl} variant="outline" className="px-6 py-3">
                                        <Icons.Github className="w-5 h-5" />
                                    </MagneticButton>
                                )}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-16">
                            <div className="md:col-span-2 space-y-8">
                                <h2 className="text-xl md:text-2xl font-bold mb-4 border-b border-border pb-4">Sobre el Proyecto</h2>
                                <p className="text-base md:text-xl text-secondary leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="space-y-6 pt-8">
                                    <h3 className="text-lg font-bold">Características Clave</h3>
                                    <ul className="space-y-4">
                                        {project.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-4 text-secondary">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                                <span className="leading-relaxed">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4">Tecnologías</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="px-3 py-1.5 text-sm bg-subtle border border-border rounded-md text-primary/80">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {project.category === 'web' && (
                                    <div className="p-6 bg-subtle rounded-xl border border-border">
                                        <Icons.Monitor className="w-8 h-8 text-accent mb-4" />
                                        <h4 className="font-bold mb-2">Desarrollo Web</h4>
                                        <p className="text-sm text-secondary">
                                            Optimizado para SEO, accesibilidad y rendimiento en todos los dispositivos.
                                        </p>
                                    </div>
                                )}

                                {project.category === 'game' && (
                                    <div className="p-6 bg-subtle rounded-xl border border-border">
                                        <Icons.Gamepad className="w-8 h-8 text-accent mb-4" />
                                        <h4 className="font-bold mb-2">Desarrollo de Juegos</h4>
                                        <p className="text-sm text-secondary">
                                            Experiencias inmersivas con mecánicas pulidas y rendimiento gráfico optimizado.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
};
