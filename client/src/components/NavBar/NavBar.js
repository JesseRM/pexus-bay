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
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
},
}));


function NavBar() {
  const classes = userStyles();
  
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>Pexus Bay</Typography>
        <SearchBar />
        <SourceMenu />
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;