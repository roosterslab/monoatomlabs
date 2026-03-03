import React, { useEffect, useRef } from 'react';

const HexagonWave = ({ className = "absolute inset-0 z-0" }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let animationFrameId;

        const init = () => {
            const { offsetWidth, offsetHeight } = canvas;
            width = canvas.width = offsetWidth;
            height = canvas.height = offsetHeight;
            particles = [];

            const hexRadius = 22;
            const xSpacing = 54;
            const ySpacing = 46;

            const rows = Math.ceil(height / ySpacing) + 2;
            const cols = Math.ceil(width / xSpacing) + 2;

            for (let y = -1; y < rows; y++) {
                for (let x = -1; x < cols; x++) {
                    let xPos = x * xSpacing;
                    let yPos = y * ySpacing;
                    if (y % 2 !== 0) xPos += xSpacing / 2;
                    particles.push({
                        x: xPos, y: yPos,
                        originX: xPos, originY: yPos,
                        size: hexRadius,
                        phase: Math.random() * Math.PI * 2
                    });
                }
            }
        };

        const drawHexagon = (ctx, x, y, radius) => {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i + (Math.PI / 6);
                const px = x + radius * Math.cos(angle);
                const py = y + radius * Math.sin(angle);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
        };

        const animate = (time) => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            const timeScale = time * 0.0008;

            particles.forEach((p) => {
                const waveX = Math.sin(p.originY * 0.008 + p.originX * 0.005 + timeScale) * 14;
                const waveY = Math.cos(p.originX * 0.005 + p.originY * 0.008 + timeScale) * 14;
                const depth = Math.sin(p.originX * 0.01 + timeScale * 1.5);
                const opacity = 0.08 + (depth + 1) * 0.2;

                p.x = p.originX + waveX;
                p.y = p.originY + waveY;

                ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
                ctx.fillStyle = `rgba(255,255,255,${opacity * 0.12})`;
                ctx.lineWidth = 1.2;
                drawHexagon(ctx, p.x, p.y, p.size);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        window.addEventListener('resize', init);
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', init);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default HexagonWave;
