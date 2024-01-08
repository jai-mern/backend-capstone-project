// controllers/inventoryController.js
const Product = require('../models/Product');

// Example function to get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add more functions as needed, e.g., createProduct, getProductById, updateProduct, deleteProduct, etc.

module.exports = {
  getAllProducts,
  // Add other exported functions here
};
