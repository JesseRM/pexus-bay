import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonBase from '@material-ui/core/ButtonBase';
import PixabayIcon from '../Icons/PixabayIcon/PixabayIcon';
import PexelsIcon from '../Icons/PexelsIcon/PexelsIcon';
import UnsplashIcon from '../Icons/UnsplashIcon/UnsplashIcon';

export default function SourceMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <React.Fragment>
      
        <Button onClick={handleClick}>
          Source
        </Button>
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <PixabayIcon />
          Pixabay
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <PexelsIcon />
          Pexels
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <UnsplashIcon />
          Unsplash</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
