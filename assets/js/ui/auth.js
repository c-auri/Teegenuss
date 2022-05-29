import { 
    showOverflow, 
    isHidden,
    toggleVisibility
 } from "/assets/js/utils/visibility.js";

const body = document.querySelector('body')
export const dlgAuth = document.querySelector('#dlgAuth')

const btnCloseAuth = document.querySelector('#btnCloseAuth')
const tabLogin = document.querySelector('#tabLogin')
const tabRegister = document.querySelector('#tabRegister')
const formLogin = document.querySelector('#formLogin')
const formRegister = document.querySelector('#formRegister')
const btnLogin = document.querySelector('#btnLogin')
const btnRegister = document.querySelector('#btnRegister')

function toggleCurrent(...elements) {
    for (const element of elements) {
        element.classList.toggle('auth__tab--current')
    }
}

function showForm(form) {
    if (isHidden(form)) {
        toggleCurrent(tabLogin, tabRegister)
        toggleVisibility(formLogin, formRegister, btnLogin, btnRegister)
    }
}

function closeOnBackdropClick(event) {
    if (event.target === dlgAuth) {
        dlgAuth.close();
    }
}

dlgAuth.addEventListener("close", () => showOverflow(body))
dlgAuth.addEventListener("click", event => closeOnBackdropClick(event))

btnCloseAuth.addEventListener("click", () => dlgAuth.close())

tabLogin.addEventListener("click", () => showForm(formLogin))
tabRegister.addEventListener("click", () => showForm(formRegister))