document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.button');
    const portfolioItems = document.querySelectorAll('.portfolio__single-section');
    const maxItemsToShow = 2; // Number of items to show per category (except 'all')

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            let shownCount = 0;

            portfolioItems.forEach(item => {
                if (filter === 'all') {
                    // Show all items if 'ALL' is selected
                    item.style.display = 'block';
                } else {
                    // Show or hide based on the category filter
                    if (item.classList.contains(filter)) {
                        // Only show a limited number of items for specific categories
                        if (shownCount < maxItemsToShow) {
                            item.style.display = 'block';
                            shownCount++;
                        } else {
                            item.style.display = 'none';
                        }
                    } else {
                        item.style.display = 'none'; // Hide the item if it doesn't match the filter
                    }
                }
            });
        });
    });
});
