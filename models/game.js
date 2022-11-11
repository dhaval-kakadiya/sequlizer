module.exports = (connection, DataTypes) => {
    const gameSchema ={
        game_name : {
            type : DataTypes.STRING(20)
        },
        game_type : {
            type : DataTypes.STRING(20)
        }
    }

    return connection.define('game',gameSchema);
}