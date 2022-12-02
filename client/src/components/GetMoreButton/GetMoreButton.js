import React, { useContext } from 'react';
import PexusBayContext from '../../context/PexusBayContext';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import getImgURIs from '../../util/getImgURIs';

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
    source,
    setDisplayProgress
  } = useContext(PexusBayContext);
  
  if (!displayGetMoreBtn) {
    return null;
  }

  function handleClick() {
    if (imgURIs.size && term !== '') {
      setDisplayProgress(true);

      setPage(page + 1)
        .then((page) => {
          try {
            getImgURIs({term: term, page: page, source: source})
              .then((URIs) => {
                setImgURIs((prevURIs) => {
                  let newURIs;
                  
                  if (page !== 1) {
                    newURIs = new Set([...prevURIs, ...URIs]);
                  } else {
                    newURIs = new Set([...URIs]);
                  }
                  
                  return newURIs;
                });
                
                setDisplayProgress(false);
              });
          } catch (error) {
            console.log(error);
            alert("Sorry, looks like something went wrong. Please try again.");
          }
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