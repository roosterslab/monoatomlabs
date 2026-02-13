import React, { useEffect, useRef } from 'react';

const GrapheneLattice = ({ className = "absolute inset-0 z-0" }) => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let nodes = [];
        let connections = [];
        let animationFrameId;

        // 3D Projection Helpers
        const focalLength = 800;

        // Initialize Grid
        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            nodes = [];
            connections = [];

            // Config for Honeycomb (Hexagons)
            const hexRadius = 40;
            const xStep = hexRadius * Math.sqrt(3);
            const yStep = hexRadius * 1.5;
            const cols = Math.ceil(width / xStep) + 4;
            const rows = Math.ceil(height / yStep) + 4;

            const nodeMap = new Map(); // "x,y" -> index
            const edgeSet = new Set(); // "i,j" -> exists

            // Generate hexagons
            for (let i = -Math.floor(cols / 2); i < cols / 2; i++) {
                for (let j = -Math.floor(rows / 2); j < rows / 2; j++) {
                    // Center of hexagon
                    let cx = i * xStep;
                    let cy = j * yStep;
                    // Offset odd rows
                    if (j % 2 !== 0) cx += xStep / 2;

                    const polyIndices = [];

                    // 6 vertices per hexagon
                    for (let k = 0; k < 6; k++) {
                        // 30 degrees offset for pointy-top orientation
                        const angle = (Math.PI / 180) * (60 * k + 30);
                        const vx = cx + hexRadius * Math.cos(angle);
                        const vy = cy + hexRadius * Math.sin(angle);

                        // Quantize to merge vertices at same location
                        const key = `${Math.round(vx)},${Math.round(vy)}`;
                        let idx;

                        if (nodeMap.has(key)) {
                            idx = nodeMap.get(key);
                        } else {
                            // Z calculation for wave effect (same look)
                            // Use normalized coords for smooth wave
                            const nx = vx * 0.003;
                            const ny = vy * 0.003;
                            const z = Math.sin(nx * 2) * 80 + Math.cos(ny * 2) * 80;

                            nodes.push({
                                x: vx, y: vy, z,
                                ox: vx, oy: vy, oz: z
                            });
                            idx = nodes.length - 1;
                            nodeMap.set(key, idx);
                        }
                        polyIndices.push(idx);
                    }

                    // Connect vertices to form hexagon edges
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

        const animate = (time) => {
            if (!ctx) return;

            // EXACT MATCH FROM HTML FILE:
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);

            // Rotation angles based on mouse and time
            const angleX = (mouseRef.current.y * 0.0005) + Math.sin(time * 0.0002) * 0.1;
            const angleY = (mouseRef.current.x * 0.0005) + time * 0.0001;

            // Project and Draw
            const projectedNodes = nodes.map(node => {
                // Rotation X
                let y1 = node.oy * Math.cos(angleX) - node.oz * Math.sin(angleX);
                let z1 = node.oy * Math.sin(angleX) + node.oz * Math.cos(angleX);

                // Rotation Y
                let x2 = node.ox * Math.cos(angleY) - z1 * Math.sin(angleY);
                let z2 = node.ox * Math.sin(angleY) + z1 * Math.cos(angleY);

                // Perspective Projection
                const scale = focalLength / (focalLength + z2 + 500); // +500 pushes it back
                const px = x2 * scale + width / 2;
                const py = y1 * scale + height / 2;

                return { x: px, y: py, scale, z: z2 };
            });

            // Draw Connections (Bonds)
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 1;
            connections.forEach(([i, j]) => {
                const p1 = projectedNodes[i];
                const p2 = projectedNodes[j];

                // Depth culling
                if (p1.scale > 0 && p2.scale > 0) {
                    // Fade distant lines
                    const alpha = Math.min(p1.scale, p2.scale) * 0.5;
                    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.3})`;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            });

            // Draw Nodes (Atoms)
            projectedNodes.forEach(p => {
                if (p.scale > 0) {
                    const alpha = p.scale;
                    const size = p.scale * 2;
                    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouseRef.current = {
                x: e.clientX - window.innerWidth / 2,
                y: e.clientY - window.innerHeight / 2
            };
        };

        init();
        window.addEventListener('resize', init);
        window.addEventListener('mousemove', handleMouseMove);
        animationFrameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', init);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className={className} />;
};

export default GrapheneLattice;
