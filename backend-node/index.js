const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const handleRoutes = require('./src/routes');
const dbConnect = require('./src/config/database');

dbConnect();

// Middlewares
app.use(express.json());

handleRoutes(app);
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
