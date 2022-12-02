import axios from 'axios';

async function getImgURIs({ term, page, source }) {
  const url = `${process.env.REACT_APP_BACKEND_URL}/api/images/${source}/${term}/${page}`;
  const imageURIs = await axios.get(url).then(URIs => URIs.data);
  
  return imageURIs;
}

export default getImgURIs;