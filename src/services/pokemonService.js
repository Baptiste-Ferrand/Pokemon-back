require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.POSTGRES_USER || "postgres",
  host: 'Pokedex',
  database: process.env.POSTGRES_DB ||"postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
  port: process.env.POSTGRES_PORT || 5432,
});

exports.getAllPokemon = async () => {
  const result = await pool.query('SELECT * FROM pokemons');
  return result.rows;
};

exports.createPokemon = async ({ name, hp, cp, picture, types, created }) => {
  const result = await pool.query(
    'INSERT INTO pokemons (name, hp, cp, picture, types, created) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [name, hp, cp, picture, types, created]
  );
  return result.rows[0];
};
