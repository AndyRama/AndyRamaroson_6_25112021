//DOM elements (Global Variables)
const form = document.querySelector("form");
const firstName = document.getElementById("firstName");
const firstError = document.getElementById("firstError");
const lastName = document.getElementById("lastName");
const lastError = document.getElementById("lastError");
const mail = document.getElementById("email");
const emailError = document.getElementById("emailError");
const formField= document.getElementById("form-field");

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
//Check validation for Email

//Listen for events in each input and launch the associated function 
firstName.addEventListener("input", validationFirst);

//Sending the forms 
formField.addEventListener("submit", (event) => {
  event.preventDefault();
  validationFirst();

  //Check if all conditions are met 
  if (validationFirst() == true ) {
    //If everything is good, we remove the form 
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    clearInput()
  } else {
    return false;
  }
})