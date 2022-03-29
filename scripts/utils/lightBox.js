const lightBoxbody = document.getElementById('lightBoxBody');
const closeLightBoxBtn = document.querySelector('.closeIcon');

// Open the lightbox
function displayLightBox(e){
  const title = e.getAttribute("data-title");

  const photoTitle = document.getElementById('photoTitle');
  photoTitle.innerText = title;

  lightBoxbody.style.display = 'block';
}

// close the lightbox
function closeLightBox(){
  closeLightBoxBtn.addEventListener('click', () => {
    lightBoxbody.style.display = 'none';
  })
}

