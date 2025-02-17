// validator.js
const Ajv = require('ajv');
const ajv = new Ajv();
const schema = require('./Schema.js');

// Compile the schema
const validateProduct = ajv.compile(schema.productSchema);

// Middleware to validate the request body
const validateRequest = (req, res, next) => {
  const isValid = validateProduct(req.body);

  if (!isValid) {
    return res.status(400).json({ errors: validateProduct.errors });
  }

  next(); // Proceed if validation passes
};

module.exports = validateRequest;