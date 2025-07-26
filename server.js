const express = require('express');
const path = require('path');
const app = express();
const detailsApi = require('./api/details');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API route
app.use('/api/details', detailsApi);

// Fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
