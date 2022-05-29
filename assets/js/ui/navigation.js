import { isExpanded, expand, collapse, showOverflow, hideOverflow } from "/assets/js/utils/visibility.js";

const body = document.querySelector('body')
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');

navToggle.addEventListener('click', () => {
    if (isExpanded(primaryNav)) {
        collapse(primaryNav)
        navToggle.setAttribute("aria-expanded", "false");
        showOverflow(body)
    } else {
        expand(primaryNav)
        navToggle.setAttribute("aria-expanded", "true");
        hideOverflow(body)
    }
});