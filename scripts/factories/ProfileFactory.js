function profileFactories(photographeObject) {
  const { name, city, country, tagline, portrait, id, medias, price, video, image} = photographeObject;
  const picture = `assets/photographers/${portrait}`;
  
  // const { id, photographerId, altTxt, date, likes, name, price, tags, title, video, image } = data;
  const picturephoto = `assets/photos/${image}`;
  const pictureVideo = `assets/photos/${video}`;

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

    //image pour test lightBox
    // const boxImage = document.querySelector('.cardBox-img');
    // boxImage.innerHTML = `<img src="assets/photos/${photo}" class="cardBox-img"></img>`;
         
    article.appendChild(img);
    article.appendChild(title);
    article.appendChild(location);
    article.appendChild(catchWords);
    article.appendChild(photographeName);
    article.appendChild(priceDay);
    article.appendChild(name);
    // article.appendChild(boxImage);

    displayLightBox();
    closeLightBox();

    return (article);
  }
  return { name, picture, fillPagePhotographe}
}
