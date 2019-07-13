const cheerio = require('cheerio');
const axios = require('axios');

const getPixabay = (req, res) => {
  const url = `https://pixabay.com/images/search/${req.params.term}/?pagi=${req.params.page}`;
  const imgSources = [];
  
  axios.get(url).then((html) => {
    const $ = cheerio.load(html.data);

    $('.item img[data-lazy]').each((i, elem) => {
      const imgSource = {
        thumb: elem['attribs']['data-lazy'],
        low: elem['attribs']['data-lazy'].replace(/_340/, '_480'),
        medium: elem['attribs']['data-lazy'].replace(/__340/, '_1280'),
        high: null
      }
      
      imgSources.push(imgSource);
    });

    res.send(imgSources);
  });
}

const getPexels = (req, res) => {
  const url = `https://www.pexels.com/search/${req.params.term}/?page=${req.params.page}`;
  const imgSources = [];

  axios.get(url).then((html) => {
    const $ = cheerio.load(html.data);

    $('.photo-item__img').each((i, elem) => {
      const imgSource = {
        thumb: elem['attribs']['src'],
        low: elem['attribs']['src'].replace('dpr=1', 'dpr=3'),
        medium: elem['attribs']['src'].replace('dpr=1&w=500', 'dpr=2&h=750&w=1260'),
        high: elem['attribs']['src'].split('?')[0]
      }
      
      imgSources.push(imgSource);
    });

    res.send(imgSources);
  });
}

const getUnsplash = ((req, res) => {
  const url = `https://unsplash.com/napi/search/photos?query=${req.params.term}&xp=&per_page=30&page=${req.params.page}`;
  const imgSources = [];

  axios.get(url).then((imagesJSON) => {
    const images = imagesJSON['data']['results'];

    for (let image in images) {
      const imgSource = {
        thumb: images[image]['urls']['small'],
        low: images[image]['urls']['small'],
        medium: images[image]['urls']['regular'],
        high: images[image]['urls']['full']
      }
      
      imgSources.push(imgSource);
    }
    
    res.send(imgSources);
  });
});


module.exports = {
  getPixabay: getPixabay,
  getPexels: getPexels,
  getUnsplash: getUnsplash
}