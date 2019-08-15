import React from 'react';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import Typography from '@material-ui/core/Typography';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '64px'
  },
  text: {
    fontSize: '1.6rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.8rem'
    }
  }
}));

function UserInstructions() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Typography className={classes.text} align='center'>
        Welcome to <strong>Pexus Bay</strong>.
      </Typography>
      <Typography align='center'>
        A simple hub for searching and downloading free stock images <span><PhotoLibraryIcon /></span>from popular sites.
      </Typography>
      <Typography align='center'>
          Pick a source and try searching <span><ImageSearchIcon /></span> for some images.
      </Typography>
    </div>
  )
}

export default UserInstructions;