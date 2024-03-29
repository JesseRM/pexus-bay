import React, { useState, useContext } from 'react';
import PexusBayContext from '../../context/PexusBayContext.js';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DownloadIcon from '@material-ui/icons/Archive';
import RemoveIcon from '@material-ui/icons/Clear';
import DownloadMenu from '../DownloadMenu/DownloadMenu.js';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: '10px'
  }
}));

function PictureMenu(props) {
  const {setSelectedImgs} = useContext(PexusBayContext);
  const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);
  const classes = useStyles();

  function handleMenuClose() {
    props.setAnchorEl(null);
    props.setPictureMenuOpen(false);
  }

  function handleSelectClick() {
    setSelectedImgs((selectedImgs) => {
      selectedImgs.add(props.clickedImg);

      return selectedImgs;
    });

    handleMenuClose();
  }

  function handleDownloadClick() {
    setDownloadMenuOpen(true);
  }

  function handleRemoveClick() {
    setSelectedImgs((selectedImgs) => {
      selectedImgs.delete(props.clickedImg);
      props.setDisplayZipBtn(selectedImgs.size);
      
      return selectedImgs;
    });

    handleMenuClose();
  }

  return (
    <React.Fragment>
      <Menu
        anchorEl={props.anchorEl}
        open={props.pictureMenuOpen}
        onClose={handleMenuClose}
        keepMounted
      >
        {window.location.pathname !== '/selected' &&
          <MenuItem onClick={handleDownloadClick}>
            <DownloadIcon className={classes.icon} />
            Download
          </MenuItem>
        }     
        {window.location.pathname !== '/selected' &&
          <MenuItem onClick={handleSelectClick}>
            <AddCircleIcon className={classes.icon} />
            Add to Selected
          </MenuItem>
        } 
        {window.location.pathname === '/selected' &&
          <MenuItem onClick={handleRemoveClick}>
            <RemoveIcon className={classes.icon} />
            Remove
          </MenuItem>
        } 
      </Menu>
      <DownloadMenu 
        anchorEl={props.anchorEl} 
        clickedImg={props.clickedImg}
        downloadMenuOpen={downloadMenuOpen} 
        setDownloadMenuOpen={setDownloadMenuOpen}
        setPictureMenuOpen={props.setPictureMenuOpen} 
      />
    </React.Fragment>
  )
}

export default PictureMenu;