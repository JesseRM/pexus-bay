const axios = require('axios');
const archiver = require('archiver');
const getImageStreams = require('../util/getImageStreams');

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

function createZip(req, res) {
  const imageURIs = req.body;
  
  getImageStreams(imageURIs).then((imageStreams) => {
    const archive = archiver('zip', {
      zlib: { level: 9 } // Sets the compression level.
    });
    
    for (let i = 0; i < imageStreams.length; i++) {
      archive.append(imageStreams[i].data, { name: `file${i}.jpg` });
    }
    
    res.attachment('images.zip');

    archive.finalize();

    archive.pipe(res);
  });
}

module.exports = {
  getImageBuffer: getImageBuffer,
  createZip: createZip
}