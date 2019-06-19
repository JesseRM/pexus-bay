import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import axios from 'axios';
import Pictures from '../../components/Pictures/Pictures';

export default function Home() {
  const [imgURIs, setImgURIs] = useState(null);
  const [source, setSource] = useState('pexels');
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState('');

  function getImgURIs() {
    axios.get(`/api/images/${source}/${term}/${page}`).then((URIs) => {
      setImgURIs(URIs.data);
    })
  }
  
  return (
    <React.Fragment>
      <NavBar setTerm={setTerm} getImgURIs={getImgURIs} />
      <Pictures imgURIs={imgURIs} />
    </React.Fragment>
  )
}