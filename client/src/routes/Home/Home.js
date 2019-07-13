import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import axios from 'axios';
import Pictures from '../../components/Pictures/Pictures';
import GetMoreButton from '../../components/GetMoreButton/GetMoreButton';
import useAsyncState from '../../Util/asyncState';

export default function Home(props) {
  const [source, setSource] = useState('pixabay');
  const [page, setPage] = useAsyncState(1);
  const [term, setTerm] = useState('');
  const [getMoreBtn, setGetMoreBtn] = useState(false);
  const [clickedElIndex, setClickedElIndex] = useState(null);

  function getImgURIs(page) {
    axios.get(`/api/images/${source}/${term}/${page}`).then((URIs) => {
      props.setImgURIs((prevURIs) => {
        let uris;
        
        if (page !== 1) {
          uris = new Set([...prevURIs, ...URIs.data]);
        } else {
          uris = new Set([...URIs.data]);
        }

        return uris;
      });
    }); 
  }
  
  return (
    <React.Fragment>
      <NavBar 
        setTerm={setTerm} 
        getImgURIs={getImgURIs} 
        setSource={setSource} 
        setGetMoreBtn={setGetMoreBtn} 
        setDrawerState={props.setDrawerState}
      />
      <Pictures 
        imgURIs={props.imgURIs}
        setClickedElIndex={setClickedElIndex} 
        setSelectedImgs={props.setSelectedImgs}
        clickedElIndex={clickedElIndex}
      />
      <GetMoreButton 
        getMoreBtn={getMoreBtn} 
        getImgURIs={getImgURIs} 
        setPage={setPage} 
        page={page} 
      />
    </React.Fragment>
  )
}