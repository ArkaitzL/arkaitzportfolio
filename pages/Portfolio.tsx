import React from 'react';
import { Hero } from '../components/sections/Hero';
import { SkillsMarquee } from '../components/sections/SkillsMarquee';
import { Manifesto } from '../components/sections/Manifesto';
import { Work } from '../components/sections/Work';
import { Experience } from '../components/sections/Experience';
import { FreelanceCTA } from '../components/sections/FreelanceCTA';
import { Dock } from '../components/layout/Dock';
import { Footer } from '../components/layout/Footer';

interface PortfolioProps {
    theme: string;
    toggleTheme: () => void;
    activeSection: string;
    onNavigate: (path: string) => void;
    isTransitioning: boolean;
}

export const Portfolio: React.FC<PortfolioProps> = ({ theme, toggleTheme, activeSection, onNavigate, isTransitioning }) => (
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
