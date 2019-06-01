const cheerio = require('cheerio');
const getHTML = require('../util/html');

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




module.exports = getPixabay;