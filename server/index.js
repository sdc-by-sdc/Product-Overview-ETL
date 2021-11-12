require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const URL_BASE = process.env.URL_BASE;

// NEW AND IMPROVED ETL PROCESS
const formatCSV = require('../database/pipeline.js');
// formatCSV();

// proof the server is running
app.listen(PORT, () => {
  console.log(`Product Overview Service is listening at ${URL_BASE} on port ${PORT}`);
});