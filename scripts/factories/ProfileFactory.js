function profileFactories(photographeObject) {
  const { name, city, country, tagline, portrait, id, medias, price} = photographeObject;
  const picture = `assets/photographers/${portrait}`;
  
  function fillPagePhotographe() {    
    //Thumbs    
    const img = document.getElementById('thumbs');
    img.setAttribute("src", picture);      

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

    //display media video/image and count all hearts
    const cardContainer = document.querySelector('.card-container');
    let nbLike = 0;
    medias.map(media => {
      nbLike += media.likes;
      let photoToDisplay;
      if(media.image){ 
        photoToDisplay = media.image;
        //return card image with model
        const mediaCardImage = `
          <div class="cards" >      
            <a class="card"  href="#" data-title="${media.title}" onclick="displayLightBox(this)">
              <img src="./assets/photos/${photoToDisplay}" data-photo="${medias.image}"  alt="kid" class ="card-img">
              <footer class="card-footer">
                <div class="card-content">
                  <h4 class="card-title">${media.title}</h4>              
                  <div class="card_btn">
                    <span class="card-counter">${media.likes}<i class="card-like fas fa-heart"></i></span>
                  </div>
                </div>
              </footer>
            </a>
          </div>
          `
        cardContainer.innerHTML = cardContainer.innerHTML + mediaCardImage;
      } else {
        photoToDisplay = media.video;
        //return card video with model and panel controle
        const mediaCardVideo = `
          <div class="cards" >      
            <a class="card"  href="#" data-title="${media.title}" onclick="displayLightBox(this)">
              <video class ="card-video" data-photo ="${media.video}" alt="test" src="./assets/photos/${photoToDisplay}"></video>
              <footer class="card-footer">
                <div class="card-content">
                  <h4 class="card-title">${media.title}</h4>              
                  <div class="card_btn">
                    <span class="card-counter">${media.likes}<i class="card-like fas fa-heart"></i></span>
                  </div>
                </div>
              </footer>
            </a>
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
        console.log(medias);
 
        //return card image with model
        const mediaLightBoxImage = `
        div class="containerBackground">
          <div id="lightBoxBody" data-title="${media.title}">
            <i class="fas fa-times X-close closeIcon" onclick="closeLightBox()"></i>
            <img src="./assets/photos/${photoToDisplayBox}" alt="placeHolder" class ="cardBox-img">
            <i class="fas fa-chevron-left leftIcon"></i>
            <i class="fas fa-chevron-right rightIcon"></i>

            <div id="photoTitle">${media.title}</div>
            <span class="lightBoxCounter">${media.likes}<i class="lightBoxLike fas fa-heart"></i></span>
          </div>
        </div>
          `
        lightContainer.innerHTML = lightContainer.innerHTML + mediaLightBoxImage;
      } else {
        photoToDisplayBox = media.video;
        //return card video with model and panel controle
        const mediaLightBoxVideo = `
          <div id="lightBoxBody" data-title="${media.title}">
            <i class="fas fa-times X-close closeIcon" onclick="closeLightBox()"></i>
            <video class ="card-video-light" data-photo ="${media.video}" alt="test" src="./assets/photos/${photoToDisplayBox}" controls="controls"></video>
            <i class="fas fa-chevron-left leftIcon"></i>
            <i class="fas fa-chevron-right rightIcon"></i>
            <div id="videoTitle">${media.title}</div>
          </div>
          `
        lightContainer.innerHTML = lightContainer.innerHTML + mediaLightBoxVideo;
      }
    })
        
    document.getElementById("nbLikes").innerText = nbLike;
  }
  return { name, picture, fillPagePhotographe}
}
