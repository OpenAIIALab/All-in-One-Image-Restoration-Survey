// Smooth scrolling to page anchors
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');

    for (const link of links) {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', smoothScroll);
        }
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const targetPosition = targetElement.offsetTop - 70;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
});