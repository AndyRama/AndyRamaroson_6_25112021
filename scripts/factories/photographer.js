function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price, id } = data;
  const picture = `assets/photographers/${portrait}`;

	function getUserCardDOM() {
		const article = document.createElement('article');
		const img = document.createElement('img');
		img.setAttribute("src", picture)
		const h2 = document.createElement('h2');
		h2.textContent = name;

		//add city & country
		const hCity = document.createElement('h3');
		hCity.classList.add('city');
		hCity.textContent = `${city}, ${country}`; 

		//add tagline
		const pTagLine = document.createElement('p');
		pTagLine.classList.add('tagline');
		pTagLine.textContent = tagline; 

		//add price
		const sPrice = document.createElement('span');
		sPrice.classList.add('price');
		sPrice.textContent = `${price}€/jour`;

		//link profile
		function linkProfile() {
			window.open(`photographer.html?id=${id}`);
		}

		article.appendChild(img);
		article.appendChild(h2);
		article.appendChild(hCity)
		article.appendChild(pTagLine);
		article.appendChild(sPrice);
		article.addEventListener("click", linkProfile);

		return (article);
	}
	return { name, picture, getUserCardDOM }
}