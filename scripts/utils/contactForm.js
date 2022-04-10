//DOM elements (Global Variables)
const form = document.querySelector("form");
const firstName = document.getElementById("firstName");
const firstError = document.getElementById("firstError");
const lastName = document.getElementById("lastName");
const lastError = document.getElementById("lastError");
const mail = document.getElementById("email");
const formField= document.getElementById("form-field");
const mess = document.getElementById("message");

//Check patern Email
const emailError = document.getElementById("emailError");
const mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

// launch modal event
function displayModal() {
  const body = document.querySelector("body");
  const modal = document.getElementById("contact_modal");

  modal.style.display = "block";
  modal.classList.add('scroll');
  body.classList.add('no-scroll');

}

//Close modal 
function closeModal() {
  const modal = document.getElementById("contact_modal");
  const body = document.querySelector("body");

  modal.style.display = "none";
  body.classList.remove('no-scroll');
  modal.classList.remove('scroll');
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
  //Reset error message
  firstError.innerHTML = "";
  firstError.classList.remove("errorStyle");
  firstName.classList.remove("errorForm");

  //Every time the user types something
  //We check the validity of the first name field
  //If nothing is written or if there are only spaces
  if (firstName.value.trim().length == 0) {
    firstError.innerHTML = "Veuillez saisir votre prénom.";//add message
    firstError.classList.add("errorStyle");//add a class to the error message
    firstName.classList.add("errorForm");//add a class to the input area
    return false;
    //if there are less than 2 characters or only spaces
  } else if (firstName.value.trim().length < 2) {
    firstError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstError.classList.add("errorStyle");
    firstName.classList.add("errorForm");
    return false;
    //if all conditions are met 
  } else {
    firstError.innerHTML = "";
    return true
  }
}

//Check validation for lastname
function validationLast () {
  //Reset error message
  lastError.innerHTML = "";
  lastError.classList.remove("errorStyle");
  lastName.classList.remove("errorForm");

  //Every time the user types something
  //We check the validity of the first name field
  //If nothing is written or if there are only spaces
  if (lastName.value.trim().length == 0) {
    lastError.innerHTML = "Veuillez saisir votre nom.";//add message
    lastError.classList.add("errorStyle");//add a class to the error message
    lastName.classList.add("errorForm");//add a class to the input area
    return false;
    //if there are less than 2 characters or only spaces
  } else if (lastName.value.trim().length < 2) {
    lastError.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastError.classList.add("errorStyle");
    lastName.classList.add("errorForm");
    return false;
    //if all conditions are met 
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
  emailError.innerHTML = 'Veuillez saisir une adresse email.';
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

//Blank message
function validationMessage () {
  messageError.innerHTML = '';
  messageError.classList.remove('errorStyle');
  mess.classList.remove('errorForm');

  if (message.value == "") {
    messageError.innerHTML = 'Veuillez saisir votre message.';
    messageError.classList.add('errorStyle');
    mess.classList.add('errorForm');
    return false;
  } else {
    messageError.innerHTML = '';
    return true
  }
}

//Listen for events in each input and launch the associated function 
firstName.addEventListener("input", validationFirst);
lastName.addEventListener("input", validationLast);
mail.addEventListener("input", validationEmail);
message.addEventListener("input", validationMessage);

//Sending the forms 
formField.addEventListener("submit", (event) => {
  event.preventDefault();
  validationFirst();
  validationLast();
  validationEmail();
  validationMessage();

  //Check if all conditions are met 
  if (
    validationFirst() == true &&
    validationLast() == true &&
    validationEmail() ==true && 
    validationMessage() == true
  ) {
    //value input in the console
    // console.log(firstName.value);
    // console.log(lastName.value);
    // console.log(mail.value);
    // console.log(message.value);

    //If everything is good, we remove the form 
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    clearInput()
  } else {
    return false;
  }
})