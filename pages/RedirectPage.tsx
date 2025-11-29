import React, { useState, useEffect } from 'react';
import PORTFOLIO_DATA from '../data/portfolio.json';

export const RedirectPage: React.FC = () => {
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
