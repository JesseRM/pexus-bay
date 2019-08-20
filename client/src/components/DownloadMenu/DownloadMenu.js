import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import getImageBlob from '../../Util/getImageBlob';
import filenameFromURI from '../../Util/filenameFromURI';
import createAnchorElFromBlob from '../../Util/createAnchorElFromBlob';

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
      anchorImageEl = createAnchorElFromBlob(imageBlob, filename);

      document.body.appendChild(anchorImageEl);
      anchorImageEl.click();

      URL.revokeObjectURL(anchorImageEl.href);
      document.body.removeChild(anchorImageEl);
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