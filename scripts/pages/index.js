async function getPhotographers() {
	//Change constant to variable. We declare a "photographers" array
	let photographers = [];
	
	// and return the photographers array only once 
	await fetch("/data/photographers.json")
		.then(reponse => reponse.json())
		.then((data) => (photographers = data.photographers))
	return { photographers}
}

async function displayData(photographers) {
	const photographersSection = document.querySelector(".photographer_section");

	photographers.forEach((photographer) => {
		const photographerModel = photographerFactory(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
};

async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers();
	displayData(photographers);
};

init();
