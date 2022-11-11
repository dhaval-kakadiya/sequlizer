const express = require('express')
const router = express.Router();

const {addPlayer,updatePlayer,deletePlayer,getPlayer,getPlayerById} = require('../controllers/playerController');

router.post('/' , addPlayer)
router.get('/' , getPlayer)
router.get('/:id' , getPlayerById)
router.put('/:id' , updatePlayer)
router.delete('/:id' , deletePlayer)

module.exports = router