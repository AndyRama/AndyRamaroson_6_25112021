function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;
  const picture = `assets/photographers/${portrait}`;

	function getUserCardDOM() {
		const article = document.createElement('article');
    
		//add image
		const img = document.createElement('img');
		img.setAttribute("src", picture);

		//add title
		const h1 = document.createElement('h1');
		h1.textContent = name;

		//add city & country
		const hCity = document.createElement('h2');
		hCity.textContent = `${city}, ${country}`; 
		hCity.classList.add('city');

		//add tagline
		const pTagLine = document.createElement('p');
		pTagLine.textContent = tagline; 
		pTagLine.classList.add('tagline');

		//add price
		const sPrice = document.createElement('span');
		sPrice.textContent = `${price}€ /jour`;
		sPrice.classList.add('price');

		//link profile
		function linkProfile() {
			window.open(`photographer.html?id=${id}`);
		}

		article.appendChild(img);
		article.appendChild(h1);
		article.appendChild(hCity);
		article.appendChild(pTagLine);
		article.appendChild(sPrice);
		article.addEventListener("click", linkProfile);

		return (article);
	}
	return { name, picture, getUserCardDOM }
}