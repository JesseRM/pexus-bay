import React, { useContext } from 'react';
import PexusBayContext from '../../context/PexusBayContext';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import SourceMenu from '../SourceMenu/SourceMenu';
import SearchBar from '../SearchBar/SearchBar';
import Progress from '../Progress/Progress';

const userStyles = makeStyles((theme) => ({
  titleHome: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  title: {
    display: 'block'
  },
  root: {
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1000
  }
}));

function NavBar() {
  const classes = userStyles();
  const {setTopMenuOpen, navBarType} = useContext(PexusBayContext);
  
  return (
    <div className={classes.root}>
      <AppBar position='relative'>
        <Toolbar>
          <IconButton onClick={() => setTopMenuOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography 
            className={navBarType === 'home' ? classes.titleHome : classes.title} 
            variant="h6" 
            noWrap
          >
            Pexus Bay
          </Typography>
          {navBarType === 'home' &&
            <SearchBar />
          }
          {navBarType === 'home' &&
            <SourceMenu />
          }
        </Toolbar>
      </AppBar>
      <Progress />
    </div>
  )
}

export default NavBar;