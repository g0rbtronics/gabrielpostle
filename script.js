document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const menuItems = document.querySelectorAll('.menu-item');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    // Toggle the main dropdown visibility
    const toggleDropdown = () => {
        dropdown.classList.toggle('active');
    };

    // Show/hide the secondary dropdown
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle the active state of the clicked menu item
            item.classList.toggle('active');
            
            // Close other secondary dropdowns
            menuItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // Add an event listener to the menu icon to toggle the main dropdown
    const menuIcon = document.querySelector('[data-dropdown-button]');
    menuIcon.addEventListener('click', toggleDropdown);
});
