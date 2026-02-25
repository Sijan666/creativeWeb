
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.module-card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const description = this.querySelector('.module-content');
            const icon = this.querySelector('.fa-solid.fa-angle-down, .fa-solid.fa-angle-up');
            if (description) {
                description.classList.toggle('hidden');
            }
            if (icon && description) {
                if (description.classList.contains('hidden')) {
                    icon.classList.replace('fa-angle-up', 'fa-angle-down');
                } else {
                    icon.classList.replace('fa-angle-down', 'fa-angle-up');
                }
            }
        });
    });
});
