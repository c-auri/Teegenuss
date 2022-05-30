import { 
    isExpanded, 
    expand, 
    collapse, 
    showOverflow, 
    hideOverflow,
 } from "/assets/js/utils/visibility.js";

import { show, hide } from "/assets/js/utils/visibility.js"
import { dlgAuth } from "/assets/js/ui/auth.js";

const body = document.querySelector('body')
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.querySelector('.primary-nav');
const btnOpenAuth = document.querySelector('#btnOpenAuth')
const aProfile = document.getElementById('aProfile')
const spanProfile = document.getElementById('spanProfile')
const imgProfile = document.getElementById('imgProfile')

export function showProfile(user) {
    spanProfile.textContent = user.displayName
    hide(btnOpenAuth)
    show(aProfile)
}

export function showAuth() {
    hide(aProfile)
    show(btnOpenAuth)
    aProfile.textContent = "Profil"
}

function collapseNav() {
    collapse(primaryNav)
    navToggle.setAttribute("aria-expanded", "false");
    showOverflow(body)
}

function expandNav() {
    expand(primaryNav)
    navToggle.setAttribute("aria-expanded", "true");
    hideOverflow(body)
}

navToggle.addEventListener('click', () => {
    if (isExpanded(primaryNav)) {
        collapseNav()
    } else {
        expandNav()
    }
});

btnOpenAuth.addEventListener("click", () => {
    collapseNav()
    hideOverflow(body)
    dlgAuth.showModal()
})