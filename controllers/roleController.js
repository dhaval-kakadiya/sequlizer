const db = require("../config/db");
const { Role, Permission } = db;

exports.addRole = async (req, res) => {
  try {
    const role = {
        role_name : req.body.role_name,
        role_type : req.body.role_type,
        permission_id : req.body.permission_id
    }

    const newRole = await Role.create(role);

    return res.status(200).json({
      success: true,
      message: "Added Role",
      data: newRole,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

exports.getRole = async (req, res) => {
    try {
      const allRole = await Role.findAll({
        include:[{
            model: Permission
          }]
      });
  
      return res.status(200).json({
        success: true,
        message: "Read All Role",
        data: allRole,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error,
      });
    }
  };

  exports.getRoleById = async (req, res) => {
    try {
        const { id } = req.params;
      const allRole = await Role.findByPk(id,{
        includes : [{
            model : Permission
          }]
      });
  
      return res.status(200).json({
        success: true,
        message: "Read Role By Id",
        data: allRole,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error,
      });
    }
  };

  exports.updateRole = async (req, res) => {
    try {
        const { id } = req.params;
        const updaterole = {
            role_name : req.body.role_name,
            role_type : req.body.role_type
        }
      const newRole = await Role.update(updaterole,{where : {id}});
  
      return res.status(200).json({
        success: true,
        message: "Update Role",
        data: newRole,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error,
      });
    }
  };

  exports.deleteRole = async (req, res) => {
    try {
        const { id } = req.params;
     
      const deleteRole = await Role.destroy({where : {id}});
  
      return res.status(200).json({
        success: true,
        message: "Delete Role",
        data: deleteRole,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error,
      });
    }
  };


