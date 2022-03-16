import { makeStyles } from '@material-ui/core';
import React from 'react';
import home_screen from '../../assets/images/home_screen.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background_image: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${home_screen})`,
    backgroundSize: 'contain',
    opacity: '0.4'
  },
  welcome: {
    position: 'absolute',
    margin: '0 auto',
    zIndex: 20,
    width: '50%',
    top: '10rem',
    boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
    backgroundColor: '#fffdfa',
    textAlign: 'center',
    borderRadius: 5,
    [theme.breakpoints.down('md')]: {
      width: '94%'
    }
  },
  h1: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem'
    }
  },
  h3: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem'
    } 
  }
}));

function WelcomeScreen() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.background_image}></div>
      <div className={classes.welcome}>
        <h1 className={classes.h1}>Welcome to Pexus Bay</h1>
        <h3 className={classes.h3}>A place to browse and download stock images from popular sites</h3>
      </div>
    </div>
  )
}

export default WelcomeScreen;