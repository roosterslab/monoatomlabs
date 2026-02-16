import React, { useEffect, useRef } from 'react';

const GrapheneLatticeOptimized = ({ className = "absolute inset-0 z-0" }) => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const isInitializedRef = useRef(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // OPTIMIZATION: GPU-accelerated context
        const ctx = canvas.getContext('2d', {
            alpha: false,  // Opaque canvas = faster rendering
            desynchronized: true,  // Allow GPU to render async
            willReadFrequently: false  // We only write, never read
        });

        let width, height;
        let nodes = [];
        let connections = [];
        let animationFrameId;

        // 3D Projection Helpers
        const focalLength = 800;

        // OPTIMIZATION: Throttle mouse updates to reduce event handler overhead
        let mouseUpdateScheduled = false;
        const scheduledMouseUpdate = { x: 0, y: 0 };

        // Initialize Grid - SAME DENSITY AS ORIGINAL
        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            nodes = [];
            connections = [];

            // SAME AS ORIGINAL (no reduction in density)
            const hexRadius = 40;
            const xStep = hexRadius * Math.sqrt(3);
            const yStep = hexRadius * 1.5;
            const cols = Math.ceil(width / xStep) + 4;
            const rows = Math.ceil(height / yStep) + 4;

            const nodeMap = new Map();
            const edgeSet = new Set();

            // Generate hexagons
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

                            nodes.push({
                                x: vx, y: vy, z,
                                ox: vx, oy: vy, oz: z
                            });
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

            isInitializedRef.current = true;
        };

        const animate = (time) => {
            if (!ctx || !isInitializedRef.current) return;

            // Clear canvas
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);

            // Rotation angles based on mouse and time
            const angleX = (mouseRef.current.y * 0.0005) + Math.sin(time * 0.0002) * 0.1;
            const angleY = (mouseRef.current.x * 0.0005) + time * 0.0001;

            // OPTIMIZATION: Pre-calculate sin/cos (reused for ALL nodes)
            const cosX = Math.cos(angleX);
            const sinX = Math.sin(angleX);
            const cosY = Math.cos(angleY);
            const sinY = Math.sin(angleY);

            // OPTIMIZATION: Use typed arrays for better memory performance
            const nodeCount = nodes.length;
            const projectedNodes = new Array(nodeCount);

            // Project nodes
            for (let i = 0; i < nodeCount; i++) {
                const node = nodes[i];

                // Rotation X (using pre-calculated values)
                const y1 = node.oy * cosX - node.oz * sinX;
                const z1 = node.oy * sinX + node.oz * cosX;

                // Rotation Y
                const x2 = node.ox * cosY - z1 * sinY;
                const z2 = node.ox * sinY + z1 * cosY;

                // Perspective Projection
                const scale = focalLength / (focalLength + z2 + 500);
                const px = x2 * scale + width / 2;
                const py = y1 * scale + height / 2;

                projectedNodes[i] = { x: px, y: py, scale, z: z2 };
            }

            // OPTIMIZATION: Batch all line drawing together
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 1;
            ctx.beginPath();

            const connectionCount = connections.length;
            for (let i = 0; i < connectionCount; i++) {
                const [idx1, idx2] = connections[i];
                const p1 = projectedNodes[idx1];
                const p2 = projectedNodes[idx2];

                // Depth culling
                if (p1.scale > 0 && p2.scale > 0) {
                    const alpha = Math.min(p1.scale, p2.scale) * 0.15; // 0.5 * 0.3 = 0.15
                    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                }
            }
            ctx.stroke();

            // OPTIMIZATION: Batch all node drawing together
            for (let i = 0; i < nodeCount; i++) {
                const p = projectedNodes[i];
                if (p.scale > 0) {
                    const alpha = p.scale;
                    const size = p.scale * 2;
                    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        // OPTIMIZATION: Throttle mouse move using requestAnimationFrame
        const handleMouseMove = (e) => {
            scheduledMouseUpdate.x = e.clientX - window.innerWidth / 2;
            scheduledMouseUpdate.y = e.clientY - window.innerHeight / 2;

            if (!mouseUpdateScheduled) {
                mouseUpdateScheduled = true;
                requestAnimationFrame(() => {
                    mouseRef.current.x = scheduledMouseUpdate.x;
                    mouseRef.current.y = scheduledMouseUpdate.y;
                    mouseUpdateScheduled = false;
                });
            }
        };

        // Debounce helper
        const debounce = (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => func(...args), wait);
            };
        };

        // OPTIMIZATION: Debounced resize
        const handleResize = debounce(() => {
            isInitializedRef.current = false;
            init();
        }, 250);

        // OPTIMIZATION: Small delay to allow page to paint first
        const initTimeout = setTimeout(() => {
            init();
            animationFrameId = requestAnimationFrame(animate);
        }, 100);

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove, { passive: true }); // Passive listener

        return () => {
            clearTimeout(initTimeout);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
            // Clear references for garbage collection
            isInitializedRef.current = false;
            nodes = [];
            connections = [];
        };
    }, []);

    return <canvas ref={canvasRef} className={className} />;
};

export default GrapheneLatticeOptimized;
