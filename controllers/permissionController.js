const db = require("../config/db");
const { Role, Permission } = db;

exports.addPermission = async (req, res) => {
  try {
    const permission = { 
        permission_name : req.body.permission_name,
        role_id : req.body.role_id
    }
    const newPermission = await Permission.create(permission);

    return res.status(200).json({
      success: true,
      message: "Added Permission",
      data: newPermission
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error
    });
  }
};

exports.getPermission = async (req, res) => {
    try {
      const allPermission = await Permission.findAll({
        include:[
          {
            model : Role
          }
        ]
      });
  
      return res.status(200).json({
        success: true,
        message: "Read All Permission",
        data: allPermission
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error
      });
    }
  };

  exports.getPermissionById = async (req, res) => {
    try {
        const { id } = req.params;
      const allPermission = await Permission.findByPk(id,{
        include:[
          {
            model : Role
          }
        ]
      });
  
      return res.status(200).json({
        success: true,
        message: "Read Permission By Id",
        data: allPermission
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error
      });
    }
  };

  exports.updatePermission = async (req, res) => {
    try {
        const { id } = req.params;
        const updatepermission = {
            permission_name : req.body.permission_name
        }
      const newPermission = await Permission.update(updatepermission,{where : {id}});
  
      return res.status(200).json({
        success: true,
        message: "Update Permission",
        data: newPermission
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error
      });
    }
  };

  exports.deletePermission = async (req, res) => {
    try {
        const { id } = req.params;
     
      const deletePermission = await Permission.destroy({where : {id}});
  
      return res.status(200).json({
        success: true,
        message: "Delete Permission",
        data: deletePermission,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error,
      });
    }
  };


