import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import axios from 'axios';
import Pictures from '../../components/Pictures/Pictures';
import GetMoreButton from '../../components/GetMoreButton/GetMoreButton';


export default function Home(props) {
  const [getMoreBtn, setGetMoreBtn] = useState(props.imgURIs.size ? true : false);

  useEffect(() => {
    props.setNavBarType('home');
  });

  function getImgURIs(page) {
    axios.get(`/api/images/${props.source}/${props.term}/${page}`).then((URIs) => {
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
        setTerm={props.setTerm} 
        getImgURIs={getImgURIs} 
        setSource={props.setSource} 
        setGetMoreBtn={setGetMoreBtn} 
        setDrawerState={props.setDrawerState}
        navBarType={props.navBarType}
      />
      <Pictures 
        imgURIs={props.imgURIs}
        setSelectedImgs={props.setSelectedImgs}
      />
      <GetMoreButton 
        getMoreBtn={getMoreBtn} 
        getImgURIs={getImgURIs} 
        setPage={props.setPage} 
        page={props.page} 
      />
    </React.Fragment>
  )
}