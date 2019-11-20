import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(() => ({
  root: {
    display: 'absolute',
    top: '3.8rem'
  }
}));

function Progress(props) {
  const classes = useStyles();

  if (!props.displayProgress) {
    return null;
  }

  return (
    <LinearProgress classes={{root: classes.root}} color="secondary" />
  );
}

export default Progress;