import React, { useState, useEffect } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DownloadIcon from '@material-ui/icons/Archive';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: '10px'
  }
}));


export default function PictureMenu(props) {
  const [anchorEl, setAnchorEl] = useState(props.anchorElement);
  const classes = useStyles();

  function handleClose() {
    props.setAnchorEl(null);
  }

  useEffect(() => {
    setAnchorEl(props.anchorElement);
  }, [props.anchorElement]);

  function handleSelectClick() {
    props.setSelectedImgs((selectedImgs) => {
      const selectedImg = [...props.imgURIs][props.clickedElIndex];
      selectedImgs.add(selectedImg);

      return selectedImgs;
    });

    handleClose();
  }

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      keepMounted
    >
      <MenuItem>
        <DownloadIcon className={classes.icon} />
        Download
      </MenuItem>
      <MenuItem onClick={handleSelectClick}>
        <AddCircleIcon className={classes.icon} />
        Add to Selected
      </MenuItem>
    </Menu>
  )
}