import { auth } from "/assets/js/firebase/app.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"
import { btnLogout, showProfile } from "/assets/js/ui/profile.js"

const logout = async () => {
    await signOut(auth)
}

const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            showProfile(user)
        }
        else {
            window.location.replace('/')
        }
    })
}

monitorAuthState()
btnLogout.addEventListener("click", logout)