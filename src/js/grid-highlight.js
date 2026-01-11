document.addEventListener('DOMContentLoaded', () => {
    // Only run on pages with blueprint-grid
    if (!document.body.classList.contains('blueprint-grid')) return;

    const gridSize = 60; // Must match CSS

    // Create Highlight Element
    const highlight = document.createElement('div');
    highlight.classList.add('grid-highlight-box');

    // Explicit styles to ensure visibility over everything (except mouse)
    highlight.style.position = 'fixed'; // Use fixed to handle scrolling easier? No, absolute + page coords is better if grid scrolls.
    // CSS .grid-highlight-box handles position absolute.
    // We'll trust CSS but ensure z-index in CSS is high.

    document.body.appendChild(highlight);
    console.log('Grid Highlight Initialized'); // Debug log

    let isVisible = false;

    document.addEventListener('mousemove', (e) => {
        // Show only if within body bounds (usually always)
        if (!isVisible) {
            highlight.style.display = 'block';
            isVisible = true;
        }

        // Snap to Grid (Page Coordinates)
        const snapX = Math.floor(e.pageX / gridSize) * gridSize;
        const snapY = Math.floor(e.pageY / gridSize) * gridSize;

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
