function profileFactories(photographeObject) {
  const { name, city, country, tagline, portrait, id, medias, price} = photographeObject;
  const picture = `assets/photographers/${portrait}`;
  // const image = `assets/photos/${photo}`;
  // const pictureVideo = `assets/photos/${video}`;
  
  const mediaArray = photographeObject.medias;
  const mediaData = mediaArray.filter(mediaArray => mediaArray.id);  

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

   //Test   
    console.log(mediaArray); //Test pour voir toutes les images du photographe
    console.log(mediaData[1]);//Test pour voir les données pour une image du photographe
    console.log(mediaData[1].image);//Test pour voir images
    console.log(mediaData[1].likes);//Test pour voir les likes

    //Test afffichage une image
    const photo1 = mediaData[1].image;
    const boxImage = document.querySelector(".cardBox-img");
    // boxImage.innerHTML = `<img src="./assets/photos/${photo1}" alt="placeHolder" class ="cardBox-img">`
    // console.log(photo1);

    mediaArray.keys ();
    article.appendChild(img);
    article.appendChild(title);
    article.appendChild(location);
    article.appendChild(catchWords);
    article.appendChild(photographeName);
    article.appendChild(priceDay);
    article.appendChild(name);
    article.appendChild(boxImage);
      
    return (article);
  }
  return { name, picture, fillPagePhotographe}
}
