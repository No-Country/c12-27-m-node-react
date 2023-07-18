const express = require('express');
const cors = require('cors');
const handleRoutes = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 4000;

const dbConnect = require('./src/config/database');

dbConnect();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes Handler
handleRoutes(app);

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
