const lightBoxbody = document.getElementById('lightBoxBody');
const closeLightBoxBtn = document.querySelector('.closeIcon');

// Open the lightbox
function displayLightBox(){
  lightBoxbody.style.display = 'block';
}

// close the lightbox
function closeLightBox(){
  closeLightBoxBtn.addEventListener('click', () => {
    lightBoxbody.style.display = 'none';
  })
}
