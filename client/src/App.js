import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Selected from './routes/Selected/Selected';
import TopMenu from './components/TopMenu/TopMenu';
import NavBar from './components/NavBar/NavBar';
import useAsyncState from './Util/asyncState';
import PicturePreview from './components/PicturePreview/PicturePreview';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#056ac8' }, 
    secondary: { main: '#C86305' }, 
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
  const [imgPreviewURI, setImgPreviewURI] = useState(null);

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
          setTerm={setTerm}  
          navBarType={navBarType}
          displayProgress={displayProgress}
          setSource={setSource} 
          setTopMenuOpen={setTopMenuOpen}
          setImgURIs={setImgURIs} 
          setDisplayGetMoreBtn={setDisplayGetMoreBtn}
        />
        <PicturePreview
          imgPreviewURI={imgPreviewURI}
          setImgPreviewURI={setImgPreviewURI}
        />
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
            term={term}
            navBarType={navBarType}
            setNavBarType={setNavBarType}
            setDisplayProgress={setDisplayProgress}
            displayGetMoreBtn={displayGetMoreBtn}
            setImgPreviewURI={setImgPreviewURI}
            />
          } 
        />
        <Route 
          path='/selected' 
          render={() => <Selected 
            selectedImgs={selectedImgs} 
            setSelectedImgs={setSelectedImgs} 
            setNavBarType={setNavBarType}
            setDisplayProgress={setDisplayProgress}
            setImgPreviewURI={setImgPreviewURI}
            />
          } 
        />  
      </BrowserRouter>  
    </ThemeProvider>
  )
}

export default App;
