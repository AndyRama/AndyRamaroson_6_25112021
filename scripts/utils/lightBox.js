//Mettre le code JavaScript lié à la page photographer.html
const OpenLightBox = document.querySelectorAll(".cards");
const LigthModalbg = document.querySelector(".lightBoxModal-bg");
const closeLigthModal = document.getElementById("x-close");

// launch modal light event
function displayLightModal() {
  const modal = document.querySelector(".lightBoxModal-bg");
  modal.style.display = "block";
}

//Close modal light 
function closeLightModal() {
  const modal = document.querySelector(".lightBoxModal-bg");
  modal.style.display = "none";
} 