import { show, hide } from "/assets/js/utils/visibility.js"
import { mod } from "/assets/js/utils/math.js"


// --------- Toggler ---------- //

const togglers = document.getElementsByClassName('toggler')

for (const toggler of togglers) {
    const idLabel = toggler.getAttribute("data-label-id")
    const idUncheckedTarget = toggler.getAttribute("data-target-unchecked")
    const idCheckedTarget = toggler.getAttribute("data-target-checked")
    
    const label = document.getElementById(idLabel)
    const uncheckedTarget = document.getElementById(idUncheckedTarget)
    const checkedTarget = document.getElementById(idCheckedTarget)

    showTarget()
    toggler.addEventListener('change', () => showTarget());


    function showTarget() {
        if (toggler.checked) {
            show(checkedTarget)
            hide(uncheckedTarget)
            label.innerHTML = toggler.getAttribute("data-label-text-checked")
        }
        else {
            show(uncheckedTarget)
            hide(checkedTarget)
            label.innerHTML = toggler.getAttribute("data-label-text-unchecked")
        }
    }
}

// -------- Slideshow --------- //

const slides = document.getElementsByClassName("slide");
const prevButtons = document.getElementsByClassName('slideshow-prev')
const nextButtons = document.getElementsByClassName('slideshow-next')

function showSlide(position) {
    hide(...slides)
    show(slides[position])
}

for (let i = 0; i < slides.length; i++) {
    prevButtons[i].addEventListener("click", () => showSlide(mod(i-1, slides.length)))
    nextButtons[i].addEventListener("click", () => showSlide(mod(i+1, slides.length)))
}