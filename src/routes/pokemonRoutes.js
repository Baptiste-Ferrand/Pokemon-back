const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/getall', pokemonController.getAllPokemon);
router.post('/create', pokemonController.createPokemon);

module.exports = router;
