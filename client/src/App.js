import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Selected from './routes/Selected/Selected';
import TopMenu from './components/TopMenu/TopMenu';

function App() {
  const [drawerState, setDrawerState] = useState(false);
  const [imgURIs, setImgURIs] = useState(new Set());
  const [selectedImgs, setSelectedImgs] = useState(null);

  return (
    <BrowserRouter>
      <Route 
        exact path='/' 
        render={() => <Home imgURIs={imgURIs} setImgURIs={setImgURIs} setDrawerState={setDrawerState} setSelectedImgs={setSelectedImgs} />} 
      />
      <Route 
        path='/selected' 
        render={() => <Selected imgURIs={imgURIs} setDrawerState={setDrawerState} />} 
      />
      <TopMenu drawerState={drawerState} setDrawerState={setDrawerState} />
    </BrowserRouter>  
  )
}

export default App;
