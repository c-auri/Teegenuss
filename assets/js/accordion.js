for (const panel of document.getElementsByClassName("glossary__panel")) {
  collapse(panel);
}

for (const header of document.getElementsByClassName("glossary__header")) {
  toggleStyles(header);
  header.addEventListener("click", togglePanelVisibilty);
}

function togglePanelVisibilty() {
  toggleStyles(this);
  var panel = this.nextElementSibling;

  if (panel.getAttribute("data-visible") === "true") {
    collapse(panel);
  } else {
    expand(panel);
  } 
}

function toggleStyles(header) {
  header.classList.toggle("glossary__header--expanded");
}

function collapse(panel) {
  panel.style.maxHeight = '0';
  panel.setAttribute("data-visible", "false");
}

function expand(panel) {
  panel.setAttribute("data-visible", "true");
  panel.style.maxHeight = panel.scrollHeight + 'px';
}