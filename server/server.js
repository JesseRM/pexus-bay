const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();

app.use(express.json());
app.use('/api/images', require('./routes/api/images'));
app.use('/static', express.static(path.resolve(__dirname, '../client', 'build', 'static')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening for requests.');
});