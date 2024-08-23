document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        parent.classList.toggle('active');
        
        document.querySelectorAll('.faq-item').forEach(el => {
            if (el !== parent) {
                el.classList.remove('active');
            }
        });
    });
});
