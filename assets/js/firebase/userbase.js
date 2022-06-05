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
    signInWithEmailAndPassword,
    updateProfile,
    signOut
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
    await synchronizeProfile(credentials.user)
    return credentials
}

export async function signInWithPassword(email, password) {
    await signInWithEmailAndPassword(auth, email, password)
    .then((credentials) => synchronizeProfile(credentials.user))
}

async function synchronizeProfile(user) {
    await getUserDetails(user)
    .then((details) => updateProfile(user, {
        displayName: details.name,
        photoURL: details.photoURL
    }))
    .catch(async (error) => {
        await signOut(auth)
        console.error(error)
        throw { code: UserbaseErrorCodes.INTERNAL_ERROR }
    })
}

async function getUserDetails(user) {
    const userReference = Document(firestore, "users", user.uid)
    const snapshot = await getDocument(userReference)
    return snapshot.data()
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