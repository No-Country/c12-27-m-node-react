const express = require('express');
const router = express.Router();

router.post('/login', (req, res, next) => {
  res.json('Login in app');
});

module.exports = router;
