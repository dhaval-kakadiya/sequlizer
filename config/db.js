const {Sequelize , DataTypes} = require('sequelize');

const connection = new Sequelize(process.env.DB,process.env.DB_USER,process.env.DB_PASSWORD , {
    host:process.env.HOST,
    port:3306,
    dialect:'mysql',
    // pool:{
    //     max : 5,
    //     min : 0,
    //     acquire: process.env.POOL_ACQUIRE,
    //     idle:process.env.POOL_IDLE
    // }
})

connection.authenticate().then(() => {
    console.log('Connection Has been Establise Successfully');
}).catch((err) => {
    console.log(err); 
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = connection;

db.Role = require('../models/role')(connection,DataTypes);
db.Permission = require('../models/permission')(connection,DataTypes, db.Role);
db.Game = require('../models/game')(connection,DataTypes);
db.Player = require('../models/player')(connection,DataTypes);
db.Product = require('../models/product')(connection,DataTypes, db.User);
db.User = require('../models/user')(connection,DataTypes);


// one to one relationship
// db.Permission.hasOne(db.Role,{foreignKey: 'permission_id'})
// db.Role.belongsTo(db.Permission,{foreignKey: 'permission_id'})

// one to many relationship
// db.Permission.hasMany(db.Role,{foreignKey: 'permission_id'})
// db.Role.belongsTo(db.Permission,{foreignKey: 'permission_id'})


// one to one relationship between role and permissions
db.Role.hasOne(db.Permission,{foreignKey: 'role_id'})
db.Permission.belongsTo(db.Role,{foreignKey: 'role_id'})

// one to many relationship between user and product
db.User.hasMany(db.Product,{foreignKey: 'user_id'})
db.Product.belongsTo(db.User,{foreignKey: 'user_id'})

// many to many relationship between game and player
db.Game.belongsToMany(db.Player,{
    through: 'game_players_mapping',
    foreignKey: 'game_id'
})

db.Player.belongsToMany(db.Game,{
    through: 'game_players_mapping',
    foreignKey: 'player_id'
})

// db.Product.belongsTo(db.User,{foreignKey: 'user_id'})

module.exports = db
