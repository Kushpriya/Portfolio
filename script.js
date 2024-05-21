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

    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            sections.forEach(section => {
                if (section === targetSection) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});
