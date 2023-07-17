const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const handleRoutes = require('./src/routes');

handleRoutes(app);
app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
