const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');

navToggle.addEventListener('click', () => {
    const isExpanded = primaryNav.getAttribute("data-expanded") === "true";

    if (isExpanded) {
        primaryNav.setAttribute("data-expanded", "false");
        navToggle.setAttribute("aria-expanded", "false");
        document.getElementsByTagName('body')[0].style.overflow = 'visible'
    } else {
        primaryNav.setAttribute("data-expanded", "true");
        navToggle.setAttribute("aria-expanded", "true");
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
});