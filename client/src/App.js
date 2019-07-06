import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Selected from './routes/Selected/Selected';
import TopMenu from './components/TopMenu/TopMenu';

function App() {
  const [drawerState, setDrawerState] = useState(false);
  
  return (
    <BrowserRouter>
      <Route 
        exact path='/' 
        render={() => <Home setDrawerState={setDrawerState} />} 
      />
      <Route 
        path='/selected' 
        render={() => <Selected setDrawerState={setDrawerState} />} 
      />
      <TopMenu drawerState={drawerState} setDrawerState={setDrawerState} />
    </BrowserRouter>  
  )
}

export default App;
