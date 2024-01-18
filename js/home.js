import {getDetails} from "./details.js";
export async function getGames(category){
    const loading = document.getElementById("loader");
      loading.classList.remove("d-none");
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f094ad9361msh0815f7aa7855d13p1b775bjsnea9823785c9d',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    
        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category?category:"mmorpg"}`, options);
        let result = await api.json();
        showGames(result)
        loading.classList.add("d-none");
        console.log(result);
        
    }
    // getGames()
    
    const getGamesInfo = document.getElementById('cardInfo')
    function showGames(info){
        
        let blacBox = ''
        for (let i = 0; i < info.length; i++){
            const data = info[i]
            blacBox += `<div class="col-sm-6 col-md-4 col-lg-3 mt-5">
            <div class="card h-100 bg-transparent" dataId="${data.id}"   role="button">
            <div  class="card-body">
            <div class="position-relative">
                <img class="card-img-top img-fluid" src="${data.thumbnail}" />
            </div>
            <div>
                <div class="card-info justify-content-between">
                    <h3 class="text-white pt-3">${data.title}</h3>
                    <span class="badge text-bg-primary p-2">Free</span>
                </div>
                    <p class="card-text text-white pt-2 pb-4 text-center opacity-50">${data.short_description}</p>
            </div>
                </div>
                <div class="card-footer small  justify-content-between">
                    <span class="badge badge-color">${data.genre}</span>
                    <span class="badge badge-color">PC ${data.platform}</span>
                </div>
            </div>
        </div>`;
        }
        getGamesInfo.innerHTML = blacBox;
        getGamesInfo.addEventListener('click' , (event)=>{
            const card = event.target.closest('.card');
            if(card){
                getDetails(card.getAttribute('dataId'))
            }
        })
    }
    