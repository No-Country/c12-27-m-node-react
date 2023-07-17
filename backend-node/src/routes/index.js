const express = require('express');

// Define routes
const authRouter = require('./auth.routes');

const handlerRoutes = (app) => {
  const router = express.Router();
  app.use('/api/v1', router);

  // Exect routes
  router.use('/auth', authRouter);
};

module.exports = handlerRoutes;
