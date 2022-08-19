const axios = require('axios');

function getPixabayURIs(req, res) {
  const searchTerm = req.params.term;
  const page = req.params.page;
  const apiURI = `https://pixabay.com/api/?key=${process.env.PIXABAY_API}&q=${searchTerm}&page=${page}&per_page=30`;

  axios.get(apiURI)
    .then((response) => {
      const imgURIs = [];
      const hits = response.data.hits;

      hits.forEach((hit) => {
        const imgSource = {
          thumb: hit.webformatURL.replace('_640', '_340'),
          low: hit.webformatURL,
          medium: hit.largeImageURL,
          high: hit.imageURL
        }

        imgURIs.push(imgSource);
      });

      res.send(imgURIs);
    })
    .catch((error) => {
      console.log(error);
      res.status(504);
      res.send({error: "Unable to retrieve image URLs."});
    });
}

function getPexelsURIs(req, res) {
  const searchTerm = req.params.term;
  const page = req.params.page;
  const apiURI = `https://api.pexels.com/v1/search?query=${searchTerm}&page=${page}&per_page=30`;
  const config = {
    headers: {
      Authorization: process.env.PEXELS_API
    }
  };

  axios.get(apiURI, config)
    .then((response) => {
      const imgURIs = [];
      const hits = response.data.photos;

      hits.forEach((hit) => {
        const imgSource = {
          thumb: hit.src.tiny,
          low: hit.src.tiny,
          medium: hit.src.large,
          high: hit.src.original
        }

        imgURIs.push(imgSource);
      });

      res.send(imgURIs);
    })
    .catch((error) => {
      console.log(error);
      res.status(504);
      res.send({error: "Unable to retrieve image URLs."});
    })
}

function getUnsplashURIs(req, res) {
  const searchTerm = req.params.term;
  const page = req.params.page;
  const apiURI = `https://unsplash.com/napi/search/photos?query=${searchTerm}&xp=&per_page=30&page=${page}`;

  axios.get(apiURI)
    .then((response) => {
      const imgURIs = [];
      const hits = response.data.results;

      hits.forEach((hit) => {
        const imgSource = {
          thumb: hit.urls.small,
          low: hit.urls.small,
          medium: hit.urls.regular,
          high: hit.urls.full
        }

        imgURIs.push(imgSource);
      });
      
      res.send(imgURIs);
    })
    .catch((error) => {
      console.log(error);
      res.status(504);
      res.send({error: "Unable to retrieve image URLs."});
    });
}

module.exports = {
  getPixabayURIs,
  getPexelsURIs,
  getUnsplashURIs
}