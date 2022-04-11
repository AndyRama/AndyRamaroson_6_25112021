// Open the lightbox
function displayLightBox(title, url, type,id){
  const lightBoxbody = document.getElementById('lightBoxBody');
  const bg = document.getElementById('lightBg');
  const body = document.querySelector('body');
  
  lightBoxbody.style.display = 'block';
  bg.style.display = 'block';
  body.classList.add('no-scroll');

  const photoTitle = document.getElementById('photoTitle');
  photoTitle.innerText = title;


  lightBoxbody.setAttribute("data-id", id);
  let containerImage = document.getElementById("lightBox-img");
  const oldClass = document.getElementById("photoTitle");

  if(type == "image"){ 

    oldClass.style.display = "block";
    oldClass.style.display = "photoTitle";

    containerImage.innerHTML = `
     <img src="./assets/photos/${url}" alt="${title}" class="cardBox-img">
    `
  } else {
    oldClass.style.display = "none";

    containerImage.innerHTML = `
     <video src="./assets/photos/${url}" class ="cardBox-vid" alt="${title}" controls="controls"></video>
     <div id="videoTitle">${title}</div>
    `
  }

  const card = document.querySelector(`.card[data-id="${id}"]`);
  const parent = card.parentNode;
  const prevElement = parent.previousElementSibling;
  const nextElement = parent.nextElementSibling;

  if(!prevElement) { 
    //cacher fleche debut de tableau 
    const hideLeftIcon = document.querySelector(".leftIcon");
    hideLeftIcon.style.color = "white";
  } else {
    const hideLeftIcon = document.querySelector(".leftIcon");
    hideLeftIcon.style.color = "#901C1C";
  }

  if(!nextElement) { 
    //cacher fleche fin de tableau 
    const hideRightIcon = document.querySelector(".rightIcon");
    hideRightIcon.style.color = "white";
  } else {
    const hideRightIcon = document.querySelector(".rightIcon");
    hideRightIcon.style.color = "#901C1C";
  }
}

// close the lightbox
function closeLightBox(){
  const closeLightBoxBtn = document.querySelector('.closeIcon');
  const body = document.querySelector('body');
  const bg = document.getElementById('lightBg');
  const lightBoxbody = document.getElementById('lightBoxBody');

  closeLightBoxBtn.addEventListener('click', () => {
    lightBoxbody.style.display = 'none';
    body.classList.remove('no-scroll'); //Réactive le défilement vertical
    bg.style.display = 'none';//display background
  })
}

// Previous Element 
function prevLightBox(e) {
  const lightBoxbody = document.getElementById('lightBoxBody');
  const id = lightBoxbody.getAttribute("data-id"); 
  const card = document.querySelector(`.card[data-id="${id}"]`);
  const parent = card.parentNode;
  const prevElement = parent.previousElementSibling;

  const prevCard = prevElement.firstElementChild;
  const url = prevCard.getAttribute("data-url");    
  const type = prevCard.getAttribute("data-type");  
  const idprev = prevCard.getAttribute("data-id"); 
  const title = prevCard.getAttribute("data-title"); 
  displayLightBox(title,url,type,idprev);  
}

// Next Element
function nextLightBox(e) {
  const lightBoxbody = document.getElementById('lightBoxBody');
  const id = lightBoxbody.getAttribute("data-id"); 
  const card = document.querySelector(`.card[data-id="${id}"]`);
  const parent= card.parentNode;
  const nextElement = parent.nextElementSibling;

  const nextCard = nextElement.firstElementChild;
  const url = nextCard.getAttribute("data-url");    
  const type = nextCard.getAttribute("data-type");  
  const idnext = nextCard.getAttribute("data-id"); 
  const title = nextCard.getAttribute("data-title"); 
  displayLightBox(title,url,type,idnext);     
}
