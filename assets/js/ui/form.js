---
layout: none
---

function advanceTo(formName) {
  if (formName == "packages" ||
    formName == "contact" && validatePackages() ||
    formName == "shipping" && validateContact() ||
    formName == "addition" && validateShipping() ||
    formName == "summary") {
    showForm(formName);
  }
}

function showForm(formName) {
  hideAllSections();

  let section = document.getElementsByClassName(formName)[0];
  section.removeAttribute("hidden");

  window.scrollTo(0, 0);
}

function hideAllSections() {
  let sections = document.getElementsByClassName("order-form-section");

  for (let i = 0; i < sections.length; i++) {
    sections[i].setAttribute("hidden", "hidden");
  }
}

function summarize(orderId) {
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
  let additionWrapper = document.getElementsByClassName("summary-addition")[0];
  let additionSummary = document.getElementById("summary-addition");

  if (addition.length == 0) {
    additionWrapper.setAttribute("hidden", "hidden");
  }
  else{
    additionWrapper.removeAttribute("hidden");
    additionSummary.innerHTML = addition;
  }

  summarizeCosts(orderId);
}

function summarizeCosts(orderId) {
  {% assign packages = site.packages %}
  let spanShippingCost = document.getElementById("shipping-cost-euro").innerHTML;
  let totalCost = parseInt(spanShippingCost);

  var checkbox;
  var listing;

  {% for package in packages %}
    if ("{{ package.order-id}}" === orderId) {
      checkbox = document.getElementById("{{package.order-id}}{{ package.shorthand }}");
      listing = document.getElementById("listing-{{package.order-id}}{{ package.shorthand }}");

      if (checkbox.checked) {
        totalCost += {{ package.price }};
        listing.removeAttribute("hidden");
      }
      else {
        listing.setAttribute("hidden", "hidden");
      }
    }

  {% endfor %}

  let spanTotalCost = document.getElementById("total-cost-euro");
  spanTotalCost.innerHTML = totalCost;
}

function validatePackages() {
  let checkboxes = document.getElementsByClassName("checkbox-package");

  let checked = false;

  for (let i = 0; i < checkboxes.length; i++) {
    checked |= checkboxes[i].checked
  }

  fillAlert(
    checked,
    "package-alert",
    "Bitte wähle mindestens ein Paket aus.");

  return checked;
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

  fillAlert(isValid, "contact-alert");

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

  fillAlert(isValid, "shipping-alert");

  return isValid;
}

function fillAlert(
  isValid,
  alertID,
  message = "Bitte fülle alle Pflichtfelder aus.") {
  let alert = document.getElementById(alertID)
  if (isValid) {
    alert.innerHTML = "";
  }
  else {
    alert.innerHTML = message;
  }
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