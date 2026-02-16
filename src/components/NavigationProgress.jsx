import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const NavigationProgress = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState('Loading');
    const location = useLocation();

    // INSTANT FEEDBACK: Listen for clicks on any link
    useEffect(() => {
        const handleLinkClick = (e) => {
            // Check if clicked element is a link or inside a link
            const link = e.target.closest('a[href], [role="link"]');
            if (link && !link.target) { // Ignore external links (target="_blank")
                // Get the href to check if it's the same route
                const href = link.getAttribute('href');
                const currentPath = window.location.hash.replace('#', '') || '/';

                // Don't show loading if clicking the same route
                if (href === currentPath || href === '#' + currentPath) {
                    return;
                }

                // INSTANT visual feedback
                document.body.classList.add('navigating');

                // Show loading IMMEDIATELY on click
                setIsLoading(true);
                setProgress(5);
                setLoadingText('Loading');

                // Safety timeout: If route doesn't change within 2 seconds, reset
                const safetyTimeout = setTimeout(() => {
                    setIsLoading(false);
                    setProgress(0);
                    document.body.classList.remove('navigating');
                }, 2000);

                // Store timeout to clear later
                window._navSafetyTimeout = safetyTimeout;
            }
        };

        // Add global click listener for instant feedback
        document.addEventListener('click', handleLinkClick, true); // Use capture phase for earliest detection

        return () => {
            document.removeEventListener('click', handleLinkClick, true);
            if (window._navSafetyTimeout) {
                clearTimeout(window._navSafetyTimeout);
            }
        };
    }, []);

    useEffect(() => {
        // Continue loading animation when route actually changes
        if (isLoading) {
            setProgress(10);
            setLoadingText('Loading');
        } else {
            // Route changed, start full loading sequence
            setIsLoading(true);
            setProgress(10);
            setLoadingText('Loading');
        }

        // Simulate progress with messages
        const timer1 = setTimeout(() => {
            setProgress(30);
            setLoadingText('Loading');
        }, 50);

        const timer2 = setTimeout(() => {
            setProgress(50);
            setLoadingText('Loading page');
        }, 150);

        const timer3 = setTimeout(() => {
            setProgress(70);
            setLoadingText('Almost there');
        }, 300);

        const timer4 = setTimeout(() => {
            setProgress(90);
            setLoadingText('Finalizing');
        }, 500);

        // Complete after a delay
        const completeTimer = setTimeout(() => {
            setProgress(100);
            setLoadingText('Done!');
            setTimeout(() => {
                setIsLoading(false);
                setProgress(0);
                document.body.classList.remove('navigating'); // Remove navigating class

                // Clear safety timeout
                if (window._navSafetyTimeout) {
                    clearTimeout(window._navSafetyTimeout);
                    window._navSafetyTimeout = null;
                }
            }, 300);
        }, 700);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(completeTimer);
        };
    }, [location.pathname]);

    if (!isLoading && progress === 0) return null;

    return (
        <>
            {/* Top Progress Bar - Clean and Prominent */}
            <div className="fixed top-0 left-0 right-0 h-2 z-[9999]">
                <div
                    className="h-full transition-all duration-300 ease-out"
                    style={{
                        width: `${progress}%`,
                        background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 2s infinite',
                        boxShadow: '0 3px 25px rgba(59, 130, 246, 0.7), 0 0 15px rgba(6, 182, 212, 0.5)',
                        opacity: isLoading ? 1 : 0
                    }}
                />
            </div>

            <style>{`
                @keyframes shimmer {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }

                /* INSTANT CLICK FEEDBACK: Show loading cursor on links */
                a:active, [role="link"]:active {
                    cursor: wait !important;
                }

                /* INSTANT VISUAL FEEDBACK: Show loading cursor when navigating */
                body.navigating {
                    cursor: wait !important;
                }

                /* Disable interactions during navigation */
                body.navigating main {
                    pointer-events: none;
                }

                /* Pulse effect on click */
                @keyframes clickPulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(0.98); }
                    100% { transform: scale(1); }
                }

                a:active, button:active, [role="link"]:active {
                    animation: clickPulse 0.15s ease-out;
                }
            `}</style>
        </>
    );
};

export default NavigationProgress;
