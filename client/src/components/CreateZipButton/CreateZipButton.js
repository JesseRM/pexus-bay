import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PexusBayContext from '../../context/PexusBayContext';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4.8rem',
    marginBottom: 0
  }
}));

function CreateZipButton(props) {
  const {setDisplayProgress, selectedImgs} = useContext(PexusBayContext);
  const classes = useStyles();

  if (!props.displayZipBtn) {

    return null;
  }

  function handleClick() {
    setDisplayProgress(true);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([...selectedImgs])
    }
    
    fetch(`${process.env.BACKEND_URl}/api/images/download/zip`, options)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.blob();
        } else {
          throw new Error("Error retrieving zip file.");
        }
      })
      .then((blob) => {
        const anchorEl = document.createElement('a');

        anchorEl.href = URL.createObjectURL(blob);
        anchorEl.download = 'images.zip';
        document.body.appendChild(anchorEl);
        anchorEl.click();

        URL.revokeObjectURL(anchorEl.href);
        document.body.removeChild(anchorEl);

        setDisplayProgress(false);
      })
      .catch((error) => {
        console.log(error);
        setDisplayProgress(false);
        alert("Sorry, looks like something went wrong. Please try again.");
      })
  }

  return (
    <div className={classes.root}>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleClick}
      >
        Download Zip
      </Button>
    </div>
  )
}

export default CreateZipButton;