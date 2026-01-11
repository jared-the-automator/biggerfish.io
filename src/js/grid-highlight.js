document.addEventListener('DOMContentLoaded', () => {
    // Only run on pages with blueprint-grid
    if (!document.body.classList.contains('blueprint-grid')) return;

    const gridSize = 30; // Must match CSS

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

            // 1. Whitelist: Grid Containers (Always Show)
            // Note: .hero-section and others are grid containers.
            const isGridContainer = target.matches('body, section, .hero-section, .snap-section, .blueprint-grid, .w-view');

            if (isGridContainer) {
                shouldShow = true;
            } else {
                // 2. Blacklist: Content Elements (Always Hide)
                const isContent = target.matches('p, h1, h2, h3, h4, h5, h6, span, img, svg, input, button, a, select, textarea, label, li, td, th, strong, em, code, .brand-logo, .nav-link, .w-nav-brand, .footer-link, .card');

                if (isContent) {
                    shouldShow = false;
                } else {
                    // 3. Opacity Check: If opaque background, Hide.
                    const style = window.getComputedStyle(target);
                    const bg = style.backgroundColor;
                    // Check for non-transparent (alpha > 0)
                    // standard format: rgba(r, g, b, a) or rgb(r, g, b)
                    const isTransparent = bg === 'rgba(0, 0, 0, 0)' || bg === 'transparent';

                    shouldShow = isTransparent;
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
        // Find the background context (Section or Body) to snap correctly
        const section = target.closest('section, .hero-section, .snap-section, footer, header, .header, .navbar');

        let originX = 0;
        let originY = 0;

        if (section) {
            const rect = section.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            originY = rect.top + scrollTop;
            originX = rect.left + scrollLeft;
        }

        // Calculate relative position to the origin
        const relX = e.pageX - originX;
        const relY = e.pageY - originY;

        // Snap relative coord
        const snapRelX = Math.floor(relX / gridSize) * gridSize;
        const snapRelY = Math.floor(relY / gridSize) * gridSize;

        // Convert back to absolute page coord
        const finalX = originX + snapRelX;
        const finalY = originY + snapRelY;

        highlight.style.transform = `translate(${finalX}px, ${finalY}px)`;
    });

    // Optional: Hide if mouse leaves window
    document.addEventListener('mouseout', (e) => {
        if (!e.relatedTarget && !e.toElement) {
            highlight.style.display = 'none';
            isVisible = false;
        }
    });
});
