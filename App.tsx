
import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from './constants';
import { Icons } from './components/Icons';
import { Project } from './types';
import RevealOnScroll from './components/RevealOnScroll';

// --- Components ---

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'ghost';
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, href, onClick, className = '', variant = 'primary' }) => {
  const Component = href ? 'a' : 'button';
  const baseClasses = "relative group inline-flex items-center justify-center px-8 py-4 font-medium rounded-full overflow-hidden transition-all duration-300 active:scale-95 cursor-pointer select-none";

  const variants = {
    primary: "bg-accent text-background hover:shadow-[0_0_15px_-5px_var(--accent-color)] hover:scale-[1.02]",
    outline: "bg-transparent text-primary border border-border hover:bg-surface hover:border-primary/50",
    ghost: "bg-transparent text-secondary hover:text-primary hover:bg-subtle px-4 py-2"
  };

  return (
    <Component
      href={href}
      onClick={onClick}
      type={href ? undefined : "button"}
      target={href?.startsWith('http') ? '_blank' : undefined}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${variant === 'primary' ? 'bg-primary/20' : 'bg-primary/5'}`} />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  );
};

interface StickyProjectCardProps {
  project: Project;
  index: number;
  onNavigate: (path: string) => void;
  customMargin?: string;
  pushUpHeight?: string;
}

const StickyProjectCard: React.FC<StickyProjectCardProps> = ({ project, index, onNavigate, customMargin, pushUpHeight }) => {
  const topOffset = 120 + (index * 10);

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
          className={`group relative w-full max-w-6xl mx-auto bg-subtle rounded-2xl md:rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-center cursor-pointer hover:border-primary/30 hover:bg-surface hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:scale-[1.01]`}
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

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ items, reverse = false }) => {
  return (
    <div className="relative flex overflow-hidden py-4 md:py-6 group select-none">
      {/* Enhanced Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-black via-white/80 dark:via-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-black via-white/80 dark:via-black/80 to-transparent z-20 pointer-events-none" />

      <div className={`flex whitespace-nowrap gap-8 md:gap-12 animate-${reverse ? 'scroll-reverse' : 'scroll'} group-hover:[animation-play-state:paused] items-center`}>
        {/* Quadruple items to ensure smooth infinite scroll on wide screens */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={`${item}-${idx}`} className="flex items-center group/item cursor-default">
            <div className="relative">
              {/* Outlined Text (Visible by default) - Stroke Only */}
              <span
                className="text-4xl md:text-5xl font-display font-bold uppercase tracking-wider text-transparent transition-all duration-500 group-hover/item:opacity-0"
                style={{
                  WebkitTextStroke: '1px var(--text-secondary)',
                }}
              >
                {item}
              </span>

              {/* Filled Gradient Text (Visible on Hover) */}
              <span
                className="absolute inset-0 text-4xl md:text-5xl font-display font-bold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent bg-[length:200%_auto] animate-gradient opacity-0 group-hover/item:opacity-100 transition-all duration-500 transform scale-95 group-hover/item:scale-100 group-hover/item:blur-0 blur-sm"
              >
                {item}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Sections ---

const Hero: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
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

const SkillsMarquee: React.FC = () => {
  const frontEnd = PORTFOLIO_DATA.skills.find(s => s.category === 'Frontend')?.technologies || [];
  const backEnd = PORTFOLIO_DATA.skills.find(s => s.category === 'Backend')?.technologies || [];
  const tools = PORTFOLIO_DATA.skills.find(s => s.category.includes('Tools'))?.technologies || [];
  const game = PORTFOLIO_DATA.skills.find(s => s.category === 'Game Development')?.technologies || [];

  const set2 = [...backEnd, ...tools, ...game];

  return (
    <section className="py-2 overflow-hidden border-none bg-white dark:bg-black relative z-20">
      <Marquee items={frontEnd} />
      <Marquee items={set2} reverse />
    </section>
  );
};

const Manifesto: React.FC = () => {
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

const Work: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
  const totalProjects = PORTFOLIO_DATA.projects.length;
  // Calculate max stack index to determine spacer height logic
  const maxStackIndex = Math.min(totalProjects, 5);

  return (
    <section id="work" className="pt-12 sm:pt-16 md:pt-20 pb-[10vh] relative">
      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-24">
        <RevealOnScroll>
          <div className="flex items-end justify-between border-b border-border pb-4 sm:pb-6 md:pb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary">Proyectos</h2>
            <span className="text-secondary font-mono text-sm sm:text-base md:text-lg">
              ({totalProjects})
            </span>
          </div>
        </RevealOnScroll>
      </div>

      {/* All Projects in Uniform Sticky Stack */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {PORTFOLIO_DATA.projects.map((project, index) => {
          const isLast = index === totalProjects - 1;

          // Uniform margin logic:
          // All cards stack with a slight wait (10vh) for the previous one.
          // This creates a neat "Deck of Cards" effect.
          // Last card keeps the buffer positive to ensure it anchors correctly.
          // Mobile: 5vh, Desktop: 10vh
          const margin = window.innerWidth < 768 ? '5vh' : '10vh';

          // SYNCHRONIZATION LOGIC:
          const maxTop = 120 + 40; // Cap at 4 items deep for offset (index 4)
          const currentTop = 120 + Math.min(index, 4) * 10;
          const topDiff = maxTop - currentTop;

          // With uniform margins, the diff is simpler.
          const pushUpStyle = `calc(${topDiff}px)`;

          return (
            <StickyProjectCard
              key={project.id}
              project={project}
              index={index}
              onNavigate={onNavigate}
              customMargin={margin}
              pushUpHeight={pushUpStyle}
            />
          );
        })}

        {/* SPACER: Reduced height as exit is faster now */}
        <div className="h-[20vh] w-full pointer-events-none" />
      </div>
    </section>
  );
};

const Experience: React.FC = () => {
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
          {PORTFOLIO_DATA.experience.map((job, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100}>
              <div
                className="group relative grid md:grid-cols-[140px_1fr] gap-4 sm:gap-6 md:gap-8 items-start"
              >
                {/* Timeline Dot (Mobile) */}
                <div className="md:hidden absolute left-[11px] top-3">
                  <div className={`w-3 h-3 rounded-full shadow-[0_0_0_4px_var(--bg-background)] z-10 transition-all duration-500 ease-out ${job.period.includes('Presente')
                    ? 'bg-accent shadow-[0_0_10px_var(--accent-color)] scale-110'
                    : 'bg-border'
                    }`} />
                </div>

                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex justify-end pr-8 pt-2 relative">
                  <span className="font-mono text-sm text-secondary group-hover:text-primary transition-colors duration-300">
                    {job.period.split(' - ')[0]}
                  </span>
                  <div className={`absolute right-[-4px] top-[10px] w-2 h-2 rounded-full shadow-[0_0_0_4px_var(--bg-background)] z-10 transition-all duration-500 ease-out ${job.period.includes('Presente')
                    ? 'bg-accent shadow-[0_0_10px_var(--accent-color)] scale-110'
                    : 'bg-border group-hover:bg-accent group-hover:scale-150 group-hover:shadow-[0_0_10px_var(--accent-color)]'
                    }`} />
                </div>

                {/* Card */}
                <div className="relative p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-[2rem] bg-surface/50 backdrop-blur-sm border border-border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent/10 ml-10 md:ml-0">

                  {/* Hover Glow Border Effect */}
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-[2rem] border-2 border-transparent group-hover:border-accent/10 transition-colors duration-500 pointer-events-none" />

                  {/* Hover Glow Background */}
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] rounded-xl sm:rounded-2xl md:rounded-[2rem] transition-colors duration-500 pointer-events-none" />

                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 sm:mb-5 md:mb-6 gap-2 relative z-10">
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary group-hover:text-accent transition-colors duration-300">
                        {job.company}
                      </h3>
                      <span className="inline-block mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-accent uppercase tracking-wider">
                        {job.position}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-secondary block md:hidden">{job.period}</span>
                  </div>

                  <p className="text-secondary font-light leading-relaxed mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg">
                    {job.description}
                  </p>

                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-border to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

const FreelanceCTA: React.FC = () => {
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

const Dock: React.FC<{ theme: string; toggleTheme: () => void; activeSection: string; onNavigate: (path: string) => void }> = ({ theme, toggleTheme, activeSection, onNavigate }) => {
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
    { id: 'home', label: 'Inicio' },
    { id: 'work', label: 'Proyectos' },
    { id: 'experience', label: 'Experiencia' }
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
    <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 ml-0 sm:ml-8 md:ml-16 z-50 animate-fade-in max-w-[95vw]">
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
          return (
            <button
              key={item.id}
              ref={el => itemsRef.current[index] = el}
              onClick={() => scrollTo(item.id)}
              className={`relative z-10 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-colors duration-300 ${isActive
                ? 'text-background font-bold'
                : 'text-secondary hover:text-primary'
                }`}
            >
              {item.label}
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

const Footer: React.FC = () => (
  <footer className="py-20 text-center relative z-10 bg-background border-t border-border">
    <div className="container mx-auto px-6">
      <h2 className="text-[12vw] font-display font-bold text-primary/10 dark:text-primary/5 leading-none select-none pointer-events-none">
        ARKAITZ
      </h2>
      <div className="flex justify-center gap-8 mt-12">
        {[
          { icon: Icons.Github, link: PORTFOLIO_DATA.links.github },
          { icon: Icons.Linkedin, link: PORTFOLIO_DATA.links.linkedin },
          { icon: Icons.Gamepad, link: PORTFOLIO_DATA.links.itchio },
          { icon: Icons.Link, link: 'https://info.arkaitz.me/' }
        ].map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            className="group text-secondary hover:text-primary transition-all duration-300 p-4 border border-border rounded-full hover:border-primary hover:bg-subtle hover:-translate-y-1 hover:shadow-lg"
          >
            <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
          </a>
        ))}
      </div>
      <p className="mt-12 text-secondary text-sm">
        © {new Date().getFullYear()} Arkaitz L. Ningún derecho reservado.
      </p>
    </div>
  </footer>
);

// --- Pages ---

const RedirectPage: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Iniciando secuencia...");

  useEffect(() => {
    // Simulate complex loading/connection sequence
    const statuses = [
      "Conectando al servidor...",
      "Sincronizando calendarios...",
      "Estableciendo conexión segura...",
      "Accediendo a la agenda...",
      "Redirigiendo..."
    ];

    let currentStatusIdx = 0;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random progress increments for realism
        return Math.min(prev + Math.random() * 15, 100);
      });
    }, 200);

    const statusInterval = setInterval(() => {
      currentStatusIdx = (currentStatusIdx + 1) % statuses.length;
      if (currentStatusIdx < statuses.length) {
        setStatus(statuses[currentStatusIdx]);
      }
    }, 800);

    // Get booking link from JSON, fallback to masinfo if booking not present
    const targetUrl = PORTFOLIO_DATA.links.booking || PORTFOLIO_DATA.links.masinfo;

    const redirectTimer = setTimeout(() => {
      if (targetUrl) {
        window.location.href = targetUrl;
      }
    }, 3500); // Wait for animation

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden font-sans">
      {/* Warp Speed Effect */}
      <div className="absolute inset-0 perspective-[100px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] animate-[float_0.5s_linear_infinite]" style={{ transform: 'scale(10)' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-md px-6">
        {/* Magic Circle */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-white/10 rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-0 border-t-4 border-l-4 border-accent rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-r-4 border-b-4 border-white/50 rounded-full animate-spin direction-reverse duration-1000"></div>
        </div>

        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-display font-bold tracking-tight animate-pulse">
            ABRIENDO AGENDA
          </h1>
          <p className="font-mono text-sm text-white/50 h-6">
            {status}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden relative">
          <div
            className="h-full bg-white shadow-[0_0_15px_white] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="text-xs font-mono text-white/30">
          ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
        </div>
      </div>
    </div>
  );
};

const ProjectDetailPage: React.FC<{ projectId: number; onNavigate: (path: string) => void }> = ({ projectId, onNavigate }) => {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
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
      <div className={`container mx-auto px-6 relative z-20 -mt-32 transition-all duration-700 delay-200 ease-[cubic-bezier(0.25,1,0.5,1)] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <RevealOnScroll>
          <div className="bg-surface border border-border rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10" />

            <div className="flex flex-col md:flex-row gap-4 justify-between items-start mb-12">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent text-sm font-bold tracking-wider uppercase mb-4">
                  {project.category}
                </span>
                <h1 className="text-5xl md:text-8xl font-display font-bold text-primary leading-none mb-4">
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
                <h2 className="text-2xl font-bold mb-4 border-b border-border pb-4">Sobre el Proyecto</h2>
                <p className="text-xl text-secondary leading-relaxed">
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

const Portfolio: React.FC<{ theme: string; toggleTheme: () => void; activeSection: string; onNavigate: (path: string) => void; isTransitioning: boolean }> = ({ theme, toggleTheme, activeSection, onNavigate, isTransitioning }) => (
  <>
    <main className={`relative z-10 pb-32 transition-all duration-300 ease-out ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
      <Hero onNavigate={onNavigate} />
      <SkillsMarquee />
      <Manifesto />
      <Work onNavigate={onNavigate} />
      <Experience />
      <FreelanceCTA />
    </main>

    <Dock theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} onNavigate={onNavigate} />
    <Footer />
  </>
);

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
