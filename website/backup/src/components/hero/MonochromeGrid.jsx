import React, { useEffect, useRef } from 'react';

const MonochromeGrid = ({ className = "absolute inset-0 z-0" }) => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: -500, y: -500 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; // Guard clause

        const ctx = canvas.getContext('2d');
        let width, height;
        let animationFrameId;

        // Config
        const HEX_RADIUS = 30;
        const PULSE_SPEED = 4;
        const PULSE_CHANCE = 0.25;
        const DECAY_RATE = 0.94;

        // State
        let nodes = [];
        let pulses = [];

        const nodeMap = new Map();
        const getOrCreateNode = (x, y) => {
            const key = `${x.toFixed(1)},${y.toFixed(1)}`;
            if (!nodeMap.has(key)) {
                nodeMap.set(key, { x, y, neighbors: [], energy: 0 });
            }
            return nodeMap.get(key);
        };

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight; // Consider changing this to parent height if needed, but fixed/absolute usually uses window or parent rect.
            // For a section background, we might want it to size to the canvas's clientHeight/Width if not fixed.
            // But usually these full-bg canvases are better fixed or absolute.
            // Let's stick to window for now as it's "inset-0".
            // Actually, if it's inside a relative container, "absolute inset-0" will take the container size.
            // But canvas.width=window.innerWidth sets the resolution to the window, which is good for full screen.
            // If it's a section, we might want `canvas.clientWidth`.
            // Let's change this to use the container's size if possible, or just keep window if it's "fixed" style.
            // Given the usage "absolute inset-0", it will stretch.
            // Setting canvas.width to offsetWidth is better.

            const rect = canvas.getBoundingClientRect();
            width = canvas.width = rect.width;
            height = canvas.height = rect.height;

            nodes = [];
            pulses = [];
            nodeMap.clear();

            const xOffset = HEX_RADIUS * 3 / 2;
            const yOffset = HEX_RADIUS * Math.sqrt(3);
            const cols = Math.ceil(width / xOffset) + 2;
            const rows = Math.ceil(height / yOffset) + 2;

            for (let q = -1; q < cols; q++) {
                for (let r = -1; r < rows; r++) {
                    const cx = q * xOffset;
                    const cy = r * yOffset + (q % 2 !== 0 ? yOffset / 2 : 0);

                    const corners = [];
                    for (let k = 0; k < 6; k++) {
                        const angle = Math.PI / 180 * (60 * k);
                        const vx = cx + HEX_RADIUS * Math.cos(angle);
                        const vy = cy + HEX_RADIUS * Math.sin(angle);
                        corners.push(getOrCreateNode(vx, vy));
                    }

                    for (let k = 0; k < 6; k++) {
                        const n1 = corners[k];
                        const n2 = corners[(k + 1) % 6];
                        if (!n1.neighbors.includes(n2)) {
                            n1.neighbors.push(n2);
                            n2.neighbors.push(n1);
                        }
                    }
                }
            }
            nodes = Array.from(nodeMap.values());
        };

        const animate = () => {
            if (!ctx) return;
            // Trail effect - Dark Neutral Background match
            // We use clearRect for transparency if we want the parent bg to show? 
            // The previous code filled with rgba(10,10,10, 0.4). This implies the canvas has its own background color built-in (trail effect).
            // If we want it "transparent" but with trails, it's tricky.
            // Let's keep the dark tint for now as requested "MonochromeGrid".
            ctx.fillStyle = 'rgba(10, 10, 10, 0.4)';
            ctx.fillRect(0, 0, width, height);

            // 1. Draw Bonds (Grid Lines)
            ctx.strokeStyle = '#262626'; // Neutral-800
            ctx.lineWidth = 1;
            ctx.beginPath();
            nodes.forEach(node => {
                node.neighbors.forEach(neighbor => {
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(neighbor.x, neighbor.y);
                });
            });
            ctx.stroke();

            // 2. Spawn Energy
            if (Math.random() < PULSE_CHANCE) {
                const startNode = nodes[Math.floor(Math.random() * nodes.length)];
                if (startNode && startNode.neighbors.length > 0) {
                    const endNode = startNode.neighbors[Math.floor(Math.random() * startNode.neighbors.length)];
                    pulses.push({
                        start: startNode,
                        end: endNode,
                        progress: 0,
                        type: Math.random() > 0.5 ? 'bright' : 'dim' // Variation in brightness
                    });
                }
            }

            // 3. Update Pulses
            ctx.shadowBlur = 8;

            for (let i = pulses.length - 1; i >= 0; i--) {
                const p = pulses[i];
                const dist = Math.hypot(p.start.x - p.end.x, p.start.y - p.end.y);
                p.progress += PULSE_SPEED / dist;

                if (p.progress >= 1) {
                    p.end.energy = 1.0;

                    if (Math.random() > 0.1 && p.end.neighbors.length > 0) {
                        const validNeighbors = p.end.neighbors.filter(n => n !== p.start);
                        if (validNeighbors.length > 0) {
                            const nextNode = validNeighbors[Math.floor(Math.random() * validNeighbors.length)];
                            p.start = p.end;
                            p.end = nextNode;
                            p.progress = 0;
                        } else {
                            pulses.splice(i, 1);
                        }
                    } else {
                        pulses.splice(i, 1);
                    }
                } else {
                    const curX = p.start.x + (p.end.x - p.start.x) * p.progress;
                    const curY = p.start.y + (p.end.y - p.start.y) * p.progress;

                    // Monochrome Colors
                    const color = p.type === 'bright' ? '#ffffff' : '#a3a3a3';
                    ctx.shadowColor = '#ffffff';
                    ctx.fillStyle = color;

                    ctx.beginPath();
                    ctx.arc(curX, curY, 1.8, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            ctx.shadowBlur = 0;

            // 4. Draw Glowing Atoms (Vertices)
            nodes.forEach(node => {
                const distToMouse = Math.hypot(node.x - mouseRef.current.x, node.y - mouseRef.current.y);
                if (distToMouse < 150) {
                    node.energy = Math.min(node.energy + 0.1, 1);
                }

                if (node.energy > 0.01) {
                    // White Glow
                    ctx.fillStyle = `rgba(255, 255, 255, ${node.energy})`;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, 1.5 + node.energy * 2, 0, Math.PI * 2);
                    ctx.fill();
                    node.energy *= DECAY_RATE;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        init();
        window.addEventListener('resize', init);
        // Attach listener to canvas mainly, but window is better for full screen
        // If the canvas is just a background, window mousemove is safer to catch all movements
        // BUT if we want position relative to canvas, we need to subtract rect.
        // Let's listen on window but use rect logic? Or just listen on canvas if it covers everything?
        // Since it's "inset-0", it acts like a background.
        // Actually for products section, the content is ON TOP. Canvas won't get mouse events if content blocks it.
        // So window listener is required, but coordinate mapping is tricky if section is scrolled.
        // Let's stick to simple "window" listener for now, but use clientX/Y properly.
        // If it's a section component, `e.clientX - rect.left` is correct.

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

export default MonochromeGrid;
