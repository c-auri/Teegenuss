import { show, hide } from "/assets/js/utils/visibility.js"

const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function() {
    const brewing = document.querySelector('.tea__brewing');
    const details = document.querySelector('.tea__details');
    const status = document.querySelector('.toggle__status');
    const header = document.querySelector('#details-brewing-title');

    if (status.getAttribute('data-position') === "left") {
        show(brewing)
        hide(details)
        status.setAttribute("data-position", "right");
        status.setAttribute("title", "Zeige Zubereitung");
        header.innerHTML = "Zubereitung";
    } else {
        show(details)
        hide(brewing)
        status.setAttribute("data-position", "left");
        status.setAttribute("title", "Zeige Details");
        header.innerHTML = "Details";
    }
});