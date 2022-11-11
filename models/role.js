module.exports = (connection, DataTypes, Permission) => {
    const roleSchema = {
        role_name: {
            type: DataTypes.STRING(200)
        },
        role_type: {
            type: DataTypes.INTEGER(200)
        },
        // permission_id:{
        //     type: DataTypes.INTEGER,
        //     references:{
        //         model:Permission,
        //         key: 'id'
        //     }
        // }
    }

    return connection.define('role',roleSchema)
}

