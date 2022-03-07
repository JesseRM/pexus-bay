import React, { useContext } from 'react';
import PexusBayContext from '../../context/PexusBayContext';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import getImgURIs from '../../Util/getImgURIs';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

function GetMoreButton(props) {
  const classes = useStyles();
  const {
          displayGetMoreBtn, 
          imgURIs, setImgURIs, 
          term, 
          page, setPage,
          source
        } = useContext(PexusBayContext);
  
  if (!displayGetMoreBtn) {
    return null;
  }

  function handleClick() {
    if (imgURIs.size && term !== '') {
      setPage(page + 1).then((page) => {
        getImgURIs({term: term, page: page, source: source}, setImgURIs);
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