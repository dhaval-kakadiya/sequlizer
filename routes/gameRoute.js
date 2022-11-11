const express = require('express')
const router = express.Router();

const {addGame,updateGame,deleteGame,getGame,getGameById} = require('../controllers/gameController');

router.post('/' , addGame)
router.get('/' , getGame)
router.get('/:id' , getGameById)
router.put('/:id' , updateGame)
router.delete('/:id' , deleteGame)

module.exports = router