//DOM elements (Global Variables)
const form = document.querySelector("form");
const firstName = document.getElementById("firstName");
const firstError = document.getElementById("firstError");
const lastName = document.getElementById("lastName");
const lastError = document.getElementById("lastError");
const mail = document.getElementById("email");
const emailError = document.getElementById("emailError");

//Check validation for firstname
function validationFirst () {
  if (firstName.value.trim().length == 0) {
    firstError.innerHTML = 'xxxx';
    firstError.classList.add("errorStyle");
    firstName.classList.add('errorForm');
    return false;
  } else if (firstName.value.trim().length < 2) {
    firstError.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    firstError.classList.add('errorStyle');
    firstName.classList.add('errorForm');
    return false;
  } else {
    firstError.innerHTML = "";
    return true
  }
}
//Check validation for lastname
//Check validation for Email

// launch modal event
function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

//Close modal 
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
