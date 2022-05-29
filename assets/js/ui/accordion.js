import { isExpanded, expand, collapse } from "/assets/js/utils/visibility.js";

for (const header of document.getElementsByClassName("glossary__header")) {
    toggleStyles(header);
    var panel = header.nextElementSibling;
    panel.style.maxHeight = '0';
    collapse(panel);
    header.addEventListener("click", togglePanelVisibilty);
}

function togglePanelVisibilty() {
    toggleStyles(this);
    var panel = this.nextElementSibling;

    if (isExpanded(panel)) {
        panel.style.maxHeight = '0';
        collapse(panel);
    } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        expand(panel);
    } 
}

function toggleStyles(header) {
    header.classList.toggle("glossary__header--expanded");
}