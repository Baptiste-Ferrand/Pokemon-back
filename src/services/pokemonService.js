require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.POSTGRES_USER || "postgres",
  host: process.env.POSTGRES_HOST || 'Pokedex',
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

exports.deleteOnePokemon = async (id) => {
  const result = await pool.query('DELETE FROM pokemons WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

exports.updateOnePokemon = async (id, { name, hp, cp, picture, types, created }) => {
  const result = await pool.query(
    'UPDATE pokemons SET name = $2, hp = $3, cp = $4, picture = $5, types = $6, created = $7 WHERE id = $1 RETURNING *',
    [id, name, hp, cp, picture, types, created]
  );
  return result.rows[0];
};

exports.getOnePokemon = async (id) => {
  const result = await pool.query('SELECT * FROM pokemons WHERE id = $1', [id]);
  return result.rows[0];
};
