import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Selected from './routes/Selected/Selected';
import TopMenu from './components/TopMenu/TopMenu';
import useAsyncState from './Util/asyncState';

function App() {
  const [drawerState, setDrawerState] = useState(false);
  const [imgURIs, setImgURIs] = useState(new Set());
  const [selectedImgs, setSelectedImgs] = useState(new Set());
  const [page, setPage] = useAsyncState(1);
  const [source, setSource] = useState('pixabay');
  const [term, setTerm] = useState('');

  return (
    <BrowserRouter>
      <Route 
        exact path='/' 
        render={() => <Home 
          imgURIs={imgURIs} 
          setImgURIs={setImgURIs} 
          setDrawerState={setDrawerState} 
          setSelectedImgs={setSelectedImgs}
          setPage={setPage}
          page={page} 
          source={source}
          setSource={setSource}
          term={term}
          setTerm={setTerm}
        />} 
      />
      <Route 
        path='/selected' 
        render={() => <Selected imgURIs={selectedImgs} setDrawerState={setDrawerState} />} 
      />
      <TopMenu drawerState={drawerState} setDrawerState={setDrawerState} />
    </BrowserRouter>  
  )
}

export default App;
