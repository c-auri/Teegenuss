import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js"

import { 
    doc as Document,
    collection as Collection,
    query as Query,
    where,
    getDoc as getDocument,
    getDocs as getDocuments,
    setDoc as setDocument,
    serverTimestamp,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js"

import { auth, firestore } from "./app.js"
import { getUserDetails } from "./userbase.js"

import { 
    bundle,
    tea,
    enableReviewInput, 
    disableReviewInput,
    btnSendReview,
    getReviewInput,
    clearReviews,
    renderReview,
    showNoReviewsYet,
} from "/assets/js/ui/reviews.js"


let reviews = null

async function loadReviews() {
    const collection = Collection(firestore, "reviews")
    const query = Query(collection, where("tea", "==", tea))
    const snapshot = await getDocuments(query);
    reviews = await snapshot.docs.map((doc) => doc.data())
    render(reviews)
}

async function render(reviews) {
    clearReviews()
    if (reviews.length > 0) {
        for (const review of reviews) {
            renderReview(review)
        }
    } else {
        showNoReviewsYet()
    }
}

async function sendReview() {
    onAuthStateChanged(auth, async user => {
        if (user) {
            const reviewId = tea + '-' + user.uid
            const reference = Document(firestore, "reviews", reviewId)
            const data = await getReviewData(user)
            await setDocument(reference, data)
            .then(() => { 
                loadReviews()
                disableReviewInput()
            })
            .catch((error) => console.error("Error adding review: ", error))
        }
        else {
            console.log("Error: not logged in.")
        }
    })
}

async function getReviewData(user) {
    const userDetails = await getUserDetails(user)
    const data = getReviewInput()
    data.user = { 
        "uid": user.uid, 
        "name": userDetails.name, 
        "photoURL": userDetails.photoURL,
    }
    data.posted = serverTimestamp()
    return data
}

async function monitorAuthState() {
    onAuthStateChanged(auth, async user => {
        if (await isAllowedToReview(user)) {
            enableReviewInput(user)
        }
        else {
            disableReviewInput()
        }
    })
}

async function isAllowedToReview(user) {
    return user
        && user.emailVerified
        && await boughtBundle(user)
        && !hasExistingReview(user)
}

async function boughtBundle(user) {
    const document = Document(firestore, "bundles", bundle)
    const snapshot = await getDocument(document)
    return snapshot.data().buyers.includes(user.uid)
}

function hasExistingReview(user) {
    for (const review of reviews) {
        if (review.user.uid === user.uid) {
            return true
        }
    }
    return false
}

await loadReviews()
monitorAuthState()
btnSendReview.addEventListener("click", sendReview)