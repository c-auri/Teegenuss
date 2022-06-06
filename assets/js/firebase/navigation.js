import { auth } from "/assets/js/firebase/app.js";
import { showLinkToProfile, showLinkToAuth } from "/assets/js/ui/navigation.js"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"

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