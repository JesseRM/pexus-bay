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
  
  return (
    <React.Fragment>
      <NavBar 
        setTerm={props.setTerm} 
        getImgURIs={getImgURIs} 
        setSource={props.setSource} 
        setGetMoreBtn={setGetMoreBtn} 
        setTopMenuOpen={props.setTopMenuOpen}
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