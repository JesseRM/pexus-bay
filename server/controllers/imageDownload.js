const axios = require('axios');

function getImageBuffer(req, res) {
  const URI = req.params[0];
  
  axios.get(URI, {responseType: 'arraybuffer'}).then((imageBuffer) => {
    res.send(imageBuffer.data);
  });
} 

module.exports = getImageBuffer;