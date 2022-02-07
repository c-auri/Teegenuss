function toggle(id) {
    let details = document.getElementById("tea-details");
    let brewing = document.getElementById("tea-brewing");
    let notes = document.getElementById("tea-notes");

    let detailsHeader = document.getElementById("tea-details-header");
    let brewingHeader = document.getElementById("tea-brewing-header");
    let notesHeader = document.getElementById("tea-notes-header");

    if (id == "tea-details") {
        details.removeAttribute("hidden");
        brewing.setAttribute("hidden", "hidden");
        notes.setAttribute("hidden", "hidden");

        detailsHeader.className = "table-swap-active";
        brewingHeader.className = "table-swap-inactive";
        notesHeader.className = "table-swap-inactive";
    }

    if (id == "tea-brewing") {
        details.setAttribute("hidden", "hidden");
        brewing.removeAttribute("hidden");
        notes.setAttribute("hidden", "hidden");

        detailsHeader.className = "table-swap-inactive";
        brewingHeader.className = "table-swap-active";
        notesHeader.className = "table-swap-inactive";
    }

    if (id == "tea-notes") {
        details.setAttribute("hidden", "hidden");
        brewing.setAttribute("hidden", "hidden");
        notes.removeAttribute("hidden");

        detailsHeader.className = "table-swap-inactive";
        brewingHeader.className = "table-swap-inactive";
        notesHeader.className = "table-swap-active";
    }
}