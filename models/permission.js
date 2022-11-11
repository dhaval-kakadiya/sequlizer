module.exports = (connection, DataTypes, Role) => {
    const permissionSchema = {
        permission_name: {
            type: DataTypes.STRING(200)
        },
        role_id: {
            type: DataTypes.INTEGER,
            references:{
                model: Role,
                key: 'id'
            }
        }
    }
    return connection.define('permission',permissionSchema)
}
 