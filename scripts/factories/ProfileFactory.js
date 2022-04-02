function profileFactories(photographeObject) {
  const { name, city, country, tagline, portrait, id, medias, price, video, image, likes} = photographeObject;
  const thumbs = `assets/photographers/${portrait}`;
  const picture = `assets/photos/${image}`;
  const pictureVideo = `assets/photos${video}`;
  let newPhotographerPhotos = [];
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
    function addLikes () {
      // Cible tous les coeur et ecoute les clicks
      let media = medias.likes;
      const heart = document.querySelectorAll(".heart");
      heart.forEach((icon) => {
        icon.addEventListener("click", () => {
          // A chaque click, on ajoute un +1 au chiffre de like et aux nb total de like
          totalLike += 1;
          // Charge et affiche le nouveau chiffre dans "total"
          const nblikes = document.getElementById("nbLikes"); 
          const cardlikenow = document.querySelector(".card-counter");
          // cardlikenow = cardlikenow.innerText;
          // cardlikenow++;
          console.log(cardlikenow);
          nblikes.innerHTML = totalLike;   
          // cardlikenow.innerText = `${cardlikenow}`;
          // media = medias.likes;
        
          //MISSING ADD LIKE CARDS
          
        }, { once: true }) // N'autorise qu'un click
      })
    }

    //display media video/image in profile
    let nbLike = 0;
    medias.map(media => {
      nbLike += media.likes;
      const cardContainer = document.querySelector('.card-container');
      // console.log(photographeObject.medias);     

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
              <video class ="card-video" alt="${media.title}" src="./assets/photos/${photoToDisplay}"></video>
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

      if(media.image){ 
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
  
// btn Order
function trier() {
  const btnOrder = Array.from(document.getElementsByClassName('trierBtn'));
  btnOrder.forEach((btn, index) => btn.addEventListener('click', () => {
    
    if( index == 0) {
      // sort by POPULARITY   
      newArray = medias.sort((a, b) => {return b.likes - a.likes})
      console.log(newArray);
      //supression des données presentes
      const newCard = document.querySelector(".card-container").innerHTML = "";
      newPhotographerPhotos = newArray.push(newPhotographerPhotos);
      // INSERER NOUVEAUX TABLEAU
      console.log(newPhotographerPhotos);
    } else if (index == 1) {

      // sort by DATE 
      newArray = photographeObject.medias.sort((a, b) => { return new Date(a.date).valueOf() - new Date(b.date).valueOf();}) 
      console.log(newArray);
      //supression des données presentes
      document.querySelector(".card-container").innerHTML = "";
      const newCard = document.querySelector(".card-container");
 
      newPhotographerPhotos = newArray.push(newPhotographerPhotos);
      console.log(newPhotographerPhotos);

      // INSERER NOUVEAUX TABLEAU

    } else if ( index == 2) {

      //sort by ALFABETIC ORDER
      newArray = photographeObject.medias.sort((a, b) => {
      if(a.title.toLowerCase() < b.title.toLowerCase()) { return -1;}
      else if (a.title.toLowerCase() > b.title.toLowerCase()) {return 1;}
      })
      //supression des cards presentes
      document.querySelector(".card-container").innerHTML = "";
      newPhotographerPhotos = newArray.slice(newPhotographerPhotos);
      console.log(newPhotographerPhotos);  
      // INSERER NOUVEAUX TABLEAU
      }
    }));
  }
  return { name, thumbs, picture, pictureVideo, fillPagePhotographe}
}

