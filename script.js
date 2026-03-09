// Add interaction to the menu

document.addEventListener('DOMContentLoaded', function() {
    const menuList = document.getElementById('menu-list');
    const showPricesBtn = document.getElementById('show-prices');

    // Toggle price display
    showPricesBtn.addEventListener('click', () => {
        const items = menuList.querySelectorAll('li');
        items.forEach(item => {
            const price = item.getAttribute('data-price');
            if (item.textContent.includes('$')) {
                // hide price
                item.textContent = item.textContent.replace(/ \$[0-9\.]+/, '');
            } else {
                item.textContent = item.textContent + ` - $${price}`;
            }
        });
    });

    // Simple alert when clicking a menu item
    menuList.addEventListener('click', event => {
        if (event.target.tagName === 'LI') {
            alert(`You selected: ${event.target.textContent}`);
        }
    });
});