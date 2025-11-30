import React, { useState, useEffect } from 'react';
import { Project } from '../../types';
import RevealOnScroll from '../ui/RevealOnScroll';
import { Icons } from './Icons';

interface StickyProjectCardProps {
    project: Project;
    index: number;
    onNavigate: (path: string) => void;
    customMargin?: string;
    pushUpHeight?: string;
}

export const StickyProjectCard: React.FC<StickyProjectCardProps> = ({ project, index, onNavigate, customMargin, pushUpHeight }) => {
    // Detectar móvil de forma reactiva
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Ajustar offset para móvil y desktop
    const topOffset = isMobile ? 80 + (index * 8) : 120 + (index * 10);

    const handleNavigate = (e: React.MouseEvent) => {
        e.preventDefault();
        onNavigate(`/proyecto/${project.id}`);
    };

    return (
        <div
            className="sticky w-full"
            style={{
                top: `${topOffset}px`,
                zIndex: index + 10,
                marginBottom: customMargin || '5vh',
                paddingBottom: pushUpHeight
            }}
        >
            <RevealOnScroll>
                <div
                    onClick={handleNavigate}
                    className={`group relative w-full max-w-6xl mx-auto bg-subtle rounded-2xl md:rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-center cursor-pointer hover:border-primary/30 hover:bg-surface hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.01] min-h-[480px] md:min-h-0`}
                >
                    {/* Ambient Noise Texture */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

                    {/* Subtle Monochrome Glow Orb */}
                    <div className={`absolute -top-[20%] -right-[10%] w-[60%] h-[150%] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                    {/* Default Subtle Orb (Inactive) */}
                    <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[150%] bg-gradient-to-b from-white/5 to-transparent rounded-full blur-[100px] pointer-events-none opacity-50 group-hover:opacity-0 transition-opacity duration-700" />

                    {/* Bottom Glow Line */}
                    <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700`} />

                    <div className="p-5 sm:p-6 md:p-12 lg:p-16 relative z-10 grid md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start">

                        {/* Left Column: Index & Meta */}
                        <div className="md:col-span-3 flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start h-full md:min-h-[200px] gap-4">
                            <div className="space-y-2 md:space-y-4">
                                <span className={`inline-block px-2.5 py-1 rounded-full border border-border bg-surface/50 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-secondary backdrop-blur-md transition-colors duration-500 group-hover:border-primary/20 group-hover:text-primary group-hover:bg-primary/5`}>
                                    {project.category}
                                </span>
                                <div className={`hidden md:block w-12 h-[1px] bg-border transition-colors duration-500 group-hover:bg-primary/50`} />
                            </div>
                            <span className={`font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-border/40 transition-colors duration-500 select-none leading-none md:mt-auto group-hover:text-primary/10`}>
                                0{index + 1}
                            </span>
                        </div>

                        {/* Right Column: Content */}
                        <div className="md:col-span-9 flex flex-col gap-4 sm:gap-6 md:gap-8">
                            <div className="min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col">
                                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary leading-[0.9] tracking-tight mb-3 sm:mb-4 md:mb-6 transition-colors duration-500">
                                    {project.title}
                                </h3>
                                <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-secondary font-light leading-relaxed max-w-3xl transition-colors duration-500 group-hover:text-primary/80 line-clamp-3">
                                    {project.description}
                                </p>
                            </div>

                            <div className="w-full h-[1px] bg-border/50 group-hover:bg-border/80 transition-colors" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-5 md:gap-6">
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {project.technologies.slice(0, 4).map(tech => (
                                        <span key={tech} className={`px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-secondary bg-surface/50 border border-border/50 rounded-lg transition-colors duration-500 group-hover:bg-background group-hover:text-primary group-hover:border-primary/20`}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    className="group/btn flex items-center gap-2 sm:gap-3 md:gap-4 text-primary font-medium pl-0 md:pl-6 py-2 relative"
                                >
                                    <span className="text-sm sm:text-base md:text-lg tracking-wide uppercase group-hover/btn:tracking-widest transition-all duration-300">Ver Proyecto</span>
                                    <span className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center bg-background transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-lg group-hover/btn:border-transparent group-hover/btn:bg-primary group-hover/btn:text-background group-hover/btn:scale-110 group-hover/btn:shadow-xl`}>
                                        <Icons.ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    );
};
