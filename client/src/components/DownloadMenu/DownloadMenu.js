import React, { useContext } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import getImageBlob from '../../util/getImageBlob';
import filenameFromURI from '../../util/filenameFromURI';
import createAnchorElFromBlob from '../../util/createAnchorElFromBlob';
import startFileDownload from '../../util/startFileDownload';
import PexusBayContext from '../../context/PexusBayContext';

function DownloadMenu(props) {
  const {setDisplayProgress} = useContext(PexusBayContext);
  
  function handleItemClick(event) {
    const imageQuality = event.currentTarget.textContent.toLowerCase();

    setDisplayProgress(true);

    downloadImage(props.clickedImg[imageQuality]);

    handleMenuClose();
  }

  function handleMenuClose() {
    props.setDownloadMenuOpen(false);
    props.setPictureMenuOpen(false);
  }

  function downloadImage(imageURI) {
    let anchorImageEl;
    const filename = filenameFromURI(imageURI);

    getImageBlob(imageURI)
      .then((imageBlob) => {
        anchorImageEl = createAnchorElFromBlob(imageBlob, {filename: filename, extension: '.jpg'});

        startFileDownload(anchorImageEl);

        setDisplayProgress(false);
      })
      .catch((error) => {
        console.log(error);
        setDisplayProgress(false);
        alert("Sorry, looks like something went wrong. Please try again.");
      })
  }
  
  return (
    <Menu 
      anchorEl={props.anchorEl}  
      open={props.downloadMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleItemClick}>Low</MenuItem>
      <MenuItem onClick={handleItemClick}>Medium</MenuItem>
      <MenuItem onClick={handleItemClick}>High</MenuItem>
    </Menu>
  )
}

export default DownloadMenu;