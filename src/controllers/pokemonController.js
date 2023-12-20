const pokemonService = require('../services/pokemonService');

exports.getAllPokemon = async (req, res) => {
  try {
    const result = await pokemonService.getAllPokemon();
    res.json(result);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.createPokemon = async (req, res) => {
  try {
    const { name, hp, cp, picture, types, created } = req.body;
    const result = await pokemonService.createPokemon({ name, hp, cp, picture, types, created });
    res.status(201).json(result);
  } catch (error) {
    console.error('Error creating Pokemon', error);
    res.status(500).send('Internal Server Error');
  }
};

//test de blabla