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

    document.addEventListener('mousemove', (e) => {
        // 1. Hide Over Content Logic
        const isStrictContent = e.target.closest('a, button, input, select, textarea, img, h1, h2, h3, h4, h5, h6, p, span, label, strong, em, code, .brand-logo');

        if (isStrictContent) {
            highlight.style.display = 'none';
            isVisible = false;
            return;
        }

        // Show if previously hidden
        if (!isVisible) {
            highlight.style.display = 'block';
            isVisible = true;
        }

        // 2. Alignment Logic
        const section = e.target.closest('section, .hero-section, .snap-section, footer, header, .header, .navbar');

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
