document.addEventListener('DOMContentLoaded', () => {
    // Only run on pages with blueprint-grid
    if (!document.body.classList.contains('blueprint-grid')) return;

    const gridSize = 32; // Must match CSS background-size

    // Create Highlight Element
    const highlight = document.createElement('div');
    highlight.classList.add('grid-highlight-box');

    // Explicit styles to ensure visibility over everything (except mouse)
    highlight.style.position = 'absolute';

    document.body.appendChild(highlight);
    console.log('Grid Highlight Initialized');

    let isVisible = false;
    let lastTarget = null;
    let shouldShow = false;

    document.addEventListener('mousemove', (e) => {
        const target = e.target;

        // Optimization: Check if target changed to avoid expensive style checks
        if (target !== lastTarget) {
            lastTarget = target;

            // Check Explicit Exclusions First (Nav, Footer, etc.)
            const isExplicitlyExcluded = target.closest('nav, footer, .header, .footer, .navbar, .nav-menu');

            if (isExplicitlyExcluded) {
                shouldShow = false;
            } else {
                // 1. Whitelist: Grid Containers (Always Show)
                // Note: .hero-section and others are grid containers.
                const isGridContainer = target.matches('body, section, .hero-section, .snap-section, .blueprint-grid, .w-view');

                if (isGridContainer) {
                    shouldShow = true;
                } else {
                    // 2. Blacklist: Content Elements (Always Hide)
                    // Use closest to catch children of content elements
                    const isContent = target.closest('p, h1, h2, h3, h4, h5, h6, span, img, svg, input, button, a, select, textarea, label, li, td, th, strong, em, code, .brand-logo, .nav-link, .w-nav-brand, .footer-link, .card');

                    if (isContent) {
                        shouldShow = false;
                    } else {
                        // 3. Opacity Check: If opaque background, Hide.
                        const style = window.getComputedStyle(target);
                        const bg = style.backgroundColor;
                        // Check for non-transparent (alpha > 0)
                        const isTransparent = bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent';

                        shouldShow = isTransparent;
                    }
                }
            }
        }

        if (!shouldShow) {
            highlight.style.display = 'none';
            isVisible = false;
            return;
        }

        // Show (if logic allows)
        if (!isVisible) {
            highlight.style.display = 'block';
            isVisible = true;
        }

        // 4. Alignment Logic
        // Grid background is on body (background-position: -1px -1px, background-size: 32px 32px)
        // Snap directly in absolute page coordinates so the phase is consistent across all sections
        const snapX = Math.floor((e.pageX + 1) / gridSize) * gridSize - 1;
        const snapY = Math.floor((e.pageY + 1) / gridSize) * gridSize - 1;

        highlight.style.transform = `translate(${snapX}px, ${snapY}px)`;
    });

    // Optional: Hide if mouse leaves window
    document.addEventListener('mouseout', (e) => {
        if (!e.relatedTarget && !e.toElement) {
            highlight.style.display = 'none';
            isVisible = false;
        }
    });
});
