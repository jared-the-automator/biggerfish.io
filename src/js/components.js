// Component loader for header and footer
document.addEventListener('DOMContentLoaded', function () {
    // Header logic (dropdowns, scrolling)
    initializeHeader();
});

// Initialize header dropdown behavior
function initializeHeader() {
    // Fix for Anchor Scrolling within Snap Container
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');
    const container = document.querySelector('.snap-container');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.includes('#')) {
                const parts = href.split('#');
                const path = parts[0];
                const hash = parts[1];

                // Check if target is on the current page
                const currentPath = window.location.pathname.split('/').pop() || 'index.html';
                const isCurrentPage = (!path || path === currentPath || (path === 'index.html'));

                if (isCurrentPage && hash) {
                    const target = document.getElementById(hash);
                    if (target && container) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth' });
                        // history.pushState(null, null, '#' + hash);
                    }
                }
            }
        });
    });

    // Existing Mobile/Dropdown Logic (if any elements exist)
    const dropdown = document.querySelector('.nav-dropdown');
    const toggle = document.querySelector('.nav-dropdown-toggle');
    const menu = document.querySelector('.nav-dropdown-menu');

    if (toggle && menu) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            menu.classList.toggle('show');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!dropdown.contains(e.target)) {
                menu.classList.remove('show');
            }
        });
    }
}
