const db = require("../config/db");
const { Player, Game } = db;

exports.addPlayer = async (req, res) => {
  try {
    const player = {
        player_name : req.body.player_name,
        age : req.body.age,
        gender : req.body.gender
    }

    const newPlayer = await Player.create(player);

    const games = req.body.games;

    if(Array.isArray(games)) {
      await Promise.all(games.map(async (game) =>{
          const findgame = await Game.findByPk(game)
          if(findgame) {
            await newPlayer.addGame(findgame)
          }
      } ))
    }

    return res.status(200).json({
      success: true,
      message: "Added Player",
      data: newPlayer
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error
    });
  }
};

exports.getPlayer = async (req, res) => {
    try {
      const allPlayer = await Player.findAll({
        include: [
          {
            model: Game,
            through:{
              attributes: []
            }
          }
        ]
      });
  
      return res.status(200).json({
        success: true,
        message: "Read All Player",
        data: allPlayer
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error
      });
    }
  };

  exports.getPlayerById = async (req, res) => {
    try {
        const { id } = req.params;
      const allPlayer = await Player.findByPk(id);
  
      return res.status(200).json({
        success: true,
        message: "Read Player By Id",
        data: allPlayer
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error
      });
    }
  };

  exports.updatePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const updateplayer = {
            player_name : req.body.player_name
        }
      const newPlayer = await Player.update(updateplayer,{where : {id}});
  
      return res.status(200).json({
        success: true,
        message: "Update Player",
        data: newPlayer
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error
      });
    }
  };

  exports.deletePlayer = async (req, res) => {
    try {
        const { id } = req.params;
     
      const deletePlayer = await Player.destroy({where : {id}});
  
      return res.status(200).json({
        success: true,
        message: "Delete Player",
        data: deletePlayer
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error
      });
    }
  };


