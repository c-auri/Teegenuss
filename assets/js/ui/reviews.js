import { scrollTo, show, hide } from "/assets/js/utils/dom.js"
import { isNullOrWhitespace, areAllNullOrWhitespace, escapeHtml } from "/assets/js/utils/input.js"


const divTea = document.getElementById('divTea')
export const bundle = divTea.getAttribute("data-bundle")
export const tea = divTea.getAttribute("data-tea")

const titleReviews = document.getElementById('titleReviews')
const divReviews = document.getElementById('divReviews')
const pLoadMessage = document.getElementById('pLoadMessage')
const secNewReview = document.getElementById('secNewReview')
const formReview = document.getElementById('formReview')

const divPreview = document.getElementById('divPreview')
const divPreviewContent = document.getElementById('divPreviewContent')
const imgReviewer = document.getElementById('imgReviewer')
const spanReviewer =document.getElementById('spanReviewer')

const btnOpenReview = document.getElementById('btnOpenReview')
const btnCancelReview = document.getElementById('btnCancelReview')
const btnPreview = document.getElementById('btnPreview')
const btnBack = document.getElementById('btnBack')
export const btnSendReview = document.getElementById('btnSendReview')

const togglerLooks = document.getElementById('togglerLooks')
const txtLooks = document.getElementById('txtLooks')
const txtLooksDryLeaf = document.getElementById('txtLooksDryLeaf')
const txtLooksLiquer = document.getElementById('txtLooksLiquer')
const txtLooksSpentLeaf = document.getElementById('txtLooksSpentLeaf')

const togglerAroma = document.getElementById('togglerAroma')
const txtAroma = document.getElementById('txtAroma')
const txtAromaDryLeaf = document.getElementById('txtAromaDryLeaf')
const txtAromaWetLeaf = document.getElementById('txtAromaWetLeaf')
const txtAromaCeramics = document.getElementById('txtAromaCeramics')

const togglerTaste = document.getElementById('togglerTaste')
const txtTaste = document.getElementById('txtTaste')
const txtTasteEarly = document.getElementById('txtTasteEarly')
const txtTasteLater = document.getElementById('txtTasteLater')
const txtTasteTexture = document.getElementById('txtTasteTexture')
const txtTasteAfter = document.getElementById('txtTasteAfter')

export function enableReviewInput(user) {
    imgReviewer.src = user.photoURL
    spanReviewer.innerHTML = user.displayName
    show(btnOpenReview)
    btnPreview.addEventListener("click", showPreview(user))
}

export function disableReviewInput() {
    imgReviewer.src = "/assets/img/icons/user.png"
    spanReviewer.innerHTML = ''
    collapseReviewForm()
    hide(btnOpenReview)
    btnPreview.removeEventListener("click", showPreview())
}

export function clearReviews() {
    hide(pLoadMessage)
    divReviews.innerHTML = ''
}

export function showNoReviewsYet() {
    pLoadMessage.textContent = 'Noch kein Bericht vorhanden.'
    show(pLoadMessage)
}

export function renderReview(data) {
    divReviews.innerHTML += 
        '<div class="review">' +
            '<div class="review__header">' +
                '<img class="review__icon" src="' + data.user.photoURL + '">' +
                '<div class="review__metadata">' +
                    '<span class="review__username">' + data.user.name + '</span>' +
                    '<span class="review__date">am ' + generateDateString(data.posted) + '</span>' +
                '</div>' +
            '</div>' +
            '<div class="review__panel">' +
                '<div class="review__content">' +
                    generateReviewMarkup(data) +
                '</div>' +
            '</div>' +
        '</div>'
}

function generateDateString(firestoreTimestamp) {
    const date = firestoreTimestamp.toDate()
    return date.toLocaleDateString('de-DE', {})
}

export function getReviewInput() {
    let data = {
        "tea": tea,
        "bundle": bundle,
        "showDetailedLooks": togglerLooks.checked,
        "simpleLooks": txtLooks.value,
        "detailedLooks": {
            "dryLeaf": txtLooksDryLeaf.value,
            "liquer": txtLooksLiquer.value,
            "spentLeaf": txtLooksSpentLeaf.value,
        },
        "showDetailedAroma": togglerAroma.checked,
        "simpleAroma": txtAroma.value,
        "detailedAroma": {
            "dryLeaf": txtAromaDryLeaf.value,
            "wetLeaf": txtAromaWetLeaf.value,
            "ceramics": txtAromaCeramics.value,
        },
        "showDetailedTaste": togglerTaste.checked,
        "simpleTaste": txtTaste.value,
        "detailedTaste": {
            "early": txtTasteEarly.value,
            "later": txtTasteLater.value,
            "texture": txtTasteTexture.value,
            "aftertaste": txtTasteAfter.value,
        }
    }

    return data
}

function showPreview() {
    return () => {
        if (!hasRelevantInput()) {
            alert('Bitte beschreibe mindestens ein Aspekt des Tees.')
        }
        else {
            const data = getReviewInput()
            divPreviewContent.innerHTML = generateReviewMarkup(data)
            hide(formReview, btnCancelReview, btnPreview)
            show(divPreview, btnBack, btnSendReview)
            scrollToReviewSection("new")
        }
    }
}

function generateReviewMarkup(data) {
    const visualMarkup = generateMarkup({
        outerAttribute: "Aussehen",
        innerAttributes: [ 
            "trockenes Blatt", 
            "Aufgussfarbe", 
            "verbrauchte Blätter" 
        ],
        showDetails: data.showDetailedLooks,
        simpleNotes: data.simpleLooks,
        detailedNotes: [ 
            data.detailedLooks.dryLeaf,
            data.detailedLooks.liquer, 
            data.detailedLooks.spentLeaf, 
        ]})

    const aromaMarkup = generateMarkup({
        outerAttribute: "Aroma",
        innerAttributes: [ 
            "trockenes Blatt", 
            "feuchtes Blatt", 
            "Geschirr" 
        ],
        showDetails: data.showDetailedAroma,
        simpleNotes: data.simpleAroma,
        detailedNotes: [ 
            data.detailedAroma.dryLeaf, 
            data.detailedAroma.wetLeaf, 
            data.detailedAroma.ceramics 
        ]})

    const tasteMarkup = generateMarkup({
        outerAttribute: "Geschmack",
        innerAttributes: [ 
            "ersten Aufgüsse", 
            "spätere Aufgüsse", 
            "Textur", 
            "Nachgeschmack" 
        ],
        showDetails: data.showDetailedTaste,
        simpleNotes: data.simpleTaste,
        detailedNotes: [ 
            data.detailedTaste.early, 
            data.detailedTaste.later, 
            data.detailedTaste.texture, 
            data.detailedTaste.aftertaste 
        ]})

    return visualMarkup + aromaMarkup + tasteMarkup
}

function generateMarkup({ 
    outerAttribute, 
    innerAttributes, 
    showDetails, 
    simpleNotes, 
    detailedNotes }) {
    if (innerAttributes.length != detailedNotes.length) {
        console.log('Internal error: Mismatching argument lengths in generateMarkup')
        return
    }

    if ((!showDetails && isNullOrWhitespace(simpleNotes)) || 
        (showDetails && areAllNullOrWhitespace(...detailedNotes))) {
        return ''
    }

    let markup = '<div class="data-table--outer">' +
        '<div class="data-table__attribute--outer">' + outerAttribute + '</div>' + 
        '<div class="data-table--inner">'

    if (showDetails) {
        for (let i = 0; i < detailedNotes.length; i++) {
            if (!isNullOrWhitespace(detailedNotes[i])) {
                markup += '<div class="data-table__attribute--inner">' +
                    innerAttributes[i] +
                    '</div>' + 
                    '<div class="data-table__value">' +
                    escapeHtml(detailedNotes[i]) +
                    '</div>'
            }
        }
    } else {
        markup += '<div class="data-table__attribute--inner"></div>' + 
            '<div class="data-table__value">' + escapeHtml(simpleNotes) + '</div>' 
    }

    markup += '</div></div>'

    return markup
}

function hasRelevantInput() {
    if (togglerLooks.checked) {
        if (hasInput(txtLooksDryLeaf, txtLooksLiquer, txtLooksSpentLeaf))
            return true
    }
    else {
        if (!isNullOrWhitespace(txtLooks.value))
            return true
    }

    if (togglerAroma.checked) {
        if (hasInput(txtAromaDryLeaf, txtAromaWetLeaf, txtAromaCeramics))
            return true
    }
    else {
        if (!isNullOrWhitespace(txtAroma.value))
            return true
    }

    if (togglerTaste.checked) {
        if (hasInput(txtTasteEarly, txtTasteLater, txtTasteTexture, txtTasteAfter))
            return true
    }
    else {
        if (!isNullOrWhitespace(txtTaste.value))
            return true
    }
    
    return false
}

function hasInput(...areas) {
    let result = false
    areas.forEach(area => { result = result || !isNullOrWhitespace(area.value) })

    return result
}

function expandReviewForm() {
    hide(btnOpenReview)
    show(secNewReview, btnCancelReview, btnPreview)
    scrollToReviewSection("new")
}

function goBackToInput() {
    hide(divPreview, btnBack, btnSendReview)
    show(formReview, btnCancelReview, btnPreview)
    scrollToReviewSection("new")
}

function cancelReview() {
    hide(secNewReview, btnCancelReview, btnPreview)
    show(btnOpenReview)
    resetInput()
}

function collapseReviewForm() {
    hide(secNewReview, btnCancelReview, btnPreview)
    show(btnOpenReview)
    resetInput()
}

function resetInput() {
    for (const area of document.getElementsByClassName('review-input__textarea')) {
        area.value = ''
    }
}

export function scrollToReviewSection(position) {
    switch (position) {
        default:
        case "start":
            scrollTo(divReviews)
            break
        case "new": 
            scrollTo(secNewReview)
            break
    }
}

btnOpenReview.addEventListener("click", expandReviewForm)
btnBack.addEventListener("click", goBackToInput)
btnCancelReview.addEventListener("click", cancelReview)