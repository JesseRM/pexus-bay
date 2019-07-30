import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import getImageBlob from '../../Util/getImageBlob';
import createAnchorElFromBlob from '../../Util/createAnchorElFromBlob';

export default function DownloadMenu(props) {
  
  function handleClose() {
    props.setDownloadMenuOpen(false);
  }

  function downloadImage(imageURI) {
    let anchorImageEl;

    getImageBlob(imageURI).then((imageBlob) => {
      anchorImageEl = createAnchorElFromBlob(imageBlob, 'image.jpg');

      document.body.appendChild(anchorImageEl);
      anchorImageEl.click();
      document.body.removeChild(anchorImageEl);
    });
  }
  
  return (
    <Menu 
    anchorEl={props.anchorEl}  
    open={props.downloadMenuOpen}
    onClose={handleClose}
    >
      <MenuItem onClick={() => downloadImage(props.clickedImg.low)}>Low</MenuItem>
      <MenuItem onClick={() => downloadImage(props.clickedImg.medium)}>Medium</MenuItem>
      <MenuItem onClick={() => downloadImage(props.clickedImg.high)}>High</MenuItem>
    </Menu>
  )
}