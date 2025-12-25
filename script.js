document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    const packages = document.querySelectorAll('.package-item');

    packages.forEach(pkg => {
        const header = pkg.querySelector('.package-header');
        
        header.addEventListener('click', () => {
            pkg.classList.toggle('active');
        });
    });

});