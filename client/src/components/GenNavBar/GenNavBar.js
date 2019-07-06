import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const userStyles = makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    flexGrow: 1
},
}));


function NavBar(props) {
  const classes = userStyles();
  
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={() => props.setDrawerState(true)}>
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>Selected</Typography>
        <Typography variant="h6" align='center' display='block' noWrap>Pexus Bay</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar;