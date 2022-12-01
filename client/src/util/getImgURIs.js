import axios from 'axios';

function getImgURIs({term, page, source}, setImgURIs) {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/images/${source}/${term}/${page}`).then((URIs) => {
    setImgURIs((prevURIs) => {
      let newURIs;
      
      if (page !== 1) {
        newURIs = new Set([...prevURIs, ...URIs.data]);
      } else {
        newURIs = new Set([...URIs.data]);
      }
      
      return newURIs;
    });
  }); 
}

export default getImgURIs;