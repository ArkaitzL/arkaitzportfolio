import React, { useState } from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';
import { Icons } from '../ui/Icons';

export const Manifesto: React.FC = () => {
    const [activeItem, setActiveItem] = useState(0);

    const pillars = [
        {
            title: "Frontend",
            desc: "Experto en crear interfaces fluidas y reactivas utilizando React, Astro y TailwindCSS. Me enfoco en el rendimiento, la accesibilidad y las microinteracciones para elevar la experiencia de usuario.",
            gradient: "from-blue-500/20 to-purple-500/20"
        },
        {
            title: "Backend",
            desc: "Construcción de servidores sólidos y APIs escalables con Node.js, Java y bases de datos SQL. Arquitecturas seguras y eficientes para soportar aplicaciones complejas.",
            gradient: "from-emerald-500/20 to-cyan-500/20"
        },
        {
            title: "Game Developer",
            desc: "Pasión por el desarrollo de videojuegos interactivos en Unity y C#. Desde la programación de mecánicas y físicas hasta la optimización y publicación en múltiples plataformas.",
            gradient: "from-orange-500/20 to-red-500/20"
        }
    ];

    return (
        <section id="manifesto" className="py-16 sm:py-24 md:py-32 container mx-auto px-4 sm:px-6">
            <RevealOnScroll>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-8 sm:mb-12 md:mb-16 text-center">
                    Áreas de Desarrollo
                </h2>
            </RevealOnScroll>

            {/* Mobile/Tablet: Stacked Cards */}
            <div className="flex flex-col md:hidden gap-4">
                {pillars.map((pillar, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveItem(activeItem === index ? -1 : index)}
                        className={`relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer bg-surface border border-border ${activeItem === index ? 'min-h-[280px]' : 'min-h-[120px]'}`}
                    >
                        {/* Background Energy */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 transition-opacity duration-500 ${activeItem === index ? 'opacity-100' : ''}`} />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

                        {/* Content Container */}
                        <div className="relative p-6 flex flex-col justify-between h-full">
                            {/* Number */}
                            <span className="absolute top-4 right-4 text-4xl font-display font-bold text-primary/5 select-none">
                                0{index + 1}
                            </span>

                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-2">
                                    {pillar.title}
                                </h3>

                                <p className={`text-sm sm:text-base text-secondary leading-relaxed transition-all duration-500 ${activeItem === index ? 'opacity-100 max-h-96 mt-3' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                                    {pillar.desc}
                                </p>
                            </div>

                            {/* Expand indicator */}
                            <div className="flex justify-end mt-4">
                                <Icons.ChevronDown className={`w-5 h-5 text-secondary transition-transform duration-500 ${activeItem === index ? 'rotate-180' : ''}`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop: Horizontal Expandable Cards */}
            <div className="hidden md:flex flex-row h-[600px] gap-4">
                {pillars.map((pillar, index) => (
                    <div
                        key={index}
                        onMouseEnter={() => setActiveItem(index)}
                        className={`relative rounded-[2rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-default group ${activeItem === index ? 'flex-[3] bg-surface' : 'flex-[1] bg-subtle hover:bg-surface/80'
                            }`}
                    >
                        {/* Background Energy */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 transition-opacity duration-700 ${activeItem === index ? 'opacity-100' : 'group-hover:opacity-30'}`} />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />

                        {/* Content Container */}
                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                            {/* Number */}
                            <span className="absolute top-8 left-8 text-6xl md:text-8xl font-display font-bold text-primary/5 select-none">
                                0{index + 1}
                            </span>

                            <div className={`transition-all duration-500 ${activeItem === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-70'}`}>
                                {/* Title with rotation for inactive state */}
                                <h3 className={`text-2xl md:text-4xl font-bold text-primary mb-4 transition-all duration-500 ${activeItem !== index && '-rotate-90 origin-bottom-left absolute bottom-12 left-12 w-[400px] whitespace-nowrap'}`}>
                                    {pillar.title}
                                </h3>

                                <p className={`text-lg text-secondary leading-relaxed max-w-lg transition-all duration-500 delay-100 ${activeItem === index ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'
                                    }`}>
                                    {pillar.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
