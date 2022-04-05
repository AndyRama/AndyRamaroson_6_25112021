// Open the lightbox
function displayLightBox(title, url, type,id){
  const lightBoxbody = document.getElementById('lightBoxBody');
  lightBoxbody.style.display = 'block';


  const photoTitle = document.getElementById('photoTitle');
  photoTitle.innerText = title;


  lightBoxbody.setAttribute("data-id", id);
  let containerImage = document.getElementById("lightBox-img");

  if(type == "image"){ 
    containerImage.innerHTML = `<img src="./assets/photos/${url}" alt="${title}" class="cardBox-img">`


  } else {
    // video  

  }

  const card = document.querySelector(`.card[data-id="${id}"]`);
  const parent= card.parentNode;
  const prevElement = parent.previousSibling;
  if(!prevElement) { 
    //cacher fleche
  }
  const nextElement = parent.nextSibling;
  if(!nextElement) { 
    //cacher fleche
  }
 
  const hidenPart = document.getElementById("myDropdown");
  hidenPart.classList.remove("show");
}

// close the lightbox
function closeLightBox(){
  const closeLightBoxBtn = document.querySelector('.closeIcon');
  closeLightBoxBtn.addEventListener('click', () => {
    const lightBoxbody = document.getElementById('lightBoxBody');
    lightBoxbody.style.display = 'none';
  })
}

function prevLightBox(e) {
  const lightBoxbody = document.getElementById('lightBoxBody');
  const id = lightBoxbody.getAttribute("data-id"); 
  const card = document.querySelector(`.card[data-id="${id}"]`);
  const parent= card.parentNode;
  const prevElement = parent.previousSibling;
  // console.log(prevElement);
  const prevCard = prevElement.firstChild;
  const url = prevCard.getAttribute("data-url");    
  const type = prevCard.getAttribute("data-type");  
  const idprev = prevCard.getAttribute("data-id"); 
  const title = prevCard.getAttribute("data-title"); 
  displayLightBox(title,url,type,idprev);   
  

}
// next prev 
function nextLightBox(e) {
  const lightBoxbody = document.getElementById('lightBoxBody');
  const id = lightBoxbody.getAttribute("data-id"); 
  const card = document.querySelector(`.card[data-id="${id}"]`);
  const parent= card.parentNode;
  const prevElement = parent.nextSibling;
  // console.log(prevElement);
  const prevCard = prevElement.firstChild;
  const url = prevCard.getAttribute("data-url");    
  const type = prevCard.getAttribute("data-type");  
  const idprev = prevCard.getAttribute("data-id"); 
  const title = prevCard.getAttribute("data-title"); 
  displayLightBox(title,url,type,idprev);   

  
}
