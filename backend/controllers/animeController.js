const { fetchFromApi } = require('../utils/apiClient');

const animeController = {
  /**
   * @description Fetches the list of all animes from the MyAnimeList API.
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<Object[]>} - A promise that resolves with an array of anime objects.
   */
  getAllAnimes: async (req, res) => {
    try {
      const data = await fetchFromApi('/anime');
      res.status(200).json(data.data);
    } catch (error) {
      console.error(`Erro no animeController: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
  },

  /**
   * @description Fetches a specific anime by its ID from the MyAnimeList API.
   * @param {Object} req - The request object, containing the anime ID in its parameters.
   * @param {Object} res - The response object used to return the result.
   * @returns {Promise<void>} - A promise that resolves when the response is sent.
   */
  getAnimeById: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await fetchFromApi(`/anime/${id}`);

      res.status(200).json(data.data);
    } catch (error) {
      console.error(`Erro ao buscar anime pelo ID: ${error.message}`);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = animeController;