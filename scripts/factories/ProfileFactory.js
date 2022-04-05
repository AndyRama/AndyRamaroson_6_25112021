function profileFactories(photographeObject) {
  const { name, city, country, tagline, portrait, id, medias, price, video, image, likes} = photographeObject;
  const thumbs = `assets/photographers/${portrait}`;
  const picture = `assets/photos/${image}`;
  const pictureVideo = `assets/photos${video}`;

  let newArray = []; 
  //let newPhotographerPhotos = [];

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
    function addLikes () {
      // Cible tous les coeur et ecoute les clicks      
      const heart = document.querySelectorAll(".heart");
      heart.forEach((icon) => {
        icon.addEventListener("click", () => {
          // A chaque click, on ajoute un +1 au chiffre de like et aux nb total de like          
          totalLike += 1;
          // Charge et affiche le nouveau chiffre dans "total"
          const nblikes = document.getElementById("nbLikes"); 
          nblikes.innerHTML = totalLike; 
          const value = document.querySelector(".card-counter");    
          // MISSING VALUE ACTU CARD LIKE NUMBER

        }, { once: true }) // N'autorise qu'un click
      })
    }

    //display media video/image in profile
    let nbLike = 0;
    medias.map(media => {
      nbLike += media.likes;

      const cardContainer = document.querySelector('.card-container');
      let photoToDisplay;

      if(media.image){ 
        photoToDisplay = media.image; 

        //return card image with model
        const mediaCardImage = `
            <div class="cards" >      
              <a class="card" href="#" data-title="${media.title}" onclick="displayLightBox(this)">
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
        //return card video with model and panel controle
        const mediaCardVideo = `
          <div class="cards" >      
            <a class="card" href="#" data-title="${media.title}" onclick="displayLightBox(this)">
              <video class ="card-video" alt="${media.title}"  src="./assets/photos/${photoToDisplay}"></video>
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

    //display media video/image in lightBox
    const lightContainer = document.querySelector('.lightBoxContainer');

    medias.map(media => {
      let photoToDisplayBox;   
      if(media.image) { 
        photoToDisplayBox = media.image;
        //return card image with model
        const mediaLightBoxImage = `
            <div id="lightBoxBody">
              <i class="fas fa-times X-close closeIcon" " data-title="${media.title}" onclick="closeLightBox(this)"></i>
              <img src="./assets/photos/${photoToDisplayBox}" alt="${media.title}" class ="cardBox-img">
              <i class="fas fa-chevron-left leftIcon"></i>
              <i class="fas fa-chevron-right rightIcon"></i>
              <div id="photoTitle">${media.title}</div>
              <span class="lightBoxCounter">${media.likes}<i class="lightBoxLike heart fas fa-heart"></i></span>
            </div>
          `
        lightContainer.innerHTML = lightContainer.innerHTML + mediaLightBoxImage;
      } else {
        photoToDisplayBox = media.video;
        //return card video with model and panel controle
        const mediaLightBoxVideo = `
            <div id="lightBoxBody">
              <i class="fas fa-times X-close closeIcon" data-title="${media.title}" onclick="closeLightBox(this)"></i>
              <video class ="card-video-light" data-photo ="${media.video}" alt="${media.title}" src="./assets/photos/${photoToDisplayBox}" controls="controls"></video>
              <i class="fas fa-chevron-left leftIcon"></i>
              <i class="fas fa-chevron-right rightIcon"></i>
              <div id="videoTitle">${media.title}</div><i class="lightBoxLikeV heart fas fa-heart"></i></span>
            </div>
          `
        lightContainer.innerHTML = lightContainer.innerHTML + mediaLightBoxVideo;
      }
    })
  let totalLike = nbLike;
  document.getElementById("nbLikes").innerText = nbLike;
  addLikes();
  trier();
}
  
// Btn Order
function trier() {
  const picture = `assets/photos/${image}`;
  const pictureVideo = `assets/photos${video}`;

  const btnOrder = Array.from(document.getElementsByClassName('trierBtn'));
  btnOrder.forEach((btn, index) => btn.addEventListener('click', () => {
    
    if( index == 0) { 

      // sort by POPULARITY   
      newArray = medias.sort((a, b) => {return b.likes - a.likes})
      //supression des données presentes
      document.querySelector(".card-container").innerHTML = "";
      console.log(newArray);
     
    } else if (index == 1) {

      // sort by DATE 
      newArray = photographeObject.medias.sort((a, b) => { return new Date(a.date).valueOf() - new Date(b.date).valueOf();}) 
      //supression des données presentes
      document.querySelector(".card-container").innerHTML = "";
      console.log(newArray);
 
    } else if ( index == 2) {

      //sort by ALFABETIC ORDER
      newArray = photographeObject.medias.sort((a, b) => {
      if(a.title.toLowerCase() < b.title.toLowerCase()) { return -1;}
      else if (a.title.toLowerCase() > b.title.toLowerCase()) {return 1;}
      })
      //supression des cards presentes
      document.querySelector(".card-container").innerHTML = "";
      console.log(newArray);
    }  
    // fillPagePhotographe(newArray);
  }));
  }
  return { name, thumbs, picture, pictureVideo, fillPagePhotographe}
}

// change photos NEXT or PREVIOUS
// function panelControl() {
//   const previousBtn = document.querySelector('.leftIcon');
//   const nextBtn = document.querySelector('.rightIcon');
//   const photoDom = document.querySelector('cardBox-img');
//   const photoTitleDom = document.getElementById('photoTitle');

//   let newPhotographerPhotos = [];
//   let photoTitle = [];
//   let newLigthboxIndex = -1; 

//   const src = newPhotographerPhotos[index];
//   const srcTitle = photoTitle[index]; 

//   previousBtn.addEventListener('click', () => {
//     newLigthboxIndex -= 1;
//     if (newLigthboxIndex < 0) {
//       newLigthboxIndex = newPhotographerPhotos.length - 1;
//     }
//     const src = newPhotographerPhotos[newLigthboxIndex];
//     photoDom.innerHTML = `<img src="${src}" />`;

//     if (newLigthboxIndex < 0){
//       newLigthboxIndex = photoTitle.length - 1;
//     }
//     const srcTitle = photoTitle[newLigthboxIndex]; 
//     photoTitleDom.innerHTML = `${srcTitle}`;
//   });

//   nextBtn.addEventListener('click', () => {
//     newLigthboxIndex += 1;
//     if (newLigthboxIndex > newPhotographerPhotos.length - 1) {
//       newLigthboxIndex = 0;
//     }
//     const src = newPhotographerPhotos[newLigthboxIndex];
//     photoDom.innerHTML = `<img src="${src}" />`;

//     if (newLigthboxIndex > photoName.length - 1){
//        newLigthboxIndex = 0;    
//     }
//     const srcTitle = photoTitle[newLigthboxIndex]; 
//     photoTitleDom.innerHTML = `${srcTitle}`;
//   })
// }

// //lightBox using keyboard
// document.addEventListener('keydown', (key) => {
//   //ENTER KEY
//   if(key.code == "Enter") {
//   }

//   //Esc KEY
//   else if(key.code == "Escape"){
//     const lightBoxcontainer = document.getElementById('lightBoxBody');
//     lightBoxcontainer.style.display = 'none';
//   }

//   //ArrowRight KEY
//   else if(key.code == "ArrowRight"){
//     const photoTitleDom = document.getElementById('photoTitle');

//     newLigthboxIndex += 1;
//     if (newLigthboxIndex > newPhotographerPhotos.length - 1) {
//       newLigthboxIndex = 0;
//     }
//     const src = newPhotographerPhotos[newLigthboxIndex];
//     photoDom.innerHTML = `<img src="${src}" />`;
    
//     if (newPhotographerPhotos > photoName.length - 1){
//       newPhotographerPhotos = 0;    
//    }
//     const srcTitle = photoTitle[newLigthboxIndex]; 
//     photoTitleDom.innerHTML = `${srcTitle}`;
//   }

//   //ArrowLeft KEY
//   else if(key.code == "ArrowLeft"){
//     const photoTitleDom = document.getElementById('photoTitle');

//     newPhotographerPhotos -= 1;
//     if (newPhotographerPhotos < 0) {
//       newPhotographerPhotos = newPhotographerPhotos.length - 1;
//     }
//     const src = newPhotographerPhotos[newLigthboxIndex];
//     photoDom.innerHTML = `<img src="${src}" />`;

//     if (newPhotographerPhotos < 0){
//       newPhotographerPhotos = photoName.length - 1;
//     }
//     const srcTitle = photoTitle[newLigthboxIndex]; 
//     photoTitleDom.innerHTML = `${srcTitle}`;
//   }
// });