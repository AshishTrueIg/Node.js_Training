// server.js
const express = require('express');
const validateRequest = require('./Validator.js');
const products = require('./Products.js');

const app = express();
app.use(express.json());

let nextId = 3; // Auto-increment ID for new products

// Helper function to find a product by ID
const findProductById = (id) => products.find((p) => p.id === id);

// GET /products - Get all products
app.get('/products', (req, res) => {
  res.status(200).json(products);
});

// GET /products/:id - Get a single product by ID
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = findProductById(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
});

// POST /products
app.post('/products', validateRequest, (req, res) => {
  const newProduct = {
    id: nextId++,
    ...req.body
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /products/:id - Update a product by ID
app.put('/products/:id', validateRequest, (req, res) => {
  const productId = parseInt(req.params.id);
  const product = findProductById(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  Object.assign(product, req.body); // Update the product
  res.status(200).json(product);
});

// DELETE /products/:id - Delete a product by ID
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(productIndex, 1); // Remove the product
  res.status(204).send(); // No content
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on PORT 3000');
});