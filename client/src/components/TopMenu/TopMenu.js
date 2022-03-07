import React, { useContext } from 'react';
import PexusBayContext from '../../context/PexusBayContext';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import DoneIcon from '@material-ui/icons/Done';
import HomeIcon from '@material-ui/icons/Home';
import ListItemIcon from '@material-ui/core/ListItemIcon';

function TopMenu() {
  const {topMenuOpen, setTopMenuOpen} = useContext(PexusBayContext);
  
  function handleTopMenuClose() {
    setTopMenuOpen(false);
  }

  return (
    <Drawer 
      open={topMenuOpen} 
      onClose={handleTopMenuClose}
    >
      <List onClick={() => setTopMenuOpen(false)}>
        <ListItem 
          button 
          component={Link} 
          to='/'
        >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
            <ListItemText primary='Home' />
        </ListItem>
        <ListItem 
          button 
          component={Link} 
          to='/selected'
        >
          <ListItemIcon>
            <DoneIcon />
          </ListItemIcon>
            <ListItemText primary='Selected' />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default TopMenu;