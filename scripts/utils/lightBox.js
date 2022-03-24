//Ligth control OPEN and CLOSE
const OpenLightBox = document.querySelectorAll(".cards");
const closeLigthModal = document.getElementById("x-close");
const ligthModalbg = document.querySelector(".lightBoxModal-bg");

// launch modal light event
function displayLightModal() {
  ligthModalbg.style.display = "block";
}

//Close modal light 
function closeLightModal() {
  ligthModalbg.style.display = "none";
}
