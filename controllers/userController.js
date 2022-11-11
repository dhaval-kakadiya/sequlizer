const db = require("../config/db");
const { User, Product } = db;

exports.addUser = async (req, res) => {
  try {
    const user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      email: req.body.email,
      password: req.body.password
    };

    const newUser = await User.create(user);

    return res.status(200).json({
      success: true,
      message: "Added User",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const allUser = await User.findAll({
        include: [
          {
            model: Product
          }
        ]
    });

    return res.status(200).json({
      success: true,
      message: "Read All User",
      data: allUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const allUser = await User.findByPk(id,{
      include: [
        {
          model: Product
        }
      ]
  });

    return res.status(200).json({
      success: true,
      message: "Read User By Id",
      data: allUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateuser = {
      user_name: req.body.user_name,
      user_type: req.body.user_type,
    };
    const newUser = await User.update(updateuser, { where: { id } });

    return res.status(200).json({
      success: true,
      message: "Update User",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteUser = await User.destroy({ where: { id } });

    return res.status(200).json({
      success: true,
      message: "Delete User",
      data: deleteUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};
