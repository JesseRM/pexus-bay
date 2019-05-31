const express = require('express');
const app = express();

app.use('/api/images', require('./routes/api/images'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening for requests.');
});