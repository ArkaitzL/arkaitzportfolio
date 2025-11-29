import React from 'react';
import PORTFOLIO_DATA from '../../data/portfolio.json';
import RevealOnScroll from '../ui/RevealOnScroll';
import { StickyProjectCard } from '../ui/StickyProjectCard';
import { Project } from '../../types';

export const Work: React.FC<{ onNavigate: (path: string) => void }> = ({ onNavigate }) => {
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
                            project={project as Project}
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
