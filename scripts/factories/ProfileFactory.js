function profileFactories(photographObject) {
  const { name, city, country, tagline, portrait, id, medias, price} = photographObject;
  const picture = `assets/photographers/${portrait}`;

  function fillPagePhotographe() {
    const contact = document.querySelector(".contact_button");
    // const article = document.querySelector(".article");

    //Thumbs
    const img = document.getElementById('thumbs');
    img.setAttribute("src", picture)      

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
   
    // launch modal light event
    function displayLightModal() {
      ligthModalbg.style.display = "block";
    }

    article.appendChild(img);
    article.appendChild(title);
    article.appendChild(location);
    article.appendChild(catchWords);
    article.appendChild(photographeName);
    article.appendChild(priceDay);
    article.addEventListener("click", displayLightModal);

    return (article);
  }
  return { name, picture,fillPagePhotographe }
}