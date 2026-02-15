import React, { useEffect, useRef } from 'react';

const HexagonWaveOptimized = ({ className = "absolute inset-0 z-0" }) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const isInitializedRef = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // OPTIMIZATION: GPU-accelerated context
        const ctx = canvas.getContext('2d', {
            alpha: true,
            desynchronized: true,  // Allow async GPU rendering
            willReadFrequently: false  // We only write, never read
        });

        let width, height;
        let particles = [];
        let animationFrameId;

        // OPTIMIZATION: Pre-calculated hexagon vertices (calculated once, reused for all)
        const hexagonCache = [];
        const cacheHexagonVertices = (radius) => {
            const vertices = [];
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i + (Math.PI / 6);
                vertices.push({
                    cos: Math.cos(angle) * radius,
                    sin: Math.sin(angle) * radius
                });
            }
            return vertices;
        };

        const init = () => {
            const { offsetWidth, offsetHeight } = canvas;
            width = canvas.width = offsetWidth;
            height = canvas.height = offsetHeight;
            particles = [];

            // SAME DENSITY AS ORIGINAL (no reduction)
            const hexRadius = 25;
            const xSpacing = 60;
            const ySpacing = 50;

            const rows = Math.ceil(height / ySpacing) + 2;
            const cols = Math.ceil(width / xSpacing) + 2;

            // Pre-cache hexagon vertices for this size
            hexagonCache.length = 0;
            hexagonCache.push(...cacheHexagonVertices(hexRadius));

            for (let y = -1; y < rows; y++) {
                for (let x = -1; x < cols; x++) {
                    let xPos = x * xSpacing;
                    let yPos = y * ySpacing;

                    if (y % 2 !== 0) {
                        xPos += xSpacing / 2;
                    }

                    // OPTIMIZATION: Pre-calculate wave equation constants
                    particles.push({
                        originX: xPos,
                        originY: yPos,
                        x: xPos,
                        y: yPos,
                        size: hexRadius,
                        // Pre-calculated constants for wave equations
                        waveConstY: yPos * 0.008,
                        waveConstX: xPos * 0.005,
                        depthConst: xPos * 0.01
                    });
                }
            }

            isInitializedRef.current = true;
        };

        // OPTIMIZATION: Batch render all hexagons with same opacity together
        const drawHexagonBatch = (ctx, batchParticles, opacity) => {
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
            ctx.lineWidth = 1.5;

            ctx.beginPath();
            batchParticles.forEach(p => {
                // Use pre-cached vertices
                hexagonCache.forEach((vertex, i) => {
                    const px = p.x + vertex.cos;
                    const py = p.y + vertex.sin;
                    if (i === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                });
                ctx.closePath();
            });
            ctx.stroke();
            ctx.fill();
        };

        const animate = (time) => {
            if (!ctx || !isInitializedRef.current) return;

            // OPTIMIZATION: Use fillRect (faster than clearRect on some browsers)
            ctx.globalCompositeOperation = 'source-over';
            ctx.fillStyle = 'rgba(0, 0, 0, 0)';
            ctx.clearRect(0, 0, width, height);

            const timeScale = time * 0.0008;

            // OPTIMIZATION: Pre-calculate sin/cos for time (reused for all particles)
            const sinTime = Math.sin(timeScale);
            const cosTime = Math.cos(timeScale);
            const sinTimeFast = Math.sin(timeScale * 1.5);

            // OPTIMIZATION: Batch particles by opacity level (reduce state changes)
            const opacityBuckets = new Map();

            // Single loop: update positions and bucket by opacity
            const particleCount = particles.length;
            for (let i = 0; i < particleCount; i++) {
                const p = particles[i];

                // OPTIMIZATION: Use pre-calculated constants
                const waveX = Math.sin(p.waveConstY + p.waveConstX + timeScale) * 15;
                const waveY = cosTime * (p.waveConstY + p.waveConstX) * 3;

                p.x = p.originX + waveX;
                p.y = p.originY + waveY;

                // Calculate opacity using pre-calc time values
                const depth = sinTimeFast * Math.sin(p.depthConst);
                const opacity = Math.round((0.1 + (depth + 1) * 0.25) * 10) / 10; // Round to 1 decimal

                // Bucket particles by opacity
                if (!opacityBuckets.has(opacity)) {
                    opacityBuckets.set(opacity, []);
                }
                opacityBuckets.get(opacity).push(p);
            }

            // OPTIMIZATION: Draw all hexagons with same opacity in one batch
            opacityBuckets.forEach((batchParticles, opacity) => {
                ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
                ctx.lineWidth = 1.5;

                ctx.beginPath();
                batchParticles.forEach(p => {
                    hexagonCache.forEach((vertex, i) => {
                        const px = p.x + vertex.cos;
                        const py = p.y + vertex.sin;
                        if (i === 0) ctx.moveTo(px, py);
                        else ctx.lineTo(px, py);
                    });
                    ctx.closePath();
                });
                ctx.fill();
                ctx.stroke();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Debounce helper
        const debounce = (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func(...args), wait);
            };
        };

        const handleResize = debounce(() => {
            isInitializedRef.current = false;
            init();
        }, 250);

        // OPTIMIZATION: Small delay to let page render first
        const initTimeout = setTimeout(() => {
            init();
            animationFrameId = requestAnimationFrame(animate);
        }, 100);

        window.addEventListener('resize', handleResize);

        return () => {
            clearTimeout(initTimeout);
            window.removeEventListener('resize', handleResize);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            isInitializedRef.current = false;
            particles = [];
            hexagonCache.length = 0;
        };
    }, []);

    return <canvas ref={canvasRef} className={className} style={{ width: '100%', height: '100%' }} />;
};

export default HexagonWaveOptimized;
