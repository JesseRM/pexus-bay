import React, { createContext, useState } from "react";
import useAsyncState from "../util/asyncState";

const PexusBayContext = createContext();

export const PexusBayProvider = ({children}) => {
  const [topMenuOpen, setTopMenuOpen] = useState(false);
  const [imgURIs, setImgURIs] = useState(new Set());
  const [selectedImgs, setSelectedImgs] = useState(new Set());
  const [page, setPage] = useAsyncState(1);
  const [source, setSource] = useState('pixabay');
  const [term, setTerm] = useState('');
  const [navBarType, setNavBarType] = useState(null);
  const [displayProgress, setDisplayProgress] = useState(false);
  const [displayGetMoreBtn, setDisplayGetMoreBtn] = useState(false);
  
  const value = {
    topMenuOpen,
    setTopMenuOpen,
    imgURIs, 
    setImgURIs,
    selectedImgs,
    setSelectedImgs,
    page,
    setPage,
    source,
    setSource,
    term,
    setTerm,
    navBarType,
    setNavBarType,
    displayProgress,
    setDisplayProgress,
    displayGetMoreBtn,
    setDisplayGetMoreBtn 
  };
  
  return (
    <PexusBayContext.Provider value={value}>
      {children}
    </PexusBayContext.Provider>
  )
}

export default PexusBayContext;