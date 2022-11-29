const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();

const corsOptions = {
  origin: ["https://pexusbay.onrender.com", "http://localhost:3000"],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/images', require('./routes/api/images'));

app.listen(process.env.PORT || 4000, () => {
  console.log('Listening for requests.');
});