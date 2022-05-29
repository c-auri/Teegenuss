import { show, hide } from "/assets/js/utils/visibility.js"
import { mod } from "/assets/js/utils/math.js"

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