import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Selected from './routes/Selected/Selected';
import TopMenu from './components/TopMenu/TopMenu';
import useAsyncState from './Util/asyncState';

function App() {
  const [topMenuOpen, setTopMenuOpen] = useState(false);
  const [imgURIs, setImgURIs] = useState(new Set());
  const [selectedImgs, setSelectedImgs] = useState(new Set());
  const [page, setPage] = useAsyncState(1);
  const [source, setSource] = useState('pixabay');
  const [term, setTerm] = useState('');
  const [navBarType, setNavBarType] = useState(null);

  return (
    <BrowserRouter>
      <Route 
        exact path='/' 
        render={() => <Home 
          imgURIs={imgURIs} 
          setImgURIs={setImgURIs} 
          setTopMenuOpen={setTopMenuOpen} 
          setSelectedImgs={setSelectedImgs}
          setPage={setPage}
          page={page} 
          source={source}
          setSource={setSource}
          term={term}
          setTerm={setTerm}
          navBarType={navBarType}
          setNavBarType={setNavBarType}
          />
        } 
      />
      <Route 
        path='/selected' 
        render={() => <Selected 
          imgURIs={selectedImgs} 
          setTopMenuOpen={setTopMenuOpen} 
          navBarType={navBarType}
          setNavBarType={setNavBarType}
          />
        } 
      />
      <TopMenu 
        topMenuOpen={topMenuOpen} 
        setTopMenuOpen={setTopMenuOpen} 
      />
    </BrowserRouter>  
  )
}

export default App;
