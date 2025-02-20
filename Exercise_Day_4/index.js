const express = require('express');
const validateRequest = require('./Validator.js');
const products = require('./Products.js');

const app = express();
app.use(express.json());

let nextId = 3;

const findProductById = (id) => products.find((p) => p.id === id);


app.get('/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = findProductById(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
});


app.post('/products', validateRequest, (req, res) => {
  const newProduct = {
    id: nextId++,
    ...req.body
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});


app.put('/products/:id', validateRequest, (req, res) => {
  const productId = parseInt(req.params.id);
  const product = findProductById(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  Object.assign(product, req.body);
  res.status(200).json(product);
});

app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  products.splice(productIndex, 1);
  res.status(204).send();
});


app.listen(3000, () => {
  console.log('Server is running on PORT 3000');
});
