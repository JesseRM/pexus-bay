import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PixabayIcon from '../Icons/PixabayIcon/PixabayIcon';
import PexelsIcon from '../Icons/PexelsIcon/PexelsIcon';
import UnsplashIcon from '../Icons/UnsplashIcon/UnsplashIcon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  menuItem: {
    backgroundColor: 'rgba(101, 164, 157, 0.4)'
  }
}));

export default function SourceMenu(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  function handleClose() {
    setAnchorEl(null);
  }
  
  function handleSourceBtnClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleItemClick(event) {
    props.setSource(event.currentTarget.textContent.toLowerCase());
    setAnchorEl(null);
    props.setGetMoreBtn(false);

    if (selectedMenuItem) {
      selectedMenuItem.classList.remove(classes.menuItem);
      event.currentTarget.classList.add(classes.menuItem);
    } else {
      event.currentTarget.classList.add(classes.menuItem);
    }

    setSelectedMenuItem(event.currentTarget);
  }

  return (
    <React.Fragment>
      <Button onClick={handleSourceBtnClick}>
        Source
      </Button>
      
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleItemClick}>
          <PixabayIcon />
          Pixabay
        </MenuItem>
        <MenuItem onClick={handleItemClick}>
          <PexelsIcon />
          Pexels
        </MenuItem>
        <MenuItem onClick={handleItemClick}>
          <UnsplashIcon />
          Unsplash
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
