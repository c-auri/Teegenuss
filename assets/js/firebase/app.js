import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js"
import { getAuth, connectAuthEmulator } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"
import { getFirestore, connectFirestoreEmulator } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"


const app = initializeApp({
    apiKey: "AIzaSyAF2X4muxdmP8crLOt0wtOZ-4Le-6qaGJo",
    authDomain: "projekt-teegenuss.firebaseapp.com",
    projectId: "projekt-teegenuss",
    storageBucket: "projekt-teegenuss.appspot.com",
    messagingSenderId: "923264482965",
    appId: "1:923264482965:web:ee613b12d8333988c0659c",
    measurementId: "G-J9PJK20EEL"
})

export const auth = getAuth(app)
export const firestore = getFirestore(app)

if (location.hostname === "localhost") {
    connectAuthEmulator(auth, "http://localhost:9099");
    connectFirestoreEmulator(firestore, 'localhost', 8080);
}