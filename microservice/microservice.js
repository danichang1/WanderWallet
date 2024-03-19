const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4001;

const conversionRates = {
  'EUR': 1.09,
  'GBP': 1.28,
  'JPY': 0.0068,
  'KRW': 0.00076,
  'MXN': 0.06,
  'INR': 0.012,
  'CAD': 0.74,
  'AUD': 0.66,
  'ZAR': 0.054
  // Add more conversion rates as needed
};

// Middleware
app.use(bodyParser.json());

// Route to handle currency conversion
app.post('/convert', (req, res) => {
  const { currencyCode } = req.body;
  
  // Check if currency code exists in conversion rates
  if (!conversionRates[currencyCode]) {
    return res.status(404).json({ error: 'Currency code not found' });
  }
  
  const conversionRate = conversionRates[currencyCode];
  res.json({ conversionRate });
});

// Start server
app.listen(PORT, () => {
  console.log(`Currency conversion microservice running on port ${PORT}`);
});
