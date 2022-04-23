function profileFactories(photographeObject) {
  const { name, city, country, tagline, portrait, id, medias, price, video, image, likes} = photographeObject;
  const thumbs = `assets/photographers/${portrait}`;
  const picture = `assets/photos/${image}`;
  const pictureVideo = `assets/photos${video}`;

  let newArray = []; 

  function fillPagePhotographe() {    
    //Thumbs    
    const img = document.getElementById('thumbs');
    img.setAttribute("src", thumbs);      

    //FullName
    const title = document.querySelector('.profil-title');
    title.innerHTML = name;

    //Come from
    const location = document.querySelector('.location');
    location.innerHTML = `${city}, ${country}`;

    //CatchWords
    const catchWords = document.querySelector('.slogan');
    catchWords.innerHTML = tagline;

    //add price
    const priceDay = document.getElementById("price");
    priceDay.innerHTML = `${price}€ / jour`;

    //FullName in modalContact
    const photographeName = document.getElementById("fullName");
		photographeName.innerHTML = name;   

    //display media video/image in profile
    let nbLike = 0;

    displayMedias(medias); 
    medias.map(media => {
      nbLike += media.likes;    
    })          
    document.getElementById("nbLikes").innerText = nbLike;   
  }
  
  const btnOrder = Array.from(document.getElementsByClassName('trierBtn'));    
  btnOrder.forEach((btn, index) => btn.addEventListener('click', () => {    
    if( index == 0) { 
      
      const text2 = document.getElementById('text2');
      const text3 = document.getElementById('text3');
      const text1 = document.getElementById('text1');

      //sort by POPULARITY   
      newArray = medias.sort((a, b) => {return b.likes - a.likes})
      //supression des données presentes
      document.querySelector(".card-container").innerHTML = "";
      displayMedias(newArray);   
      
      hidenPart.classList.remove("show");
      chevronUpIcon.classList.add("fa-chevron-up-none");
      chevronDownIcon.classList.toggle("fa-chevron-up-none");

      text1.innerText = "Popularité";
      text2.innerText = "Date";
      text3.innerText = "Titre";

    } else if (index == 1) {

      // sort by DATE 
      newArray = photographeObject.medias.sort((a, b) => { return new Date(a.date).valueOf() - new Date(b.date).valueOf();}) 
      //supression des données presentes
      document.querySelector(".card-container").innerHTML = "";
      displayMedias(newArray);

      hidenPart.classList.remove("show");
      chevronUpIcon.classList.add("fa-chevron-up-none");
      chevronDownIcon.classList.toggle("fa-chevron-up-none");

      //Dynamic text content
      text1.innerText = "Date";
      text2.innerText = "Popularité";
      text3.innerText = "Titre";
 
    } else if ( index == 2) {

      //sort by ALFABETIC ORDER
      newArray = photographeObject.medias.sort((a, b) => {
      if(a.title.toLowerCase() < b.title.toLowerCase()) { return -1;}
      else if (a.title.toLowerCase() > b.title.toLowerCase()) {return 1;}
      })

      //supression des cards presentes
      document.querySelector(".card-container").innerHTML = "";
      displayMedias(newArray);

      hidenPart.classList.remove("show");
      chevronUpIcon.classList.add("fa-chevron-up-none");
      chevronDownIcon.classList.toggle("fa-chevron-up-none");

      text1.innerText = "Titre";
      text2.innerText = "Date";
      text3.innerText = "Popularité";
    }  
  }));
  return { name, thumbs, picture, pictureVideo, fillPagePhotographe}
}

function displayMedias(medias) {
  medias.map(media => {
  const cardContainer = document.querySelector('.card-container');
  let photoToDisplay;
  let elementToDisplay;
  let type;

  if(media.image){ 
    photoToDisplay = media.image; 
    type = "image";
    elementToDisplay = `<img src="./assets/photos/${photoToDisplay}" alt="${media.title}" class ="card-img">`;
  } else {
    type= "video";
    photoToDisplay = media.video; 
    elementToDisplay = `<video src="./assets/photos/${photoToDisplay}" class ="card-video" alt="${media.title}"></video>`;
  }
  
  // cookies timestamp for one clic
  let mediaLike = media.likes;
  let cookie = localStorage.getItem(media.id);
  if( cookie != null) {
    mediaLike++
  }
  
  //return card image with model
  const mediaCardImage = `
    <div class="cards" >      
      <a class="card" href="#" data-id="${media.id}" data-title="${media.title}" data-url="${photoToDisplay}" data-type="${type}" onclick="displayLightBox('${media.title}','${photoToDisplay}','${type}','${media.id}')">
        ${elementToDisplay}
      </a>
      <div class="card-content">
        <h4 class="card-title">${media.title}</h4>              
        <div class="card_btn">
          <span id="${media.id}" onclick="incrementLike(this)" class="card-counter"><span>${mediaLike}</span><i class="card-like heart fas fa-heart"></i></span>
        </div>
      </div>
    </div>
    `
    cardContainer.innerHTML = cardContainer.innerHTML + mediaCardImage;
  })
}

//LightBox with keyboard
const LightBoxContent = document.getElementById("lightBoxBody");
const bg = document.getElementById('lightBg');
const body = document.querySelector('body');

document.addEventListener('keydown', (key) => {
  //ENTER KEY
  if(key.code == "Enter"){
  }
  
  //ESC KEY
  else if(key.code == "Escape") {
    LightBoxContent.style.display = "none";    
    bg.style.display = 'none';
    body.classList.remove('no-scroll');
  }

  //LEFT KEY
  else if(key.code == "ArrowLeft"){
    const btnLeft = document.querySelector(".leftIcon");
    btnLeft.click();
  }

  //RIGHT KEY
  else if(key.code == "ArrowRight"){
    const btnRight = document.querySelector(".rightIcon");
    btnRight.click();
  }
})

//Add likes  
function incrementLike(e) {
  const id = e.id;
  const cookie = localStorage.getItem(id);

  if(cookie == null) {
    e.firstElementChild.innerText = parseInt(e.firstElementChild.innerText) +1;
    document.getElementById("nbLikes").innerText = parseInt(document.getElementById("nbLikes").innerText)+1;
    localStorage.setItem(id,"click");
  }
}
