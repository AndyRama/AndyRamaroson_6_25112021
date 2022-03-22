function profileFactories(profile) {
  const { name, city, country, tagline, portrait, id} = profile;
  const picture = `assets/photographers/${portrait}`;

  function cardProfile() {
    const contact = document.querySelector(".contact_button");
    //Thumbs
    const img = document.getElementById('thumbs');
    // img.setAttribute("src", picture)      

    //FullName
    const title = document.querySelector('.profil-title');
    title.innerHTML = name;

    //Come from
    const location = document.querySelector('.location');
    location.innerHTML = `${city}, ${country}`;

    //CatchWords
    const catchWords = document.querySelector('.slogan');
    catchWords.innerHTML = tagline;

    //FullName in modalContact
    const photographeName = document.querySelector(".modal-header")
    photographeName.innerHTML = "Contactez-moi" + "<br/>" + name;

    // launch modal light event
    function displayLightModal() {
      ligthModalbg.style.display = "block";
    }

    article.appendChild(img);
    article.appendChild(title);
    article.appendChild(location);
    article.appendChild(catchWords);
    article.appendChild(photographeName);
    article.addEventListener("click", displayLightModal);

    return (article);
  }
  return { name, picture, cardProfile}
}