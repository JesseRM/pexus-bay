import React, { useState, useEffect } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function PictureMenu(props) {
  const [anchorEl, setAnchorEl] = useState(props.anchorElement);

  function handleClose() {
    props.setAnchorEl(null);
  }

  useEffect(() => {
    setAnchorEl(props.anchorElement);
  }, [props.anchorElement]);

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      keepMounted
    >
      <MenuItem>
        Download
      </MenuItem>
      <MenuItem>
        Add to Selected
      </MenuItem>
    </Menu>
  )
}