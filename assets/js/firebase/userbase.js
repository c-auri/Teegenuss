import { 
    doc as Document,
    getDoc as getDocument,
    writeBatch,
    serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"

import { 
    createUserWithEmailAndPassword,
    sendEmailVerification,
    deleteUser,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"

import { auth, firestore } from "/assets/js/firebase/app.js"


const defaultPhotoURL = "/assets/img/icons/user.png"

export const UserbaseErrorCodes = {
    USERNAME_TAKEN: 'USERNAME_TAKEN',
    INTERNAL_ERROR: 'INTERNAL_ERROR',
}

export async function isTaken(username) {
    const reference = Document(firestore, "usernames", username)
    const document = await getDocument(reference);
    return document.exists()
}

export async function createNamedUserWithEmailAndPassword(name, email, password) {
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
    await createUserbaseEntry(credentials.user, name)
    .catch((error) => {
        deleteIfExists(credentials.user)
        console.error(error)
        throw { code: UserbaseErrorCodes.INTERNAL_ERROR }
    })
    await sendEmailVerification(credentials.user)
    return credentials
}

async function createUserbaseEntry(user, username) {
    const userReference = Document(firestore, "users", user.uid)
    const nameReference = Document(firestore, "usernames", username)
    
    const userDetails = {
        "name": username,
        "photoURL": defaultPhotoURL,
        "registrationDate": serverTimestamp()
    }

    const batch = writeBatch(firestore)
    batch.set(userReference, userDetails)
    batch.set(nameReference, { uid: user.uid })
    await batch.commit()
}

async function deleteIfExists(user) {
    if (user) {
        deleteUser(user)
    }
}