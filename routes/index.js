const express = require('express');
const router = express.Router();

const roleRoute = require('./roleRoute')
const permissionRoute = require('./permissionRoute')
const gameRoute = require('./gameRoute')
const playerRoute = require('./playerRoute')
const userRoute = require('./userRoute')
const productRoute = require('./productRoute')

router.use('/roles' , roleRoute);
router.use('/permissions' , permissionRoute);
router.use('/games' , gameRoute);
router.use('/players' , playerRoute);
router.use('/users' , userRoute);
router.use('/products' , productRoute);

module.exports = router;