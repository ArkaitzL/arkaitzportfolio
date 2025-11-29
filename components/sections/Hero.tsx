import React from 'react';
import PORTFOLIO_DATA from '../../data/portfolio.json';
import { Icons } from '../ui/Icons';
import { MagneticButton } from '../ui/MagneticButton';

export const Hero: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 relative pt-16 sm:pt-20">
            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="space-y-1 sm:space-y-2 mb-6 sm:mb-8 animate-fade-in">
                    <h2 className="text-sm sm:text-lg md:text-2xl text-secondary font-light tracking-wide flex items-center gap-2 sm:gap-3">
                        <span className="w-6 sm:w-10 h-[1px] bg-secondary"></span>
                        {PORTFOLIO_DATA.personal.name}
                    </h2>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-tighter text-primary leading-[0.9]">
                        DESARROLLADOR<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary animate-pulse-glow">FULL STACK</span>
                    </h1>
                </div>

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
                    <div className="md:col-span-2">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary leading-relaxed font-light">
                            Creando experiencias digitales enfocadas en movimiento, estética y rendimiento.
                        </p>
                    </div>
                    <div className="flex flex-col justify-end items-start gap-3 sm:gap-4">
                        <p className="text-xs sm:text-sm text-secondary uppercase tracking-widest flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Disponible para trabajar
                        </p>
                        <MagneticButton onClick={() => onNavigate('/reservas')}>
                            Hablemos <Icons.ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </MagneticButton>
                    </div>
                </div>
            </div>

            {/* Animated Hero Blob */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[50vw] sm:w-[40vw] h-[50vw] sm:h-[40vw] bg-accent opacity-[0.03] rounded-full blur-3xl pointer-events-none animate-float" />

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
                <span className="text-[10px] uppercase tracking-widest text-secondary">Scroll</span>
                <Icons.ChevronDown className="w-4 h-4 text-secondary" />
            </div>
        </section>
    );
};
