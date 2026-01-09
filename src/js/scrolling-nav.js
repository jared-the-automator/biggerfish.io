
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollY = window.scrollY;

    // Add transition for smooth roll-up
    header.style.transition = 'transform 0.3s ease-in-out';

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Show/Hide threshold (e.g., header height)
        const threshold = 100;

        if (currentScrollY > lastScrollY && currentScrollY > threshold) {
            // Scrolling Down -> Hide
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling Up -> Show
            header.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
    });
});
