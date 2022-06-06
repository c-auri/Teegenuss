import { AuthErrorCodes } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js'
import { isEmptyOrSpaces, emailIsValid } from '/assets/js/utils/input.js';
import { UserbaseErrorCodes } from '/assets/js/firebase/userbase.js';
import { 
    showOverflow, 
    isHidden,
    show,
    hide,
} from "/assets/js/utils/visibility.js";


// Auth dialog
export const dlgAuth = document.querySelector('#dlgAuth')
const backdrop = document.querySelector('body')
const formAuth = document.querySelector('#formAuth')
const spanError = document.querySelector('#spanError')
const spanSuccess = document.querySelector('#spanSuccess')
const btnCloseAuth = document.querySelector('#btnCloseAuth')

// Login tab
const tabLogin = document.querySelector('#tabLogin')
const formLogin = document.querySelector('#formLogin')
export const txtEmail = document.querySelector('#txtEmail')
export const txtPassword = document.querySelector('#txtPassword')
export const btnLogin = document.querySelector('#btnLogin')

// Reset tab
export const btnForgot = document.querySelector('#btnForgot')
export const formReset = document.querySelector('#formReset')
export const txtReset = document.querySelector('#txtReset')
export const btnReset = document.querySelector('#btnReset')

// Register tab
const tabRegister = document.querySelector('#tabRegister')
const formRegister = document.querySelector('#formRegister')
export const txtRegisterName = document.querySelector('#txtRegisterName')
export const txtRegisterEmail = document.querySelector('#txtRegisterEmail')
export const txtRegisterPassword = document.querySelector('#txtRegisterPassword')
export const txtRegisterRepeat = document.querySelector('#txtRegisterRepeat')
export const btnRegister = document.querySelector('#btnRegister')

export function showAuthModal() {
    dlgAuth.showModal()
    showLogin()
}

export function showSuccess(message) {
    hide(formLogin, btnLogin, formReset, btnReset, formRegister, btnRegister)
    spanSuccess.textContent = message
    show(spanSuccess)
}

export function validateRegistration(name, email, password, repeat) {
    return getFirstDefined(
        validateName(name),
        validateEmail(email), 
        validatePassword(password), 
        validateRepeat(password, repeat))
}

export function validateLogin(email, password) {
    return getFirstDefined(
        validateEmail(email), 
        validatePassword(password))
}

export function validateReset(email) {
    return validateEmail(email)
}

export function handle(error) {
    switch (error.code) {
        case InputErrorCodes.USERNAME_EMPTY:
            spanError.textContent = 'Benutzername darf nicht leer sein'
            break
        case UserbaseErrorCodes.USERNAME_TAKEN:
            spanError.textContent = 'Benutzername bereits vergeben'
            break
        case UserbaseErrorCodes.INTERNAL_ERROR:
            spanError.textContent = 'Interner Fehler'
            break
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

const InputErrorCodes = {
    USERNAME_EMPTY: 'USERNAME_EMPTY',
    INVALID_EMAIL: 'INVALID_EMAIL',
    NO_PASSWORD: 'NO_PASSWORD',
    PASSWORD_MISMATCH: 'PASSWORD_MISMATCH',
}

function validateName(name) {
    if (isEmptyOrSpaces(name)) {
        return { code: InputErrorCodes.USERNAME_EMPTY }
    }
}

function validateEmail(email) {
    if (!emailIsValid(email)) {
        return { code: InputErrorCodes.INVALID_EMAIL }
    }
}

function validatePassword(password) {
    if (password === '') {
        return { code: InputErrorCodes.NO_PASSWORD }
    }
}

function validateRepeat(password, repeat) {
    if (password !== repeat) {
        return { code: InputErrorCodes.PASSWORD_MISMATCH }
    }
}

function getFirstDefined(...errors) {
    for (const error of errors) {
        if (error) {
            return error
        }
    }
}

function closeAuth() {
    dlgAuth.close()
    resetForm()
}

function closeOnBackdropClick(event) {
    if (event.target === dlgAuth) {
        closeAuth();
    }
}

function showLogin() {
    if (isHidden(formLogin)) {
        resetForm()
        setCurrent(tabLogin)
        unsetCurrent(tabRegister)
        show(formLogin, btnLogin)
        hide(formRegister, btnRegister, formReset, btnReset)
        txtEmail.focus()
    }
}

function showReset() {
    resetForm()
    unsetCurrent(tabLogin, tabRegister)
    show(formReset, btnReset)
    hide(formLogin, btnLogin, formRegister, btnRegister)
    txtReset.focus()
}

function showRegister() {
    if (isHidden(formRegister)) {
        resetForm()
        setCurrent(tabRegister)
        unsetCurrent(tabLogin)
        show(formRegister, btnRegister)
        hide(formLogin, btnLogin, formReset, btnReset)
        txtRegisterName.focus()
    }
}

function resetForm() {
    for (const element of formAuth.elements) {
        element.value = ''
    }

    spanError.textContent = 'Fehler'
    hide(spanError)

    spanSuccess.textContent = 'Erfolg'
    hide(spanSuccess)
}

function setCurrent(element) {
    element.classList.add('auth__tab--current')
}

function unsetCurrent(...elements) {
    for (const element of elements) {
        element.classList.remove('auth__tab--current')
    }
}

dlgAuth.addEventListener("close", () => showOverflow(backdrop))
dlgAuth.addEventListener("click", event => closeOnBackdropClick(event))

btnCloseAuth.addEventListener("click", closeAuth)

tabLogin.addEventListener("click", showLogin)
tabRegister.addEventListener("click", showRegister)
btnForgot.addEventListener("click", showReset)