import React, { useEffect, useRef } from 'react';

/**
 * HexagonWave canvas background.
 * - When `time` is undefined → runs the full requestAnimationFrame animation.
 * - When `time` is a number  → renders exactly one static frame at that time
 *   value, with no animation loop. The slider in App drives this.
 */
const HexagonWave = ({ className = "absolute inset-0 z-0", time }) => {
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

            const hexRadius = 25;
            const xSpacing = 60;
            const ySpacing = 50;

            const rows = Math.ceil(height / ySpacing) + 2;
            const cols = Math.ceil(width / xSpacing) + 2;

            for (let y = -1; y < rows; y++) {
                for (let x = -1; x < cols; x++) {
                    let xPos = x * xSpacing;
                    let yPos = y * ySpacing;
                    if (y % 2 !== 0) xPos += xSpacing / 2;
                    particles.push({ x: xPos, y: yPos, originX: xPos, originY: yPos, size: hexRadius });
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

        const drawFrame = (t) => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            const timeScale = t * 0.0008;
            particles.forEach((p) => {
                const waveX = Math.sin(p.originY * 0.008 + p.originX * 0.005 + timeScale) * 15;
                const waveY = Math.cos(p.originX * 0.005 + p.originY * 0.008 + timeScale) * 15;
                const depth = Math.sin(p.originX * 0.01 + timeScale * 1.5);
                const opacity = 0.1 + (depth + 1) * 0.25;
                p.x = p.originX + waveX;
                p.y = p.originY + waveY;
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
                ctx.lineWidth = 1.5;
                drawHexagon(ctx, p.x, p.y, p.size);
            });
        };

        init();

        if (time !== undefined) {
            // Static snapshot — draw once at the given time value
            drawFrame(time);
        } else {
            // Live animation
            const animate = (t) => {
                drawFrame(t);
                animationFrameId = requestAnimationFrame(animate);
            };
            window.addEventListener('resize', init);
            animationFrameId = requestAnimationFrame(animate);
        }

        return () => {
            window.removeEventListener('resize', init);
            cancelAnimationFrame(animationFrameId);
        };
    }, [time]); // re-run whenever time changes so static frame updates

    return <canvas ref={canvasRef} className={className} style={{ width: '100%', height: '100%' }} />;
};

export default HexagonWave;
