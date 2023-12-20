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

exports.getOnePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pokemonService.getOnePokemon(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).send('Pokemon not found');
    }
  } catch (error) {
    console.error('Error getting Pokemon', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.updateOnePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, hp, cp, picture, types, created } = req.body;
    const result = await pokemonService.updateOnePokemon(id, { name, hp, cp, picture, types, created });
    if (result) {
      res.json(result);
    } else {
      res.status(404).send('Pokemon not found');
    }
  } catch (error) {
    console.error('Error updating Pokemon', error);
    res.status(500).send('Internal Server Error');
  }
};

exports.deleteOnePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pokemonService.deleteOnePokemon(id);
    if (result) {
      res.json(result);
    } else {
      res.status(404).send('Pokemon not found');
    }
  } catch (error) {
    console.error('Error deleting Pokemon', error);
    res.status(500).send('Internal Server Error');
  }
};
