import { show, hide } from "/assets/js/utils/visibility.js"
import { isEmptyOrSpaces, areAllEmptyOrSpaces, escapeHtml } from "/assets/js/utils/input.js"


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

const togglerVisual = document.getElementById('togglerVisual')
const txtVisual = document.getElementById('txtVisual')
const txtDryLeafLooks = document.getElementById('txtDryLeafLooks')
const txtLiquerColor = document.getElementById('txtLiquerColor')
const txtSpentLeafLooks = document.getElementById('txtSpentLeafLooks')

const togglerAroma = document.getElementById('togglerAroma')
const txtAroma = document.getElementById('txtAroma')
const txtDryLeaf = document.getElementById('txtDryLeaf')
const txtWetLeaf = document.getElementById('txtWetLeaf')
const txtCeramics = document.getElementById('txtCeramics')

const togglerTaste = document.getElementById('togglerTaste')
const txtTaste = document.getElementById('txtTaste')
const txtEarlyTaste = document.getElementById('txtEarlyTaste')
const txtLaterTaste = document.getElementById('txtLaterTaste')
const txtTexture = document.getElementById('txtTexture')
const txtAftertaste = document.getElementById('txtAftertaste')

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
            '<div class="review__user">' +
                '<img class="review__user__icon" src="' + data.user.photoURL + '">' +
                '<span class="review__user__name">' + data.user.name + '</span>' +
            '</div>' +
            '<div class="review__content">' +
                generateReviewMarkup(data) +
            '</div>' +
        '</div>'
}

export function getReviewInput() {
    let data = {
        "tea": tea,
        "bundle": bundle,
        "showDetailedVisuals": togglerVisual.checked,
        "simpleVisual": txtVisual.value,
        "detailedVisual": {
            "dryLeafLooks": txtDryLeafLooks.value,
            "liquerColor": txtLiquerColor.value,
            "leafColor": txtSpentLeafLooks.value,
        },
        "showDetailedAroma": togglerAroma.checked,
        "simpleAroma": txtAroma.value,
        "detailedAroma": {
            "dryLeaf": txtDryLeaf.value,
            "wetLeaf": txtWetLeaf.value,
            "ceramics": txtCeramics.value,
        },
        "showDetailedTaste": togglerTaste.checked,
        "simpleTaste": txtTaste.value,
        "detailedTaste": {
            "earlyTaste": txtEarlyTaste.value,
            "laterTaste": txtLaterTaste.value,
            "texture": txtTexture.value,
            "aftertaste": txtAftertaste.value,
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
            secNewReview.scrollIntoView({ behavior: "smooth"})
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
        showDetails: data.showDetailedVisuals,
        simpleNotes: data.simpleVisual,
        detailedNotes: [ 
            data.detailedVisual.dryLeafLooks,
            data.detailedVisual.liquerColor, 
            data.detailedVisual.leafColor 
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
            data.detailedTaste.earlyTaste, 
            data.detailedTaste.laterTaste, 
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

    if ((!showDetails && isEmptyOrSpaces(simpleNotes)) || 
        (showDetails && areAllEmptyOrSpaces(...detailedNotes))) {
        return ''
    }

    let markup = '<div class="data-table--outer">' +
        '<div class="data-table__attribute--outer">' + outerAttribute + '</div>' + 
        '<div class="data-table--inner">'

    if (showDetails) {
        for (let i = 0; i < detailedNotes.length; i++) {
            if (!isEmptyOrSpaces(detailedNotes[i])) {
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
    if (togglerVisual.checked) {
        if (hasInput(txtDryLeafLooks, txtLiquerColor, txtSpentLeafLooks))
            return true
    }
    else {
        if (!isEmptyOrSpaces(txtVisual.value))
            return true
    }

    if (togglerAroma.checked) {
        if (hasInput(txtDryLeaf, txtWetLeaf, txtCeramics))
            return true
    }
    else {
        if (!isEmptyOrSpaces(txtAroma.value))
            return true
    }

    if (togglerTaste.checked) {
        if (hasInput(txtEarlyTaste, txtLaterTaste, txtTexture, txtAftertaste))
            return true
    }
    else {
        if (!isEmptyOrSpaces(txtTaste.value))
            return true
    }
    
    return false
}

function hasInput(...areas) {
    let result = false
    areas.forEach(area => { result = result || !isEmptyOrSpaces(area.value) })

    return result
}

function expandReviewForm() {
    hide(btnOpenReview)
    show(secNewReview, btnCancelReview, btnPreview)
    secNewReview.scrollIntoView({ behavior: "smooth"})
}

function goBackToInput() {
    hide(divPreview, btnBack, btnSendReview)
    show(formReview, btnCancelReview, btnPreview)
    secNewReview.scrollIntoView({ behavior: "smooth"})
}

function cancelReview() {
    hide(secNewReview, btnCancelReview, btnPreview)
    show(btnOpenReview)
    resetInput()
    titleReviews.scrollIntoView({ behavior: "smooth" })
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

btnOpenReview.addEventListener("click", expandReviewForm)
btnBack.addEventListener("click", goBackToInput)
btnCancelReview.addEventListener("click", cancelReview)