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

    //Add likes
    function addLikes (media) {
      
      // Cible tous les coeur et ecoute les clicks      
      const heart = document.querySelectorAll(".heart");
      heart.forEach((icon) => {
        icon.addEventListener("click", () => {
          // A chaque click, on ajoute un +1 au chiffre de like et aux nb total de like          
          totalLike += 1;

          // Charge et affiche le nouveau chiffre dans "total"
          const nblikes = document.getElementById("nbLikes"); 
          nblikes.innerHTML = totalLike; 

          actuLikes = document.querySelector(".card-counter");
         
          // MISSING VALUE ACTU CARD LIKE NUMBER

        }, { once: true }) // N'autorise qu'un click
      })
    }

    //display media video/image in profile
    let nbLike = 0;

    displayMedias(medias);
    medias.map(media => {
      nbLike += media.likes;    
    })      
    let totalLike = nbLike;
    document.getElementById("nbLikes").innerText = nbLike;
    addLikes();  
  }
  
  const btnOrder = Array.from(document.getElementsByClassName('trierBtn'));  
  btnOrder.forEach((btn, index) => btn.addEventListener('click', () => {    
    if( index == 0) { 

      // sort by POPULARITY   
      newArray = medias.sort((a, b) => {return b.likes - a.likes})
      //supression des données presentes
      document.querySelector(".card-container").innerHTML = "";
      displayMedias(newArray);   

    } else if (index == 1) {

      // sort by DATE 
      newArray = photographeObject.medias.sort((a, b) => { return new Date(a.date).valueOf() - new Date(b.date).valueOf();}) 
      //supression des données presentes
      document.querySelector(".card-container").innerHTML = "";
      displayMedias(newArray);
 
    } else if ( index == 2) {

      //sort by ALFABETIC ORDER
      newArray = photographeObject.medias.sort((a, b) => {
      if(a.title.toLowerCase() < b.title.toLowerCase()) { return -1;}
      else if (a.title.toLowerCase() > b.title.toLowerCase()) {return 1;}
      })
      //supression des cards presentes
      document.querySelector(".card-container").innerHTML = "";
      displayMedias(newArray);

    }  
    //DropDown comportement after select option
    // const hidenPart = document.getElementById("myDropdown");
    // const chevronUpIcon = document.getElementById("close-up-icon");
    // const chevronDownIcon = document.getElementById('drop-down-btn');
    
    // hidenPart.classList.add("show");
    // chevronUpIcon.classList.add("fa-chevron-up-none");
    // chevronDownIcon.classList.toggle("fa-chevron-up-none");

    //AFFICHAGE ACTIF 
    const text1 = document.getElementById('text1').textContent;
    const text2 = document.getElementById('text2').textContent;
    const text3 = document.getElementById('text3').textContent;
 
    console.log(text1);
    console.log(text2);
    console.log(text3);
  }));

  return { name, thumbs, picture, pictureVideo, fillPagePhotographe}
}

function displayMedias(medias) {
  medias.map(media => {
  const cardContainer = document.querySelector('.card-container');
  let photoToDisplay;

    if(media.image){ 
      photoToDisplay = media.image; 

      //return card image with model
      const mediaCardImage = `
          <div class="cards" >      
            <a class="card" href="#" data-id="${media.id}" data-title="${media.title}" data-url="${photoToDisplay}" data-type="image" onclick="displayLightBox('${media.title}','${photoToDisplay}','image','${media.id}')">
              <img src="./assets/photos/${photoToDisplay}" alt="${media.title}" class ="card-img">
            </a>
            <div class="card-content">
              <h4 class="card-title">${media.title}</h4>              
              <div class="card_btn">
                <span class="card-counter">${media.likes}<i class="card-like heart fas fa-heart"></i></span>
              </div>
            </div>
          </div>
        `
      cardContainer.innerHTML = cardContainer.innerHTML + mediaCardImage;
    } else {
      photoToDisplay = media.video;
      //return card video with model and video bar controle
      const mediaCardVideo = `
        <div class="cards" >      
          <a class="card" href="#" data-id="${media.id}" data-title="${media.title}" data-url="${photoToDisplay}" data-type="video" onclick="displayLightBox('${media.title}','${photoToDisplay}','video','${media.id}')">
            <video src="./assets/photos/${photoToDisplay}" class ="card-video" alt="${media.title}"></video>
          </a>
          <div class="card-content">
            <h4 class="card-title">${media.title}</h4>              
            <div class="card_btn">
              <span class="card-counter">${media.likes}<i class="card-like heart fas fa-heart"></i></span>
            </div>
          </div>
        </div>
      `
      cardContainer.innerHTML = cardContainer.innerHTML + mediaCardVideo;
    }
  })
}

//LightBox with keyboard
const LightBoxContent = document.getElementById("lightBoxBody");
const bg = document.getElementById('lightBg');

document.addEventListener('keydown', (key) => {
  //ENTER KEY
  if(key.code == "Enter"){
    LightBoxContent.style.display = "block";
    bg.style.display = 'block';
  }
  
  //ESC KEY
  else if(key.code == "Escape") {
    LightBoxContent.style.display = "none";    
    bg.style.display = 'none';
  }

  //LEFT KEY
  else if(key.code == "ArrowLeft"){
    const btnLeft = document.querySelector(".leftIcon");
    //Simule un event 'clic'
    btnLeft.click();
  }

  //RIGHT KEY
  else if(key.code == "ArrowRight"){
    const btnRight = document.querySelector(".rightIcon");
    //Simule un event 'clic'
    btnRight.click();
  }
})

