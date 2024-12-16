const API_URL = 'http://localhost:3000/api';

/**
 * @description Obtém a lista de animês do usuário com status "Watching" da API.
 * @returns {Promise<Object[]>} - Uma Promise que resolve com um array de objetos de animes.
 */
async function fetchWatchingList() {
  const response = await fetch(`${API_URL}/watching`);
  const data = await response.json();

  return data;
}

/**
 * @description Obtém a lista de animês do usuário com status "Completed" da API.
 * @returns {Promise<Object[]>} - Uma Promise que resolve com um array de objetos de animes.
 */
async function fetchCompletedList() {
  const response = await fetch(`${API_URL}/completed`);
  const data = await response.json();

  return data;
}

/**
 * @description Obtém a lista de animês do usuário com status "On Hold" da API.
 * @returns {Promise<Object[]>} - Uma Promise que resolve com um array de objetos de animes.
 */
async function fetchOnHoldList() {
  const response = await fetch(`${API_URL}/onhold`);
  const data = await response.json();

  return data;
}

/**
 * @description Obtém a lista de animês do usuário com status "Dropped" da API.
 * @returns {Promise<Object[]>} - Uma Promise que resolve com um array de objetos de animes.
 */
async function fetchDroppedList() {
  const response = await fetch(`${API_URL}/dropped`);
  const data = await response.json();

  return data;
}

/**
 * @description Obtém a lista de animês do usuário com status "Plan to Watch" da API.
 * @returns {Promise<Object[]>} - Uma Promise que resolve com um array de objetos de animes.
 */
async function fetchPlanToWatchList() {
  const response = await fetch(`${API_URL}/plantowatch`);
  const data = await response.json();

  return data;
}

/**
 * @description Renderiza uma lista de cartas de anime com base nos dados retornados pela API.
 * @param {function} fetchFunction - Uma função que busca os dados do anime da API.
 * @param {string} containerId - O ID do elemento contêiner onde os cards de anime devem ser renderizados.
 * @returns {Promise<void>} - Uma Promise que se resolve quando todos os cards de anime forem renderizados.
 */
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

/**
 * @description Carrega as listas de animes quando a página termina de carregar.
 * Essa função é automaticamente chamada quando a página terminar de carregar.
 * Ela renderiza as listas de watching, completed, on hold, dropped e plan to watch quando a página terminar de carregar.
 */
window.onload = () => {
  renderAnimeList(fetchWatchingList, 'cardsWatching');
  renderAnimeList(fetchCompletedList, 'cardsCompleted');
  renderAnimeList(fetchOnHoldList, 'cardsOnHold');
  renderAnimeList(fetchDroppedList, 'cardsDropped');
  renderAnimeList(fetchPlanToWatchList, 'cardsPlanToWatch');
}