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

    //display media
    // console.log(medias);
    let nbLike = 0;
    const cardContainer = document.querySelector('.card-container');
    medias.map(media => {
      nbLike += media.likes;
      let photoToDisplay;
      if(media.image){ 
        photoToDisplay = media.image;
        const mediaCardImage = `
          <div class="cards" >      
            <a class="card"  href="#" data-title="${media.title}" onclick="displayLightBox(this)">
              <img src="./assets/photos/${photoToDisplay}" alt="kid" class ="card-img">
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
        const mediaCardVideo = `
          <div class="cards" >      
            <a class="card"  href="#" data-title="${media.title}" onclick="displayLightBox(this)">
            <video class ="card-img" alt="test" src="./assets/photos/${photoToDisplay}"></video>
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
    displayLightBox();
    closeLightBox();
    displayModal();
    closeModal();
    document.getElementById("nbLikes").innerText = nbLike;
  }
  return { name, picture, fillPagePhotographe}
}
