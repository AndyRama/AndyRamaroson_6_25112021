function photographerFactory(data) {
    const { name, portrait, city, country, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        //ajout city
        const hCity = document.createElement('h3');
        hCity.classList.add('city');
        hCity.textContent = `${city}, ${country}`; 

        //ajout tagline
        const pTagLine = document.createElement('p');
        pTagLine.classList.add('tagline');
        pTagLine.textContent = tagline; 

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(hCity);
				article.appendChild(pTagLine);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}