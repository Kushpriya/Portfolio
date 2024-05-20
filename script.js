document.addEventListener("DOMContentLoaded", function() {
    const socialIcons = document.querySelectorAll('.home-sci a');

    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const className = icon.querySelector('i').className;

            switch (className) {
                case 'bx bxl-facebook':
                    window.open('https://www.facebook.com/singhpriya03', '_blank');
                    break;
                case 'bx bxl-github':
                    window.open('https://github.com/Kushpriya', '_blank');
                    break;
                case 'bx bxl-linkedin':
                    window.open('https://www.linkedin.com/in/kushpriya/', '_blank');
                    break;
                case 'bx bxl-twitter':
                    window.open('https://twitter.com/kush_priya07', '_blank');
                    break;
                case 'bx bxl-youtube':
                    window.open('https://www.youtube.com/@kushpriya07', '_blank');
                    break;
                default:
                    break;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const target = link.getAttribute('data-target');
            pages.forEach(page => {
                if (page.id === target) {
                    page.style.display = 'block';
                } else {
                    page.style.display = 'none';
                }
            });
        });
    });
});