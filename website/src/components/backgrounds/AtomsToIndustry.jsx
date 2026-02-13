import { useEffect, useRef } from 'react';

/**
 * AtomsToIndustry - Honeycomb Formation Background Animation
 *
 * Animated background showing the journey from research (chaotic atoms) to
 * industrial scale (ordered hexagonal lattice). The canvas auto-scrolls showing
 * three distinct zones:
 *
 * 1. CHAOS ZONE (Left): Atoms floating randomly - representing research phase
 * 2. FORMATION ZONE (Center): Atoms assembling into hexagons - development phase
 * 3. ORDER ZONE (Right): Perfect honeycomb lattice - industrial scale phase
 *
 * @param {number} scrollSpeed - Speed of horizontal auto-scroll (default: 0.8)
 * @param {number} hexRadius - Size of hexagons (default: 30)
 * @param {string} className - Additional CSS classes
 */
const AtomsToIndustry = ({ scrollSpeed = 0.8, hexRadius = 30, className = '' }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let nodes = [];
        let animationFrameId;
        let scrollOffset = 0;

        const HEX_RADIUS = hexRadius;
        const SCROLL_SPEED = scrollSpeed;

        class Node {
            constructor(x, y) {
                this.gridX = x; // Ideal grid position X
                this.gridY = y; // Ideal grid position Y

                // Current position (starts at grid)
                this.x = x;
                this.y = y;

                // Random properties for chaotic phase
                this.phase = Math.random() * Math.PI * 2;
                this.driftSpeed = Math.random() * 0.5 + 0.2;
                this.randomOffsetX = (Math.random() - 0.5) * 100;
                this.randomOffsetY = (Math.random() - 0.5) * 100;

                // Neighbors for drawing lines
                this.neighbors = [];
            }

            update(scrollOffset, time) {
                // 1. Calculate Screen Position based on Scroll
                // The entire coordinate system moves right
                let screenX = (this.gridX + scrollOffset) % (width + HEX_RADIUS * 4);

                // Wrap logic
                if (screenX > width + 100) {
                    screenX -= (width + 200);
                }

                // 2. Determine Zone / State based on Screen X
                const normalizedX = screenX / width;

                let chaos = 0;
                let opacity = 1;

                if (normalizedX < 0.35) {
                    // ZONE 1: CHAOS (Research)
                    // High chaos, nodes float randomly
                    chaos = 1.0;
                    opacity = 0.4;
                } else if (normalizedX < 0.65) {
                    // ZONE 2: FORMATION (Development)
                    // Chaos decreases linearly, snapping into place
                    chaos = 1.0 - ((normalizedX - 0.35) / 0.3);
                    opacity = 0.6 + (1 - chaos) * 0.4;
                } else {
                    // ZONE 3: ORDER (Scale)
                    // Perfect grid, steady movement
                    chaos = 0.0;
                    opacity = 0.3; // Dim slightly so it's not distracting as a solid wall
                }

                // 3. Apply Movement
                if (chaos > 0.01) {
                    // Apply brownian-like motion scaled by chaos
                    const noiseX = Math.sin(time * 2 + this.phase) * 30 * chaos;
                    const noiseY = Math.cos(time * 1.5 + this.phase) * 30 * chaos;

                    // Also drift apart
                    const driftX = this.randomOffsetX * chaos;
                    const driftY = this.randomOffsetY * chaos;

                    this.x = screenX + noiseX + driftX;
                    this.y = this.gridY + noiseY + driftY;
                } else {
                    // Locked to grid
                    this.x = screenX;
                    this.y = this.gridY;
                }

                return { chaos, opacity };
            }
        }

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            nodes = [];

            // Generate Honeycomb Lattice Vertices
            const xStep = HEX_RADIUS * 1.5;
            const yStep = HEX_RADIUS * Math.sqrt(3);
            const cols = Math.ceil(width / xStep) + 6;
            const rows = Math.ceil(height / yStep) + 4;

            const nodeGrid = [];

            for (let i = 0; i < cols; i++) {
                nodeGrid[i] = [];
                for (let j = 0; j < rows; j++) {
                    // Calc hex center (roughly)
                    let x = i * xStep - 100;
                    let y = j * yStep - 50;
                    if (i % 2 !== 0) y += yStep / 2;

                    const node = new Node(x, y);
                    nodes.push(node);
                    nodeGrid[i][j] = node;
                }
            }
        };

        const animate = (time) => {
            const t = time * 0.001;
            scrollOffset += SCROLL_SPEED;

            ctx.clearRect(0, 0, width, height);

            nodes.forEach(node => {
                const { chaos, opacity } = node.update(scrollOffset, t);

                // Don't draw if far off screen
                if (node.x < -50 || node.x > width + 50) return;

                // DRAW LOGIC

                // 1. Research Zone: Just dots (Atoms)
                if (chaos > 0.8) {
                    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
                    ctx.fill();
                }

                // 2. Formation Zone: Partial Hexagons / Vibrating Lines
                else if (chaos > 0.01) {
                    // As chaos goes down (0.8 -> 0), complete the hexagon
                    const completeness = 1 - chaos;

                    ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.5})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();

                    // Draw 6 sides
                    for (let k = 0; k < 6; k++) {
                        // Randomly skip sides based on completeness to look like it's "building"
                        if (Math.random() > completeness + 0.2) continue;

                        const angle = (Math.PI / 3) * k;
                        const px = node.x + HEX_RADIUS * Math.cos(angle);
                        const py = node.y + HEX_RADIUS * Math.sin(angle);

                        // Jitter the vertices slightly
                        const jx = (Math.random() - 0.5) * 10 * chaos;
                        const jy = (Math.random() - 0.5) * 10 * chaos;

                        if (k === 0) ctx.moveTo(px + jx, py + jy);
                        else ctx.lineTo(px + jx, py + jy);
                    }
                    // Close path if nearly ordered
                    if (chaos < 0.2) ctx.closePath();
                    ctx.stroke();

                    // Draw center atom
                    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
                    ctx.fill();
                }

                // 3. Industrial Zone: Perfect Hexagons
                else {
                    ctx.strokeStyle = `rgba(255, 255, 255, 0.4)`; // Solid steady lines
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    for (let k = 0; k < 6; k++) {
                        const angle = (Math.PI / 3) * k;
                        const px = node.x + HEX_RADIUS * Math.cos(angle);
                        const py = node.y + HEX_RADIUS * Math.sin(angle);
                        if (k === 0) ctx.moveTo(px, py);
                        else ctx.lineTo(px, py);
                    }
                    ctx.closePath();
                    ctx.stroke();

                    // Optional: Subtle fill for solidity
                    ctx.fillStyle = `rgba(255, 255, 255, 0.03)`;
                    ctx.fill();
                }
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
    }, [scrollSpeed, hexRadius]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full block bg-black ${className}`}
        />
    );
};

export default AtomsToIndustry;
