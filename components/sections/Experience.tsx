import React from 'react';
import PORTFOLIO_DATA from '../../data/portfolio.json';
import RevealOnScroll from '../ui/RevealOnScroll';

export const Experience: React.FC = () => {
    const renderExperienceCard = (job: any, isChild = false) => (
        <div
            className={`relative ${isChild
                ? 'mt-6 pl-6 border-l-2 border-border/50'
                : 'p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-[2rem] bg-surface/50 backdrop-blur-sm border border-border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 ml-10 md:ml-0'
                }`}
        >
            {!isChild && (
                <>
                    {/* Hover Glow Border Effect */}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-[2rem] border-2 border-transparent group-hover:border-accent/10 transition-colors duration-500 pointer-events-none" />

                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] rounded-xl sm:rounded-2xl md:rounded-[2rem] transition-colors duration-500 pointer-events-none" />
                </>
            )}

            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 sm:mb-5 md:mb-6 gap-2 relative z-10">
                <div>
                    <h3 className={`font-display font-bold text-primary group-hover:text-accent transition-colors duration-300 ${isChild ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl md:text-3xl'
                        }`}>
                        {job.company}
                    </h3>
                    <span className={`inline-block mt-1 sm:mt-2 font-medium text-accent uppercase tracking-wider ${isChild ? 'text-xs' : 'text-xs sm:text-sm'
                        }`}>
                        {job.position}
                    </span>
                </div>
                <div className="flex flex-col items-end">
                    <span className={`font-mono text-secondary block md:hidden ${isChild ? 'text-[10px]' : 'text-xs'}`}>
                        {job.period}
                    </span>
                    {isChild && (
                        <span className="hidden md:block font-mono text-xs text-secondary">
                            {job.period}
                        </span>
                    )}
                </div>
            </div>

            <p className={`text-secondary font-light leading-relaxed mb-4 sm:mb-5 md:mb-6 ${isChild ? 'text-sm' : 'text-sm sm:text-base md:text-lg'
                }`}>
                {job.description}
            </p>

            {job.children && (
                <div className="mt-6">
                    {job.children.map((child: any, idx: number) => (
                        <div key={idx}>
                            {renderExperienceCard(child, true)}
                        </div>
                    ))}
                </div>
            )}

            {!isChild && (
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            )}
        </div>
    );

    return (
        <section id="experience" className="pt-12 sm:pt-16 md:pt-20 pb-16 sm:pb-24 md:pb-32 container mx-auto px-4 sm:px-6 max-w-5xl relative">
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent opacity-[0.02] rounded-full blur-3xl -z-10" />

            <div className="mb-12 sm:mb-16 md:mb-20">
                <RevealOnScroll>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary mb-4 sm:mb-6">Experiencia</h2>
                    <p className="text-secondary text-sm sm:text-base md:text-lg lg:text-xl font-light max-w-2xl">
                        Una línea de tiempo de mi trayectoria profesional, construyendo el futuro de la web y medios interactivos.
                    </p>
                </RevealOnScroll>
            </div>

            <div className="relative pl-0 md:pl-0">
                {/* Mobile timeline line */}
                <div className="absolute left-4 top-4 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-border to-transparent md:hidden" />
                {/* Desktop timeline line */}
                <div className="absolute left-[140px] top-4 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-border to-transparent hidden md:block" />

                <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">
                    {PORTFOLIO_DATA.experience.map((job, idx) => {
                        const isPresent = job.period.toLowerCase().includes('presente');
                        const [start, end] = job.period.split(' - ');

                        return (
                            <RevealOnScroll key={idx} delay={idx * 100}>
                                <div
                                    className="group relative grid md:grid-cols-[140px_1fr] gap-4 sm:gap-6 md:gap-8 items-start"
                                >
                                    {/* Timeline Dot (Mobile) */}
                                    <div className="md:hidden absolute left-[11px] top-3">
                                        <div className={`w-3 h-3 rounded-full shadow-[0_0_0_4px_var(--bg-background)] z-10 transition-all duration-500 ease-out ${isPresent
                                            ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] scale-110'
                                            : 'bg-border'
                                            }`} />
                                    </div>

                                    {/* Timeline Dot (Desktop) */}
                                    <div className="hidden md:flex flex-col items-end pr-8 pt-2 relative text-right">
                                        <span className="font-mono text-sm text-secondary group-hover:text-primary transition-colors duration-300 block">
                                            {start}
                                        </span>
                                        <span className={`font-mono text-xs mt-1 transition-colors duration-300 block ${isPresent ? 'text-green-500 font-bold' : 'text-secondary/60'
                                            }`}>
                                            {end || 'Presente'}
                                        </span>
                                        <div className={`absolute right-[-4px] top-[10px] w-2 h-2 rounded-full shadow-[0_0_0_4px_var(--bg-background)] z-10 transition-all duration-500 ease-out ${isPresent
                                            ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] scale-110'
                                            : 'bg-border group-hover:bg-accent group-hover:scale-150 group-hover:shadow-[0_0_10px_var(--accent-color)]'
                                            }`} />
                                    </div>

                                    {/* Card */}
                                    {renderExperienceCard(job)}
                                </div>
                            </RevealOnScroll>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
