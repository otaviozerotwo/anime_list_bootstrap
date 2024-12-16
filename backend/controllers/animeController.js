const { fetchFromApi } = require('../utils/apiClient');
const listModel = require('../models/listModel');

async function fetchAnimeById(id) {
  try {
    const data = await fetchFromApi(`/anime/${id}`);

    return data.data;
  } catch (error) {
    console.error(`Erro ao buscar anime com ID ${id}: ${error.message}`);
    return null;
  }
}

async function fechAnimeList(ids) {
  const animePromises = ids.map(id => fetchAnimeById(id));
  const animes = await Promise.all(animePromises);

  return animes.filter(anime => anime !== null);
}

const getWatchingList = async (req, res) => {
  const animes = await fechAnimeList(listModel.watching);

  res.status(200).json(animes);
};

const getCompletedList = async (req, res) => {
  const animes = await fechAnimeList(listModel.completed);

  res.status(200).json(animes);
}

const getOnHoldList = async (req, res) => {
  const animes = await fechAnimeList(listModel.onHold);

  res.status(200).json(animes);
}

const getDroppedList = async (req, res) => {
  const animes = await fechAnimeList(listModel.dropped);

  res.status(200).json(animes);
}

const getPlanToWatchList = async (req, res) => {
  const animes = await fechAnimeList(listModel.planToWatch);

  res.status(200).json(animes);
}

module.exports = { 
  getWatchingList,
  getCompletedList,
  getOnHoldList,
  getDroppedList,
  getPlanToWatchList
};