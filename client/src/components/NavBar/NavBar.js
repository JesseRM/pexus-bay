import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import SourceMenu from '../SourceMenu/SourceMenu';
import SearchBar from '../SearchBar/SearchBar';

const userStyles = makeStyles((theme) => ({
  titleHome: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  title: {
    display: 'block'
  }
}));


function NavBar(props) {
  const classes = userStyles();
  
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton onClick={() => props.setTopMenuOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Typography 
          className={props.navBarType === 'home' ? classes.titleHome : classes.title} 
          variant="h6" 
          noWrap
        >
          Pexus Bay
        </Typography>
        {props.navBarType === 'home' &&
          <SearchBar 
            setTerm={props.setTerm} 
            getImgURIs={props.getImgURIs} 
            setGetMoreBtn={props.setGetMoreBtn} 
          />
        }
        {props.navBarType === 'home' &&
          <SourceMenu 
            source={props.source}
            setSource={props.setSource} 
            setGetMoreBtn={props.setGetMoreBtn} 
          />
        }
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;