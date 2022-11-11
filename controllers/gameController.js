const db = require("../config/db");
const { Game, Player } = db;

exports.addGame = async (req, res) => {
  try {
    const game = {
        game_name : req.body.game_name,
        game_type : req.body.game_type
    }
    const newGame = await Game.create(game);

const players = req.body.players;

if (Array.isArray(players) && players.length) {  
  await Promise.all(players.map(async (player) =>{
    const newPlayer = await Player.findByPk(player);
    if (newPlayer) {
      await newGame.addPlayer(newPlayer);
    }
  }))
}

    return res.status(200).json({
      success: true,
      message: "Added Game",
      data: newGame
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error
    });
  }
};

exports.getGame = async (req, res) => {
    try {
      const allGame = await Game.findAll({
        attributes:['game_name'],
        include: [
          {
            model: Player,
            attributes: ['player_name','age'],
            through:{
              attributes: []
            }
          }
        ]
      });

      allGame.map((game) =>{
        game.game_name = game.game_name.toUpperCase();
      })
  
      return res.status(200).json({
        success: true,
        message: "Read All Game",
        data: allGame
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error
      });
    }
  };

  exports.getGameById = async (req, res) => {
    try {
        const { id } = req.params;
      const allGame = await Game.findByPk(id);
  
      return res.status(200).json({
        success: true,
        message: "Read Game By Id",
        data: allGame
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error
      });
    }
  };

  exports.updateGame = async (req, res) => {
    try {
        const { id } = req.params;
        const updategame = {
            game_name : req.body.game_name
        }
      const newGame = await Game.update(updategame,{where : {id}});
  
      return res.status(200).json({
        success: true,
        message: "Update Game",
        data: newGame
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error
      });
    }
  };

  exports.deleteGame = async (req, res) => {
    try {
        const { id } = req.params;
     
      const deleteGame = await Game.destroy({where : {id}});
  
      return res.status(200).json({
        success: true,
        message: "Delete Game",
        data: deleteGame
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error
      });
    }
  };


