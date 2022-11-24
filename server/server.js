const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());
app.use('/api/images', require('./routes/api/images'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening for requests.');
});