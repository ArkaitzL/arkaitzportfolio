import React from 'react';

interface MagneticButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
    variant?: 'primary' | 'outline' | 'ghost';
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({ children, href, onClick, className = '', variant = 'primary' }) => {
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
