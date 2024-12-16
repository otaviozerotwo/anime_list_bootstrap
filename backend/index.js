require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('./routes/router');

const app = express();
const PORT = process.env.NODE_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
