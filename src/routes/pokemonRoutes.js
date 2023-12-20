const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

router.get('/getall', pokemonController.getAllPokemon);
router.post('/create', pokemonController.createPokemon);
router.get('/get/:id', pokemonController.getOnePokemon);
router.put('/update/:id', pokemonController.updateOnePokemon);
router.delete('/delete/:id', pokemonController.deleteOnePokemon);


module.exports = router;
