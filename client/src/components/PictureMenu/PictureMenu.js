import React, { useState, useEffect } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DownloadIcon from '@material-ui/icons/Archive';
import DownloadMenu from '../DownloadMenu/DownloadMenu.js';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: '10px'
  }
}));


export default function PictureMenu(props) {
  const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);
  const classes = useStyles();

  function handleClose() {
    props.setAnchorEl(null);
    props.setPictureMenuOpen(false);
  }

  function handleSelectClick() {
    props.setSelectedImgs((selectedImgs) => {
      selectedImgs.add(props.clickedImg);

      return selectedImgs;
    });

    handleClose();
  }

  function handleDownloadClick() {
    setDownloadMenuOpen(true);
  }

  return (
    <React.Fragment>
      <Menu
        anchorEl={props.anchorEl}
        open={props.pictureMenuOpen}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem onClick={handleDownloadClick}>
          <DownloadIcon className={classes.icon} />
          Download
        </MenuItem>
        <MenuItem onClick={handleSelectClick}>
          <AddCircleIcon className={classes.icon} />
          Add to Selected
        </MenuItem>
      </Menu>
      <DownloadMenu 
        anchorEl={props.anchorEl} 
        downloadMenuOpen={downloadMenuOpen} 
        setDownloadMenuOpen={setDownloadMenuOpen}
        setPictureMenuOpen={props.setPictureMenuOpen}
        clickedImg={props.clickedImg}  
      />
    </React.Fragment>
  )
}