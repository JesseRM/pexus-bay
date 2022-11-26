const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

const corsOptions = {
  origin: ["https://pexusbay.onrender.com"],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/images', require('./routes/api/images'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening for requests.');
});