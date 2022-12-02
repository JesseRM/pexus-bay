const axios = require('axios');

async function getImageStreams(imageURIs) {
  const promises = [];

  for (let imageURI of imageURIs) {
    const promise = new Promise((resolve, reject) => {
      axios.get(imageURI.high, {responseType: 'stream'})
        .then((imageStream) => {
          resolve(imageStream);
        })
        .catch((error) => {
          reject(error);
        });
    });

    promises.push(promise);
  }

  const imageStreams = await Promise.all(promises);
  
  return imageStreams;
}

module.exports = getImageStreams;