const cheerio = require('cheerio');
const getHTML = require('../util/html');
const axios = require('axios');

const getPixabay = (req, res) => {
  const url = `https://pixabay.com/images/search/${req.params.term}/?pagi=${req.params.page}`;
  const imgSources = {
    thumb: [],
    low: [],
    medium: []
  }
  
  getHTML(url).then((html) => {
    const $ = cheerio.load(html);

    $('.item img[data-lazy]').each((i, elem) => {
      //Set URLs for different sized images
      const thumb = elem['attribs']['data-lazy'];
      const low = thumb.replace(/_340/, '_480');
      const medium = thumb.replace(/__340/, '_1280');
      
      imgSources.thumb.push(thumb);
      imgSources.low.push(low);
      imgSources.medium.push(medium);
    });

    res.send(imgSources);
  });
}

const getPexels = (req, res) => {
  const url = `https://www.pexels.com/search/${req.params.term}/?page=${req.params.page}`;
  const imgSources = {
    thumb: [],
    low: [],
    medium: [],
    high: []
  }

  getHTML(url).then((html) => {
    const $ = cheerio.load(html);

    $('.photo-item__img').each((i, elem) => {
      const thumb = elem['attribs']['src'];
      const low = thumb.replace('dpr=1', 'dpr=3');
      const medium = thumb.replace('dpr=1&w=500', 'dpr=2&h=750&w=1260');
      const high = thumb.split('?')[0];
      
      imgSources.thumb.push(thumb);
      imgSources.low.push(low);
      imgSources.medium.push(medium);
      imgSources.high.push(high);
    });

    res.send(imgSources);
  });
}

const getUnsplash = ((req, res) => {
  const url = `https://unsplash.com/napi/search/photos?query=${req.params.term}&xp=&per_page=30&page=${req.params.page}`;
  const imgSources = {
    low: [],
    medium: [],
    high: []
  }

  axios.get(url).then((imagesJSON) => {
    const images = imagesJSON['data']['results'];

    for (let image in images) {
      imgSources.low.push(images[image]['urls']['small']);
      imgSources.medium.push(images[image]['urls']['regular']);
      imgSources.high.push(images[image]['urls']['full']);
    }
    
    res.send(imgSources);
  });
});


module.exports = {
  getPixabay: getPixabay,
  getPexels: getPexels,
  getUnsplash: getUnsplash
}