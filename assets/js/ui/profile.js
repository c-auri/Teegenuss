import { show } from "/assets/js/utils/dom.js"


const divWelcome = document.querySelector('#divWelcome')
const spanName = document.querySelector('#spanName')
const imgUser = document.querySelector('#imgUser')
const pUnverified = document.querySelector('#pUnverified')
const pVerified = document.querySelector('#pVerified')

export const btnLogout = document.querySelector('#btnLogout')

export function showProfile(user) {
    show(divWelcome)
    spanName.textContent = user.displayName
    imgUser.src = user.photoURL
    
    if (user.emailVerified) {
        show(pVerified)
    } else {
        show(pUnverified)
    }
}