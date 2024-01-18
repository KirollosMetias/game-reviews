

export async function getDetails(id){
    const loading = document.getElementById("loader");
    loading.classList.remove("d-none");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f094ad9361msh0815f7aa7855d13p1b775bjsnea9823785c9d',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
	let result = await api.json();
    showDetails(result)
    loading.classList.add("d-none")
	console.log(result);
} catch (error) {
	console.error(error);
}
}
function showDetails(data){
    const closeBtn = document.querySelector('#btnClose');
const home = document.querySelector('#home');
const showDetailsInfo = document.querySelector("#details .row");
const details = document.querySelector('#details');
let detailsData = data;
    let blackBox = `<div class="col-md-4">
    <img src="${data.thumbnail}" class="w-100" alt="image details" />
 </div>
 <div class="col-md-8">
    <h3>Title: ${detailsData.title}</h3>
    <p>Category: <span class="badge text-bg-info"> ${detailsData.genre}</span> </p>
    <p>Platform: <span class="badge text-bg-info"> ${detailsData.platform}</span> </p>
    <p>Status: <span class="badge text-bg-info"> ${detailsData.status}</span> </p>
    <p class="small">${detailsData.description}</p>
    <a class="btn btn-outline-warning" target="_blank" href="${detailsData.game_url}">Show Game</a>
    </div>`;
    showDetailsInfo.innerHTML=blackBox;
    details.classList.remove('d-none');
    home.classList.add('d-none');
    closeBtn.addEventListener('click', () => {
        details.classList.add('d-none');
        home.classList.remove('d-none');
    });
}