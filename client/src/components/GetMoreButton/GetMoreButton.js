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
  
  if (!props.displayGetMoreBtn) {
    return null;
  }

  function handleClick() {
    if (props.imgURIs.size && props.term !== '') {
      props.setPage(props.page + 1).then((page) => {
        props.getImgURIs({term: props.term, page: page, source: props.source}, props.setImgURIs);
      });
    } 
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