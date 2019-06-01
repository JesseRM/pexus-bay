const axios = require('axios');

async function getHTML(url) {
  let html = await axios.get(url);

  return html.data;
}

module.exports = getHTML;