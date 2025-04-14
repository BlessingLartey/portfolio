document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.button');
    const portfolioItems = document.querySelectorAll('.portfolio__single-section');
    const heroSection = document.querySelector('.hero-sec');
    const content = document.querySelector('.content');
    const maxItemsToShow = 2;

    // Hero scroll shrink effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            heroSection.classList.add('shrink');
            content.classList.add('shrink');
        } else {
            heroSection.classList.remove('shrink');
            content.classList.remove('shrink');
        }
    });

    // Portfolio filter logic
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');
            let shownCount = 0;

            portfolioItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = '';
                } else if (item.classList.contains(filter)) {
                    if (shownCount < maxItemsToShow) {
                        item.style.display = '';
                        shownCount++;
                    } else {
                        item.style.display = 'none';
                    }
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
