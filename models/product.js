module.exports = (connection, DataTypes, User) => {
    const productSchema ={
        product_name : {
            type : DataTypes.STRING(20)
        },
        price : {
            type : DataTypes.INTEGER(6)
        },
        user_id : {
            type : DataTypes.INTEGER,
             refrences:{
                model: User,
                key: 'id'
             }
        }
    }

    return connection.define('product',productSchema);
}