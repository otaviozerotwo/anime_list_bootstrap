require('dotenv').config();

const BASE_URL = process.env.BASE_URL;

/**
 * @description Realiza uma requisicao HTTP GET para a API do MyAnimeList,
 * adicionando o endpoint recebido como parametro a URL da API.
 * @param {string} endpoint - O endpoint da API que deve ser consumido.
 * @returns {Promise<Object>} - Um objeto com os dados retornados pela API.
 * @throws {Error} - Caso ocorra algum erro durante a requisicao.
 */
async function fetchFromApi(endpoint) {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`Erro ao buscar ${endpoint}: ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Erro ao consumir a API: ${error.message}`);
    throw error;
  }
};

module.exports = { fetchFromApi };