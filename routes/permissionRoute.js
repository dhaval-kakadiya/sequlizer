const express = require('express')
const router = express.Router();

const {addPermission,updatePermission,deletePermission,getPermission,getPermissionById} = require('../controllers/permissionController');

router.post('/' , addPermission)
router.get('/' , getPermission)
router.get('/:id' , getPermissionById)
router.put('/:id' , updatePermission)
router.delete('/:id' , deletePermission)

module.exports = router