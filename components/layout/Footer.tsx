import React from 'react';
import PORTFOLIO_DATA from '../../data/portfolio.json';
import { Icons } from '../ui/Icons';

export const Footer: React.FC = () => (
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
