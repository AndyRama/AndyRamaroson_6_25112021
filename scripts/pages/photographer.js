//Page profil du photographe Aquisition des éléments 
async function getPhotographerById() {
	let photographers = [];
  let medias = [];
	let paramsUrlProfile = new URLSearchParams(window.location.search);
  let id = paramsUrlProfile.get('id');

	await fetch("./photographers.json")
		.then(reponse => reponse.json())
		.then((data) => (photographers = data.photographers))
    // console.log(photographers);

    let photographeObject = photographers.find(photographe => photographe.id == id)

    await fetch("./photographers.json")
		.then(reponse => reponse.json())
		.then((data) => (medias = data.media))
    // console.log(medias);

    const mediaArray = medias.filter(media => media.photographerId == id)
    photographeObject.medias = mediaArray
    // console.log(mediaArray); 

    const mediaData = mediaArray.filter(mediaArray => mediaArray.id);
    // console.log(mediaData[8]);

    // let testImage = mediaData[8].video;
    // let testTitle = mediaData[8].title;
    // let testLikes = mediaData[8].likes;
    // let testDate = mediaData[8].date;

    // console.log(testImage);
    // console.log(testTitle);
    // console.log(testLikes);
    // console.log(testDate);
      
	return { photographer: photographeObject }
}

async function displayDataPhotograph(photographer) {
  const photographerModel = profileFactories(photographer);
  photographerModel.fillPagePhotographe();
};

async function init() {
	// Récupère les datas des photographes
	const { photographer } = await getPhotographerById();
	displayDataPhotograph(photographer);
};

init();