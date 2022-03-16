import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import Selected from './routes/Selected/Selected';
import TopMenu from './components/TopMenu/TopMenu';
import NavBar from './components/NavBar/NavBar';
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { PexusBayProvider } from './context/PexusBayContext';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#006ba1' }, 
    secondary: { main: '#C86305' },
    background: {
      default: '#ececec'
    }
  },
  typography: {
    fontFamily: ['"Spartan"', 'sans-serif'].join(',')
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PexusBayProvider>
        <BrowserRouter>
          <TopMenu />
          <NavBar />
          <Route 
            exact path='/' 
            render={() => <Home />} 
          />
          <Route 
            path='/selected' 
            render={() => <Selected />} 
          />  
        </BrowserRouter>
      </PexusBayProvider>  
    </ThemeProvider>
  )
}

export default App;
