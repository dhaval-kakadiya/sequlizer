const db = require("../config/db");
const { Product, User } = db;

exports.addProduct = async (req, res) => {
  try {
    const product = {
      product_name: req.body.product_name,
      price: req.body.price,
      user_id: req.body.user_id
    };

    const newProduct = await Product.create(product);

    return res.status(200).json({
      success: true,
      message: "Added Product",
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const allProduct = await Product.findAll({
      include: [
        {
          model: User
        }
      ]
    });

    return res.status(200).json({
      success: true,
      message: "Read All Product",
      data: allProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const allProduct = await Product.findByPk(id,{
      include: [
        {
          model: User
        }
      ]
    });

    return res.status(200).json({
      success: true,
      message: "Read Product By Id",
      data: allProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateproduct = {
      product_name: req.body.product_name,
      product_type: req.body.product_type,
    };
    const newProduct = await Product.update(updateproduct, { where: { id } });

    return res.status(200).json({
      success: true,
      message: "Update Product",
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteProduct = await Product.destroy({ where: { id } });

    return res.status(200).json({
      success: true,
      message: "Delete Product",
      data: deleteProduct,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error,
    });
  }
};
