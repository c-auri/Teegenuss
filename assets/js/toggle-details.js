const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function() {
  const brewing = document.querySelector('.tea__brewing');
  const details = document.querySelector('.tea__details');
  const status = document.querySelector('.toggle__status');
  const section = document.querySelector('#details-brewing');
  const header = document.querySelector('#details-brewing-title');

  if (status.getAttribute('data-position') === "left") {
    brewing.setAttribute("data-visible", "true");
    details.setAttribute("data-visible", "false");
    status.setAttribute("data-position", "right");
    status.setAttribute("title", "Zeige Zubereitung");
    header.innerHTML = "Zubereitung";
  } else {
    brewing.setAttribute("data-visible", "false");
    details.setAttribute("data-visible", "true");
    status.setAttribute("data-position", "left");
    status.setAttribute("title", "Zeige Details");
    header.innerHTML = "Details";
  }

  section.style.maxHeight = section.scrollHeight + 'px';
});