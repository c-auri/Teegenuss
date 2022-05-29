import { isExpanded, expand, collapse } from "/assets/js/utils/visibility.js";

const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');

navToggle.addEventListener('click', () => {
    if (isExpanded(primaryNav)) {
        collapse(primaryNav)
        navToggle.setAttribute("aria-expanded", "false");
        document.getElementsByTagName('body')[0].style.overflow = 'visible'
    } else {
        expand(primaryNav)
        navToggle.setAttribute("aria-expanded", "true");
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
});