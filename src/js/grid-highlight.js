document.addEventListener('DOMContentLoaded', () => {
    // Only run on pages with blueprint-grid
    if (!document.body.classList.contains('blueprint-grid')) return;

    const gridSize = 60; // Must match CSS

    // Create Highlight Element
    const highlight = document.createElement('div');
    highlight.classList.add('grid-highlight-box');
    document.body.appendChild(highlight);

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
