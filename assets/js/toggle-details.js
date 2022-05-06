const toggle = document.querySelector('.tea__description__toggle');

toggle.addEventListener('click', function() {
  const text = document.querySelector('.tea__description__text');
  const details = document.querySelector('.tea__description__details');
  const status = document.querySelector('.tea__description__status');

  if (details.getAttribute('data-visible') === "true") {
    text.setAttribute("data-visible", "true");
    details.setAttribute("data-visible", "false");
    status.setAttribute("data-active", "false");
    status.setAttribute("title", "Zeige Details");
  } else {
    text.setAttribute("data-visible", "false");
    details.setAttribute("data-visible", "true");
    status.setAttribute("data-active", "true");
    status.setAttribute("title", "Zeige Beschreibung");
  }
});