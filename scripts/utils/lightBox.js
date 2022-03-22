//Ligth control OPEN and CLOSE
const OpenLightBox = document.querySelectorAll(".cards");
const ligthModalbg = document.querySelector(".lightBoxModal-bg");
const closeLigthModal = document.getElementById("x-close");

// launch modal light event
function displayLightModal() {
  ligthModalbg.style.display = "block";
}

//Close modal light 
function closeLightModal() {
  ligthModalbg.style.display = "none";
}
