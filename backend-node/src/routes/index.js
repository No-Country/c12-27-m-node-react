const express = require('express');

// Define routes
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const productRoutes = require('./product.routes');
const categoryRoutes = require('./category.routes');

const handlerRoutes = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);

  // Exect routes
  router.use('/auth', authRoutes);
  router.use('/users', userRoutes);
  router.use('/products', productRoutes);
  router.use('/categories', categoryRoutes);
};

module.exports = handlerRoutes;
