import { isExpanded, expand, collapse } from "/assets/js/utils/visibility.js";


for (const header of document.getElementsByClassName("glossary__header")) {
    var panel = header.nextElementSibling;
    panel.style.maxHeight = '0';
    collapse(header, panel);
    header.addEventListener("click", togglePanelVisibilty);
}

function togglePanelVisibilty() {
    var panel = this.nextElementSibling;

    if (isExpanded(panel)) {
        panel.style.maxHeight = '0';
        collapse(this, panel);
    } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        expand(this, panel);
    } 
}