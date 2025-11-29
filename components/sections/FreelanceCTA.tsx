import React from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import { Icons } from '../ui/Icons';
import { MagneticButton } from '../ui/MagneticButton';

export const FreelanceCTA: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 md:py-20 container mx-auto px-4 sm:px-6 max-w-6xl mb-12 sm:mb-16 md:mb-24">
            <RevealOnScroll>
                <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-primary text-background p-6 sm:p-8 md:p-16 lg:p-24 text-center group transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.01] hover:shadow-2xl hover:shadow-primary/20">
                    {/* Shimmer Effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none" />
                    <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

                    <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-background/10 backdrop-blur-md border border-background/20 text-background">
                            <Icons.Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">Aceptando Nuevos Clientes</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold leading-tight max-w-4xl mx-auto">
                            ¿Necesitas una web de alto impacto para tu negocio?
                        </h2>

                        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light opacity-90 max-w-2xl mx-auto">
                            Trabajo en <strong>TuNuevoSoftware</strong> (TNS), un estudio dedicado a crear aplicaciones web rápidas y optimizadas para SEO.
                        </p>

                        <div className="pt-4 sm:pt-6 md:pt-8">
                            <MagneticButton
                                href="https://tunuevosoftware.com/"
                                className="bg-background text-primary hover:bg-background/90 border border-transparent hover:border-white/20"
                            >
                                Visitar Estudio TNS <Icons.ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
