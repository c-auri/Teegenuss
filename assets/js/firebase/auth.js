import { auth } from "/assets/js/firebase/app.js";

import {
    onAuthStateChanged,
    sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"

import {
    createNamedUserWithEmailAndPassword,
    signInWithPassword
} from "/assets/js/firebase/userbase.js"

import {
    txtEmail,
    txtPassword,
    btnLogin,
    txtReset,
    btnReset,
    txtRegisterName,
    txtRegisterEmail,
    txtRegisterPassword,
    txtRegisterRepeat,
    btnRegister,
    validateLogin,
    validateReset,
    validateRegistration,
    handle,
    showSuccess,
} from "/assets/js/ui/auth.js"

import { showLinkToProfile, showLinkToAuth } from "/assets/js/ui/navigation.js"


const createUser = async () => {
    const name = txtRegisterName.value
    const email = txtRegisterEmail.value
    const password = txtRegisterPassword.value
    const repeat = txtRegisterRepeat.value

    const error = validateRegistration(name, email, password, repeat)

    if (error) {
        handle(error)
        return
    }

    await createNamedUserWithEmailAndPassword(name, email, password)
    .then(() => window.location.replace('/profil'))
    .catch((error) => handle(error))
}

const loginEmailPassword = async () => {
    const email = txtEmail.value
    const password = txtPassword.value

    const error = validateLogin(email, password)

    if (error) {
        handle(error)
        return
    }
    
    await signInWithPassword(email, password)
    .then(() => window.location.replace('/profil'))
    .catch((error) => handle(error))
}

const resetPassword = async () => {
    const email = txtReset.value

    const error = validateReset(email)

    if (error) {
        handle(error)
        return
    }

    sendPasswordResetEmail(auth, email)
    .then(() => showSuccess('Email zur Passwortrücksetzung versendet'))
    .catch((error) => handle(error))
}

function onEnter(event, func) {
    if (event.key === 'Enter') {
        func()
    }
}

const showLinkToProfileOrAuth = async () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            showLinkToProfile(user)
        }
        else {
            showLinkToAuth()
        }
    })
}

showLinkToProfileOrAuth()

btnLogin.addEventListener("click", loginEmailPassword)
txtPassword.addEventListener("keypress", (event) => onEnter(event, loginEmailPassword))

btnReset.addEventListener("click", resetPassword)
txtReset.addEventListener("keypress", (event) => onEnter(event, resetPassword))

btnRegister.addEventListener("click", createUser)
txtRegisterRepeat.addEventListener("keypress", (event) => onEnter(event, createUser))