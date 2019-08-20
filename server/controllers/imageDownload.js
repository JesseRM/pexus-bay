const axios = require('axios');

function getImageBuffer(req, res) {
  const URI = req.url.slice(10);

  axios.get(URI, {responseType: 'arraybuffer'})
    .then((imageBuffer) => {
      res.send(imageBuffer.data);
    })
    .catch((error) => {
      console.log(error);
    });
} 

module.exports = getImageBuffer;