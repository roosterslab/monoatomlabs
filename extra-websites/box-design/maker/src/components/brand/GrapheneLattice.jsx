import React, { useEffect, useRef } from 'react';

/**
 * GrapheneLattice — adapted from website/src/components/hero/GrapheneLattice.jsx
 *
 * Changes from original:
 *  - No mouse interaction
 *  - Accepts `time` prop: when provided, renders one static frame at that time value;
 *    when undefined, runs the full requestAnimationFrame animation loop.
 *  - Accepts `hexRadius` prop (default 40): controls hex cell size / grid density.
 *  - Accepts `brightness` prop (default 0.3): scales bond alpha.
 *  - Accepts `zDepth` prop (default 500): perspective depth offset.
 */
const GrapheneLattice = ({ className = 'absolute inset-0 z-0', time, hexRadius = 40, brightness = 0.3, zDepth = 500 }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let nodes = [];
        let connections = [];
        let animationFrameId;

        const focalLength = 800;

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            nodes = [];
            connections = [];

            const xStep = hexRadius * Math.sqrt(3);
            const yStep = hexRadius * 1.5;
            const cols = Math.ceil(width / xStep) + 4;
            const rows = Math.ceil(height / yStep) + 4;

            const nodeMap = new Map();
            const edgeSet = new Set();

            for (let i = -Math.floor(cols / 2); i < cols / 2; i++) {
                for (let j = -Math.floor(rows / 2); j < rows / 2; j++) {
                    let cx = i * xStep;
                    let cy = j * yStep;
                    if (j % 2 !== 0) cx += xStep / 2;

                    const polyIndices = [];

                    for (let k = 0; k < 6; k++) {
                        const angle = (Math.PI / 180) * (60 * k + 30);
                        const vx = cx + hexRadius * Math.cos(angle);
                        const vy = cy + hexRadius * Math.sin(angle);
                        const key = `${Math.round(vx)},${Math.round(vy)}`;
                        let idx;

                        if (nodeMap.has(key)) {
                            idx = nodeMap.get(key);
                        } else {
                            const nx = vx * 0.003;
                            const ny = vy * 0.003;
                            const z = Math.sin(nx * 2) * 80 + Math.cos(ny * 2) * 80;
                            nodes.push({ x: vx, y: vy, z, ox: vx, oy: vy, oz: z });
                            idx = nodes.length - 1;
                            nodeMap.set(key, idx);
                        }
                        polyIndices.push(idx);
                    }

                    for (let k = 0; k < 6; k++) {
                        const n1 = polyIndices[k];
                        const n2 = polyIndices[(k + 1) % 6];
                        const edgeKey = n1 < n2 ? `${n1},${n2}` : `${n2},${n1}`;
                        if (!edgeSet.has(edgeKey)) {
                            connections.push([n1, n2]);
                            edgeSet.add(edgeKey);
                        }
                    }
                }
            }
        };

        const drawFrame = (t) => {
            if (!ctx) return;

            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);

            const angleX = Math.sin(t * 0.0002) * 0.1;
            const angleY = t * 0.0001;

            const projectedNodes = nodes.map(node => {
                let y1 = node.oy * Math.cos(angleX) - node.oz * Math.sin(angleX);
                let z1 = node.oy * Math.sin(angleX) + node.oz * Math.cos(angleX);
                let x2 = node.ox * Math.cos(angleY) - z1 * Math.sin(angleY);
                let z2 = node.ox * Math.sin(angleY) + z1 * Math.cos(angleY);
                const scale = focalLength / (focalLength + z2 + zDepth);
                const px = x2 * scale + width / 2;
                const py = y1 * scale + height / 2;
                return { x: px, y: py, scale, z: z2 };
            });

            ctx.strokeStyle = '#333';
            ctx.lineWidth = 1;
            connections.forEach(([i, j]) => {
                const p1 = projectedNodes[i];
                const p2 = projectedNodes[j];
                if (p1.scale > 0 && p2.scale > 0) {
                    const alpha = Math.min(p1.scale, p2.scale) * 0.5;
                    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * brightness})`;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });

            projectedNodes.forEach(p => {
                if (p.scale > 0) {
                    const alpha = p.scale;
                    const size = p.scale * 2;
                    ctx.fillStyle = `rgba(255, 255, 255, ${alpha * brightness})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });
        };

        init();

        if (time !== undefined) {
            drawFrame(time);
        } else {
            window.addEventListener('resize', init);
            const animate = (t) => { drawFrame(t); animationFrameId = requestAnimationFrame(animate); };
            animationFrameId = requestAnimationFrame(animate);
        }

        return () => {
            window.removeEventListener('resize', init);
            cancelAnimationFrame(animationFrameId);
        };
    }, [time, hexRadius, brightness, zDepth]);

    return <canvas ref={canvasRef} className={className} style={{ width: '100%', height: '100%' }} />;
};

export default GrapheneLattice;
