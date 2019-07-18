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
  const [anchorEl, setAnchorEl] = useState(props.anchorElement);
  const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);
  const classes = useStyles();

  function handleClose() {
    props.setAnchorEl(null);
  }

  useEffect(() => {
    setAnchorEl(props.anchorElement);
  }, [props.anchorElement]);

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
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
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
        anchorEl={anchorEl} 
        downloadMenuOpen={downloadMenuOpen} 
        setDownloadMenuOpen={setDownloadMenuOpen}  
      />
    </React.Fragment>
  )
}