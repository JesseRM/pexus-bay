import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function DownloadMenu(props) {
  
  function handleClose() {
    props.setDownloadMenuOpen(false);
  }

  return (
    <Menu 
    anchorEl={props.anchorEl}  
    open={props.downloadMenuOpen}
    onClose={handleClose}
    >
      <MenuItem>Low</MenuItem>
      <MenuItem>Medium</MenuItem>
      <MenuItem>High</MenuItem>
    </Menu>
  )
}