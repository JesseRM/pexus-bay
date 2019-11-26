import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '4.8rem',
    marginBottom: 0
  }
}));

function CreateZipButton(props) {
  const classes = useStyles();

  if (!props.displayZipBtn) {

    return null;
  }

  function handleClick() {
    props.setDisplayProgress(true);
    
    fetch('/api/images/download/zip', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([...props.selectedImgs])
    }).then((response) => {
      response.blob().then((blob) => {
        const anchorEl = document.createElement('a');

        anchorEl.href = URL.createObjectURL(blob);
        anchorEl.download = 'images.zip';
        document.body.appendChild(anchorEl);
        anchorEl.click();

        URL.revokeObjectURL(anchorEl.href);
        document.body.removeChild(anchorEl);

        props.setDisplayProgress(false);
      });
    });
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