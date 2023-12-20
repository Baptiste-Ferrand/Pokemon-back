require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const pokemonRoutes = require('./routes/pokemonRoutes');

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

app.use('/pokemon/', pokemonRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
