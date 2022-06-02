import { auth } from "/assets/js/firebase/app.js";
import { showProfile, showAuth } from "/assets/js/ui/navigation.js"
import { onAuthStateChanged, updateProfile } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"

const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            updateProfile(user, { photoURL: "/assets/img/icons/user.png" })
            showProfile(user)
        }
        else {
            showAuth()
        }
    })
}

monitorAuthState()