module.exports = (connection, DataTypes) => {
    const userSchema ={
        first_name : {
            type : DataTypes.STRING(255)
        },
        last_name : {
            type : DataTypes.STRING(50)
        },
        phone:{
            type : DataTypes.INTEGER(10)
        },
        email:{
            type : DataTypes.STRING(50)
        },
        password:{
            type : DataTypes.STRING(20)
        }
    }

    return connection.define('user',userSchema);
}