import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import getImageBlob from '../../Util/getImageBlob';
import filenameFromURI from '../../Util/filenameFromURI';
import createAnchorElFromBlob from '../../Util/createAnchorElFromBlob';
import startFileDownload from '../../Util/startFileDownload';

function DownloadMenu(props) {
  function handleItemClick(event) {
    const imageQuality = event.currentTarget.textContent.toLowerCase();

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

    getImageBlob(imageURI).then((imageBlob) => {
      anchorImageEl = createAnchorElFromBlob(imageBlob, {filename: filename, extension: '.jpg'});

      startFileDownload(anchorImageEl);
    });
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