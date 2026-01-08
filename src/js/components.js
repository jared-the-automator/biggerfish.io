// Component loader for header and footer
document.addEventListener('DOMContentLoaded', function () {
    // Header logic (dropdowns, scrolling)
    initializeHeader();
});

// Initialize header dropdown behavior
function initializeHeader() {
    // Fix for Anchor Scrolling within Snap Container
    // Standard browser anchor scrolling now handled by CSS scroll-behavior: smooth

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
