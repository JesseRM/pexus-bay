import React from 'react';
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

function NavBar(props) {
  const classes = userStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position='relative'>
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
              term={props.term}
              source={props.source} 
              setTerm={props.setTerm} 
              getImgURIs={props.getImgURIs} 
              setGetMoreBtn={props.setGetMoreBtn}
              setImgURIs={props.setImgURIs} 
              setDisplayGetMoreBtn={props.setDisplayGetMoreBtn}
            />
          }
          {props.navBarType === 'home' &&
            <SourceMenu 
              source={props.source}
              setSource={props.setSource} 
              setGetMoreBtn={props.setGetMoreBtn}
              setDisplayGetMoreBtn={props.setDisplayGetMoreBtn} 
            />
          }
        </Toolbar>
      </AppBar>
      <Progress displayProgress={props.displayProgress} />
    </div>
  )
}

export default NavBar;