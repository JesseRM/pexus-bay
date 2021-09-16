import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Selected from './routes/Selected/Selected';
import TopMenu from './components/TopMenu/TopMenu';
import NavBar from './components/NavBar/NavBar';
import useAsyncState from './Util/asyncState';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#056ac8' }, 
    secondary: { main: '#C86305' }
  },
});

function App() {
  const [topMenuOpen, setTopMenuOpen] = useState(false);
  const [imgURIs, setImgURIs] = useState(new Set());
  const [selectedImgs, setSelectedImgs] = useState(new Set());
  const [page, setPage] = useAsyncState(1);
  const [source, setSource] = useState('pixabay');
  const [term, setTerm] = useState('');
  const [navBarType, setNavBarType] = useState(null);
  const [displayProgress, setDisplayProgress] = useState(false);
  const [displayGetMoreBtn, setDisplayGetMoreBtn] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopMenu 
          topMenuOpen={topMenuOpen} 
          setTopMenuOpen={setTopMenuOpen} 
        />
        <NavBar
          term={term}
          source={source}  
          navBarType={navBarType}
          displayProgress={displayProgress}
          setTerm={setTerm}
          setSource={setSource} 
          setTopMenuOpen={setTopMenuOpen}
          setImgURIs={setImgURIs} 
          setDisplayGetMoreBtn={setDisplayGetMoreBtn}
        />
        <Route 
          exact path='/' 
          render={() => <Home 
            imgURIs={imgURIs} 
            page={page} 
            source={source}
            term={term}
            displayGetMoreBtn={displayGetMoreBtn}
            navBarType={navBarType}
            setImgURIs={setImgURIs} 
            setPage={setPage}
            setTopMenuOpen={setTopMenuOpen} 
            setSelectedImgs={setSelectedImgs}
            setNavBarType={setNavBarType}
            setDisplayProgress={setDisplayProgress}
            />
          } 
        />
        <Route 
          path='/selected' 
          render={() => <Selected 
            imgURIs={imgURIs} 
            selectedImgs={selectedImgs} 
            setSelectedImgs={setSelectedImgs} 
            setNavBarType={setNavBarType}
            setDisplayProgress={setDisplayProgress}
            />
          } 
        />  
      </BrowserRouter>  
    </ThemeProvider>
  )
}

export default App;
