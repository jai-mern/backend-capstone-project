// controllers/billingController.js
const Invoice = require('../models/Invoice');

// Example function to create a new invoice
const createInvoice = async (req, res) => {
  try {
    // Extract necessary information from the request body
    const { customer, products } = req.body;

    // Calculate totalAmount based on product prices and quantities
    const totalAmount = products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);

    // Create the invoice
    const newInvoice = await Invoice.create({
      customer,
      products,
      totalAmount,
    });

    res.json(newInvoice);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Add more functions as needed, e.g., getInvoices, getInvoiceById, updateInvoice, deleteInvoice, etc.

module.exports = {
  createInvoice,
  // Add other exported functions here
};
