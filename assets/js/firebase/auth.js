import { auth } from "/assets/js/firebase/app.js";
  
import { 
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    createUserWithEmailAndPassword,
    updateProfile,
    sendEmailVerification,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"

import {
    InputErrorCodes,
    showError,
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
    showSuccess,
} from "/assets/js/ui/auth.js"

import { emailIsValid } from "/assets/js/utils/validation.js"

const createUser = async () => {
    const name = txtRegisterName.value
    const email = txtRegisterEmail.value
    const password = txtRegisterPassword.value
    const repeat = txtRegisterRepeat.value

    if (!emailIsValid(email)) {
        showError({ code: InputErrorCodes.INVALID_EMAIL })
        return
    }

    if (password === '') {
        showError({ code: InputErrorCodes.NO_PASSWORD })
        return
    }

    if (password !== repeat){
        showError({ code: InputErrorCodes.PASSWORD_MISMATCH })
        return
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then((credentials) => {
        updateProfile(credentials.user, { displayName: name, photoURL: "/assets/img/icons/user.png" })
        sendEmailVerification(credentials.user)
    })
    .then(() => window.location.replace('/profil'))
    .catch((error) => showError(error))
}

const loginEmailPassword = async () => {
    const email = txtEmail.value
    const password = txtPassword.value

    if (!emailIsValid(email)) {
        showError({ code: InputErrorCodes.INVALID_EMAIL })
        return
    }

    if (password === '') {
        showError({ code: InputErrorCodes.NO_PASSWORD })
        return
    }

    signInWithEmailAndPassword(auth, email, password)
    .then(() => window.location.replace('/profil'))
    .catch((error) => showError(error))
}

const resetPassword = async () => {
    const email = txtReset.value

    if (!emailIsValid(email)) {
        showError({ code: InputErrorCodes.INVALID_EMAIL })
        return
    }

    sendPasswordResetEmail(auth, email)
    .then(() => showSuccess('Email zur Passwortrücksetzung versendet'))
    .catch((error) => showError(error))
}

function onEnter(event, func) {
    if (event.key === 'Enter') {
        func()
    }
}

btnLogin.addEventListener("click", loginEmailPassword)
txtPassword.addEventListener("keypress", (event) => onEnter(event, loginEmailPassword))

btnReset.addEventListener("click", resetPassword)
txtReset.addEventListener("keypress", (event) => onEnter(event, resetPassword))

btnRegister.addEventListener("click", createUser)
txtRegisterRepeat.addEventListener("keypress", (event) => onEnter(event, createUser))