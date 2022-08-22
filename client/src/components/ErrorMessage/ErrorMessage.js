import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '8rem'
  },
  card: {
    width: '50%',
    margin: '0 auto',
    backgroundColor: '#f8d7da',
    padding: theme.spacing(3, 0),
    [theme.breakpoints.down('md')]: {
      width: '94%',
    }
  },
  typography: {
    fontSize: '2rem',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1rem'
    }
  }
}))

function ErrorMessage(props) {
  const classes = useStyles();
  const DEFAULT_MESSAGE = "Sorry, looks like something went wrong. Please try again.";

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Typography className={classes.typography} align='center'>
          {props.message ? props.message : DEFAULT_MESSAGE}
        </Typography>
      </Card>
    </div>
  )
}

export default ErrorMessage;
