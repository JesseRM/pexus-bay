import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import axios from 'axios';
import Pictures from '../../components/Pictures/Pictures';
import GetMoreButton from '../../components/GetMoreButton/GetMoreButton';
import useAsyncState from '../../Util/asyncState';

export default function Home() {
  const [imgURIs, setImgURIs] = useState(null);
  const [source, setSource] = useState('unsplash');
  const [page, setPage] = useAsyncState(1);
  const [term, setTerm] = useState('');

  function getImgURIs(page) {
    axios.get(`/api/images/${source}/${term}/${page}`).then((URIs) => {
      setImgURIs((prevURIs) => {
        if (page !== 1) {
          const updatedURIs = {
            thumb: [...prevURIs.thumb, ...URIs.data.thumb],
            low: [...prevURIs.low, ...URIs.data.low],
            medium: [...prevURIs.medium, ...URIs.data.medium],
            high: [...prevURIs.high, ...URIs.data.high]
          }

          return updatedURIs;
        }
       
        return URIs.data;
      });
    })
  }
  
  return (
    <React.Fragment>
      <NavBar setTerm={setTerm} getImgURIs={getImgURIs} />
      <Pictures imgURIs={imgURIs} />
      <GetMoreButton imgURIs={imgURIs} getImgURIs={getImgURIs} setPage={setPage} page={page} />
    </React.Fragment>
  )
}