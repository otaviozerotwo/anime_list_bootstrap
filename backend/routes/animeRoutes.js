const express = require('express');
const router = express.Router();
const { 
  getWatchingList,
  getCompletedList,
  getOnHoldList,
  getDroppedList,
  getPlanToWatchList
 } = require('../controllers/animeController');

router
  .route('/watching')
  .get((req, res) => getWatchingList(req, res));

router
  .route('/completed')
  .get((req, res) => getCompletedList(req, res));

router
  .route('/onHold')
  .get((req, res) => getOnHoldList(req, res));

router
  .route('/dropped')
  .get((req, res) => getDroppedList(req, res));

router
  .route('/planToWatch')
  .get((req, res) => getPlanToWatchList(req, res));

module.exports = router;