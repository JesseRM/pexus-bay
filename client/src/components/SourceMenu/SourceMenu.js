import React, { useState, useContext } from 'react';
import PexusBayContext from '../../context/PexusBayContext';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PixabayIcon from '../Icons/PixabayIcon/PixabayIcon';
import PexelsIcon from '../Icons/PexelsIcon/PexelsIcon';
import UnsplashIcon from '../Icons/UnsplashIcon/UnsplashIcon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  menuItem: {
    backgroundColor: '#E2AA4D'
  }
}));

export default function SourceMenu() {
  const classes = useStyles();
  const {source, setSource, setDisplayGetMoreBtn} = useContext(PexusBayContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  function handleClose() {
    setAnchorEl(null);
  }
  
  function handleSourceBtnClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleItemClick(event) {
    setSource(event.currentTarget.textContent.toLowerCase());
    setAnchorEl(null);

    if (selectedMenuItem) {
      selectedMenuItem.classList.remove(classes.menuItem);
      event.currentTarget.classList.add(classes.menuItem);
    } else {
      event.currentTarget.classList.add(classes.menuItem);
    }

    setSelectedMenuItem(event.currentTarget);
    setDisplayGetMoreBtn(false);
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
        <MenuItem 
          onClick={handleItemClick} 
          className={source === 'pixabay' ? classes.menuItem : null}
        > 
          <PixabayIcon />
          Pixabay
        </MenuItem>
        <MenuItem 
          onClick={handleItemClick}
          className={source === 'pexels' ? classes.menuItem : null}
        >
          <PexelsIcon />
          Pexels
        </MenuItem>
        <MenuItem 
          onClick={handleItemClick}
          className={source === 'unsplash' ? classes.menuItem : null}
        >
          <UnsplashIcon />
          Unsplash
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}
