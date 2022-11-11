module.exports = (connection, DataTypes) => {
    const playerSchema ={
        player_name : {
            type : DataTypes.STRING(20)
        },
        gender : {
            type : DataTypes.STRING(6)
        },
        age : {
            type : DataTypes.INTEGER(2)
        }
    }

    return connection.define('player',playerSchema);
}