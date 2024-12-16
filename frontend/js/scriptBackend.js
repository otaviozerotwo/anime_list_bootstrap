const API_URL = 'http://localhost:3000/api';

async function fetchWatchingList() {
  const response = await fetch(`${API_URL}/watching`);
  const data = await response.json();

  return data;
}

async function fetchCompletedList() {
  const response = await fetch(`${API_URL}/completed`);
  const data = await response.json();

  return data;
}

async function fetchOnHoldList() {
  const response = await fetch(`${API_URL}/onhold`);
  const data = await response.json();

  return data;
}

async function fetchDroppedList() {
  const response = await fetch(`${API_URL}/dropped`);
  const data = await response.json();

  return data;
}

async function fetchPlanToWatchList() {
  const response = await fetch(`${API_URL}/plantowatch`);
  const data = await response.json();

  return data;
}

async function renderAnimeList(fetchFunction, containerId) {
  const animes = await fetchFunction();
  const container = document.getElementById(containerId);

  container.innerHTML = '';

  animes.forEach(anime => {
    const card = `
       <div class="col-12 col-md-6 col-lg-4">
         <div class="card text-center border border-5 border-warning-subtle border-opacity-75">
 	        <div class="card-header">
 	          <p class="h5 p-custom">${anime.title}</p>  
 	        </div>
 	        <img src="${anime.images.jpg.image_url}" class="card-img-top card-img-custom" alt="Poster ${anime.title}">
 	        <div class="card-body">
 	          <p class="card-text">${anime.season || 'Season Unknown'}</p>
 	        </div>
 	        <div class="card-footer">? / ${anime.episodes || '?'}</div>
         </div>
       </div>
     `;

     container.innerHTML += card;
   });
}

window.onload = () => {
  renderAnimeList(fetchWatchingList, 'cardsWatching');
  renderAnimeList(fetchCompletedList, 'cardsCompleted');
  renderAnimeList(fetchOnHoldList, 'cardsOnHold');
  renderAnimeList(fetchDroppedList, 'cardsDropped');
  renderAnimeList(fetchPlanToWatchList, 'cardsPlanToWatch');
}