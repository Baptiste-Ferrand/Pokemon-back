require('dotenv').config();
const express = require('express');
const { Pool } = require('pg'); // Utilisation de la bibliothèque pg
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: 'localhost',
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT || 5432,
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
}
);
app.get('/getallpokemon', async (req, res) => {
  try {
    // Utilisation d'une requête SQL pour récupérer tous les Pokémon de la table
    const result = await pool.query('SELECT * FROM pokemons');

    // Envoi des résultats en tant que réponse
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/createpokemon', async (req, res) => {
  try {
    const { name, hp, cp, picture, types, created } = req.body;

    // Utilisation d'une requête SQL pour insérer un nouveau Pokémon
    const result = await pool.query(
        'INSERT INTO pokemons (name, hp, cp, picture, types, created) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [name, hp, cp, picture, types, created]
    );

    // Envoi du Pokémon créé en tant que réponse
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating Pokemon', error);
    res.status(500).send('Internal Server Error');
  }
});