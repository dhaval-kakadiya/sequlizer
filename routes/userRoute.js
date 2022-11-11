const express = require('express')
const router = express.Router();

const {
    addUser,
    updateUser,
    deleteUser,
    getUser,
    getUserById
} = require('../controllers/userController');

router.post('/' , addUser)
router.get('/' , getUser)
router.get('/:id' , getUserById)
router.put('/:id' , updateUser)
router.delete('/:id' , deleteUser)

module.exports = router