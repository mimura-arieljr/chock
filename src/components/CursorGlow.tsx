import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-50">
            <div
                className="absolute w-60 h-60 rounded-full blur-3xl pointer-events-none"
                style={{
                    left: pos.x - 120, // Centering the glow
                    top: pos.y - 120,
                    background: 'radial-gradient(circle, rgba(0, 237, 255, 1) 0%, transparent 80%)',
                }}
            ></div>
        </div>
    );
};