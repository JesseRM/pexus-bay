import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '4.5rem auto',
    width: '50rem',
    [theme.breakpoints.down('md')]: {
      width: '94%'
    }
  },
  selected: {
    padding: theme.spacing(3, 0),
    backgroundColor: '#f8d7da',
    fontSize: '2rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1rem'
    }
  }
}));
 
function UserInstructions(props) {
  const classes = useStyles();
  
  return (
    <Paper elevation={3} className={classes.root}>
      <Typography className={classes.selected} align='center'>
        You have not selected any images yet.
      </Typography>
    </Paper>
  )
}

export default UserInstructions;