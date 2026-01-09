// Component loader for header and footer
document.addEventListener('DOMContentLoaded', function () {
    // Force scroll to top on refresh
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Header logic (dropdowns, scrolling)
    initializeHeader();
});

// Initialize header dropdown behavior
function initializeHeader() {
    // Fix for Anchor Scrolling within Snap Container
    // Fix: Explicit JS Smooth Scroll for Navigation
    // This allows page load to be instant (no stutter) while nav clicks are smooth
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Use precise window scrolling to avoid snap alignment quirks
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const headerOffset = 0; // Adjust if header becomes sticky/fixed in future

                window.scrollTo({
                    top: elementPosition - headerOffset,
                    behavior: 'smooth'
                });

                // Optional: Update URL without jumping
                history.pushState(null, null, '#' + targetId);
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
    // Hamburger Menu Logic
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function (e) {
            e.preventDefault();
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}
