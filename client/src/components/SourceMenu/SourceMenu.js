import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ButtonBase from '@material-ui/core/ButtonBase';

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
      <ButtonBase>
        <Button onClick={handleClick}>
          Source
        </Button>
      </ButtonBase>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Pixabay</MenuItem>
        <MenuItem onClick={handleClose}>Pexels</MenuItem>
        <MenuItem onClick={handleClose}>Unsplash</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
