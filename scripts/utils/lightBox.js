// const photo = `assets/photos/${}`;

// Open the lightbox
function displayLightBox(e){
  const title = e.getAttribute("data-title");
 
  const photoTitle = document.getElementById('photoTitle');
  photoTitle.innerText = title;
  
  const lightBoxbody = document.getElementById('lightBoxBody');
  lightBoxbody.style.display = 'block';
}

// close the lightbox
function closeLightBox(){
  const closeLightBoxBtn = document.querySelector('.closeIcon');
  closeLightBoxBtn.addEventListener('click', () => {
    const lightBoxbody = document.getElementById('lightBoxBody');
    lightBoxbody.style.display = 'none';
  })
}

