const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animeController');

router
  .route('/animes')
  .get((req, res) => animeController.getAllAnimes(req, res));

router
  .route('/animes/:id')
  .get((req, res) => animeController.getAnimeById(req, res));

module.exports = router;