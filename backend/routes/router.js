const router = require('express').Router();
const animeRoutes = require('./animeRoutes');

router.use('/', animeRoutes);

module.exports = router;