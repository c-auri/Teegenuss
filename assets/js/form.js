function showTerms() {
    let form = document.getElementsByClassName("order-form")[0];
    form.setAttribute("hidden", "hidden");

    hideAllForms();

    let terms = document.getElementsByClassName("order-terms")[0];
    terms.removeAttribute("hidden");

    window.scrollTo(0, 0);
}

function advanceTo(formName) {
    if (formName == "contact" || 
        formName == "shipping" && validateContact() ||
        formName == "addition" && validateShipping() ||
        formName == "summary") {
        showForm(formName);
    }
}

function showForm(formName) {
    let terms = document.getElementsByClassName("order-terms")[0];
    terms.setAttribute("hidden", "hidden");

    let form = document.getElementsByClassName("order-form")[0];
    form.removeAttribute("hidden");

    hideAllForms();

    let section = document.getElementsByClassName(formName)[0];
    section.removeAttribute("hidden");

    window.scrollTo(0, 0);
}

function hideAllForms() {
    let sections = document.getElementsByClassName("order-form-section");

    for (let i = 0; i < sections.length; i++) {
        sections[i].setAttribute("hidden", "hidden");
    }
}

function summarize() {
    let username = document.getElementById("discord-username").value;
    let userID = document.getElementById("discord-id").value;
    let discord = document.getElementById("discord-summary");
    discord.innerHTML = username + "#" + userID;

    let connection = document.getElementById("connection").value;
    let connectionSummary = document.getElementById("connection-summary");
    connectionSummary.innerHTML = "von " + connection;

    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let nameSummary = document.getElementById("name-summary");
    nameSummary.innerHTML = firstName + " " + lastName;

    let streetName = document.getElementById("street-name").value;
    let streetNumber = document.getElementById("street-number").value;
    let streetSummary = document.getElementById("street-summary");
    streetSummary.innerHTML = streetName + " " + streetNumber;

    let info = document.getElementById("additional-info").value;
    let infoSummary = document.getElementById("info-summary");
    infoSummary.innerHTML = info;

    let postalCode = document.getElementById("postal-code").value;
    let city = document.getElementById("city").value;
    let citySummary = document.getElementById("city-summary");
    citySummary.innerHTML = postalCode + " " + city;

    let addition = document.getElementById("addition").value;
    let additionWrapper = document.getElementsByClassName("addition-summary")[0];
    let additionSummary = document.getElementById("addition-summary");

    if (addition.length == 0) {
        additionWrapper.setAttribute("hidden", "hidden");
    }
    else{
        additionWrapper.removeAttribute("hidden");
        additionSummary.innerHTML = addition;
    }
}

function validateContact() {
    let isValid = true;

    isValid &= validateTextInput("discord-username");
    isValid &= validateTextInput("connection");
    
    let id = document.getElementById("discord-id");
    
    if (isNaN(id.value) || id.value.length != 4 || id.value < 1 || id.value > 10000) {
        id.classList.add("invalid")
        isValid &= false;
    }
    else {
        id.classList.remove("invalid");
    }

    return isValid;
}

function validateShipping() {
    let ids = [
        "first-name",
        "last-name",
        "street-name",
        "street-number",
        "postal-code",
        "city",
        "country",
    ]

    let isValid = true;

    for (let i = 0; i < ids.length; i++) {
        isValid &= validateTextInput(ids[i]);
    }

    return isValid;
}

function validateTextInput(id) {
    let element = document.getElementById(id);
    
    if (element.value.length == 0) {
        element.classList.add("invalid")
        return false;
    }
    else {
        element.classList.remove("invalid");
        return true;
    }
}