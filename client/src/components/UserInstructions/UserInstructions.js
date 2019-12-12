import React from 'react';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import Typography from '@material-ui/core/Typography';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '4.5rem auto',
    width: '50rem',
    [theme.breakpoints.down('md')]: {
      width: '96%'
    }
  },
  header: {
    fontSize: '1.6rem',
    marginBottom: '1.6rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.8rem'
    }
  },
  selected: {
    padding: theme.spacing(3, 0),
    backgroundColor: '#f8d7da'
  }
}));
 
function UserInstructions(props) {
  const classes = useStyles();
  
  return (
    <Paper elevation={3} className={classes.root} style={{backgroundColor: props.type === 'selected' ? '#f8d7da' : '#f2dab1'}}>
      {props.type === 'home' &&
        <React.Fragment>
          <Typography className={classes.header} align='center'>
            Welcome to <strong>Pexus Bay</strong>.
          </Typography>
          <Typography align='center'>
            A simple hub for searching and downloading free stock images <span><PhotoLibraryIcon /></span>from popular sites.
          </Typography>
          <Typography align='center'>
            Pick a source and try searching <span><ImageSearchIcon /></span> for some images.
          </Typography>
        </React.Fragment>
      }
      {props.type === 'selected' &&
        <Typography className={classes.selected} variant="h4" align='center'>
          You have not selected any images yet.
        </Typography>
      }
    </Paper>
  )
}

export default UserInstructions;