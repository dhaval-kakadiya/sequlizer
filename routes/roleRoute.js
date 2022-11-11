const express = require('express')
const router = express.Router();

const {addRole,getRole,getRoleById,updateRole,deleteRole} = require('../controllers/roleController');

router.post('/' , addRole)
router.get('/' , getRole)
router.get('/:id' , getRoleById)
router.put('/:id' , updateRole)
router.delete('/:id' , deleteRole)

module.exports = router