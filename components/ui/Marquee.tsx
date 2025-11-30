import React from 'react';

interface MarqueeProps {
    items: string[];
    reverse?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({ items, reverse = false }) => {
    return (
        <div className="relative flex overflow-hidden py-4 md:py-6 group select-none">
            {/* Enhanced Gradient Masks */}
            <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white dark:from-black via-white/80 dark:via-black/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white dark:from-black via-white/80 dark:via-black/80 to-transparent z-20 pointer-events-none" />

            <div className={`flex whitespace-nowrap gap-8 md:gap-12 ${reverse ? 'animate-scroll-reverse' : 'animate-scroll'} group-hover:[animation-play-state:paused] items-center`}>
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
