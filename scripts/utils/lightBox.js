// //Mettre le code JavaScript lié à la page photographer.html
// Open the lightbox
function displayLightBox(){
  const displayLightBox = document.querySelectorAll('.card');
  // displayLightBox.addEventListener('click', () => {
      const lightBoxbody = document.getElementById('lightBoxBody');
      lightBoxbody.style.display = 'block';
    // })
}

// close the lightbox
function closeLightBox(){
  const closeLightBoxBtn = document.querySelector('.closeIcon');
    closeLightBoxBtn.addEventListener('click', () => {
      const lightBoxbody = document.getElementById('lightBoxBody');
      lightBoxbody.style.display = 'none';
    })
}