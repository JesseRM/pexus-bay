import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import getImageBlob from '../../Util/getImageBlob';
import createAnchorElFromBlob from '../../Util/createAnchorElFromBlob';

export default function DownloadMenu(props) {
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

    getImageBlob(imageURI).then((imageBlob) => {
      anchorImageEl = createAnchorElFromBlob(imageBlob, 'image.jpg');

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