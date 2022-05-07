const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');

navToggle.addEventListener('click', () => {
    const isVisible = primaryNav.getAttribute("data-visible") === "true";

    if (isVisible) {
        primaryNav.setAttribute("data-visible", "false");
        setTimeout(
            () => { navToggle.setAttribute("aria-expanded", "false"); },
            350);
        document.getElementsByTagName('body')[0].style.overflow = 'visible'
    } else {
        primaryNav.setAttribute("data-visible", "true");
        setTimeout(
            () => { navToggle.setAttribute("aria-expanded", "true"); },
            350);
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
});