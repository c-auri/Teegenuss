import { AuthErrorCodes } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js'

import { 
    showOverflow, 
    isHidden,
    toggleVisibility,
    show
 } from "/assets/js/utils/visibility.js";

const body = document.querySelector('body')
export const dlgAuth = document.querySelector('#dlgAuth')
const spanError = document.querySelector('#spanError')
const btnCloseAuth = document.querySelector('#btnCloseAuth')

const tabLogin = document.querySelector('#tabLogin')
const formLogin = document.querySelector('#formLogin')
export const txtEmail = document.querySelector('#txtEmail')
export const txtPassword = document.querySelector('#txtPassword')
export const btnLogin = document.querySelector('#btnLogin')

const tabRegister = document.querySelector('#tabRegister')
const formRegister = document.querySelector('#formRegister')
export const txtRegisterName = document.querySelector('#txtRegisterName')
export const txtRegisterEmail = document.querySelector('#txtRegisterEmail')
export const txtRegisterPassword = document.querySelector('#txtRegisterPassword')
export const txtRegisterRepeat = document.querySelector('#txtRegisterRepeat')
export const btnRegister = document.querySelector('#btnRegister')

export const InputErrorCodes = {
    INVALID_EMAIL: 'INVALID_EMAIL',
    NO_PASSWORD: 'NO_PASSWORD',
    PASSWORD_MISMATCH: 'PASSWORD_MISMATCH',
}

export function showError(error) {
    switch (error.code) {
        case InputErrorCodes.INVALID_EMAIL:
        case AuthErrorCodes.INVALID_EMAIL:
        case AuthErrorCodes.USER_DELETED:
            spanError.textContent = 'Unzulässige Email'
            break
        case InputErrorCodes.NO_PASSWORD:
            spanError.textContent = 'Fehlendes Passwort'
            break
        case AuthErrorCodes.EMAIL_EXISTS:
            spanError.textContent = 'Email bereits vergeben'
            break
        case AuthErrorCodes.INVALID_PASSWORD:
            spanError.textContent = 'Falsches Passwort'
            break
        case AuthErrorCodes.WEAK_PASSWORD:
            spanError.textContent = 'Passwort zu kurz'
            break
        case InputErrorCodes.PASSWORD_MISMATCH:
            spanError.textContent = 'Passwörter stimmen nicht überein'
            break
        default: 
            console.log(error)
            spanError.textContent = 'Unbekannter Fehler'
            break
    }

    show(spanError)
}

export function hideError() {
    spanError.textContent = 'Fehler'
    hideError(spanError)
}

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