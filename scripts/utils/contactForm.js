//DOM elements (Global Variables)
const form = document.querySelector("form");
const firstName = document.getElementById("firstName");
const firstError = document.getElementById("firstError");
const lastName = document.getElementById("lastName");
const lastError = document.getElementById("lastError");
const mail = document.getElementById("email");
const formField= document.getElementById("form-field");

const emailError = document.getElementById("emailError");
const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

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

// Reset form error
const clearInput = () => {
  //remove input field
  form.reset();

  //remove error form
  const resetErrorBorder = document.querySelectorAll("input")
  resetErrorBorder.forEach((element) => {
      element.classList.remove("errorForm");
  });

  //remove error message
  const resetErrorMessage = document.querySelectorAll(".result")
  resetErrorMessage.forEach((message) => {
      message.innerHTML = "";
  });
};

//Check validation for firstname
function validationFirst () {
  //
  firstError.innerHTML = "";
  firstError.classList.remove("errorStyle");
  firstName.classList.remove("errorForm");

  if (firstName.value.trim().length == 0) {
    firstError.innerHTML = "Veuillez siasir votre prénom.";
    firstError.classList.add("errorStyle");
    firstName.classList.add("errorForm");
    return false;
  } else if (firstName.value.trim().length < 2) {
    firstError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstError.classList.add("errorStyle");
    firstName.classList.add("errorForm");
    return false;
  } else {
    firstError.innerHTML = "";
    return true
  }
}

//Check validation for lastname
function validationLast () {
  //
  lastError.innerHTML = "";
  lastError.classList.remove("errorStyle");
  lastName.classList.remove("errorForm");

  if (lastName.value.trim().length == 0) {
    lastError.innerHTML = "Veuillez siasir votre nom.";
    lastError.classList.add("errorStyle");
    lastName.classList.add("errorForm");
    return false;
  } else if (lastName.value.trim().length < 2) {
    lastError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastError.classList.add("errorStyle");
    lastName.classList.add("errorForm");
    return false;
  } else {
    lastError.innerHTML = "";
    return true
  }
}

//Check validation for Email
function validationEmail() {
  emailError.innerHTML = '';
  emailError.classList.remove('errorStyle');
  mail.classList.remove('errorForm');

  //Email Blank
if (mail.value == "") {
  emailError.innerHTML = 'Veuillez siasir une adresse email.';
  emailError.classList.add('errorStyle');
  mail.classList.add('errorForm');
  return false;
  //Email validate
  } else if (!mail.value.match(mailRegex)) {
    emailError.innerHTML = 'Adresse email invalide.';
    emailError.classList.add('errorStyle')
    mail.classList.add('errorForm')
    return false;
  } else {
    emailError.innerHTML = '';
    return true;
  }
}

//Listen for events in each input and launch the associated function 
firstName.addEventListener("input", validationFirst);
lastName.addEventListener("input", validationLast);
mail.addEventListener("input", validationEmail);

//Sending the forms 
formField.addEventListener("submit", (event) => {
  event.preventDefault();
  validationFirst();
  validationLast();
  validationEmail();

  //Check if all conditions are met 
  if (
    validationFirst() == true &&
    validationLast() == true &&
    validationEmail() ==true
  ) {
    //If everything is good, we remove the form 
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    clearInput()
  } else {
    return false;
  }
})