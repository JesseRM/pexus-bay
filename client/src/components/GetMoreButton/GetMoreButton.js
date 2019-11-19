import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

function GetMoreButton(props) {
  const classes = useStyles();
  
  if (!props.getMoreBtn) {
    return null;
  }

  function handleClick() {
    props.setPage(props.page + 1).then((page) => props.getImgURIs(page));
  }

  return (
    <div className={classes.root}>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleClick}
      >
        Get More
      </Button>
    </div>
  )
}

export default GetMoreButton;