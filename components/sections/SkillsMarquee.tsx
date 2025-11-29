import React from 'react';
import PORTFOLIO_DATA from '../../data/portfolio.json';
import { Marquee } from '../ui/Marquee';

export const SkillsMarquee: React.FC = () => {
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
