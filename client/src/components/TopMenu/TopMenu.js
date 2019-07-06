import React, { useState, useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import DoneIcon from '@material-ui/icons/Done';
import HomeIcon from '@material-ui/icons/Home';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default function TopMenu(props) {
  const [drawerState, setDrawerState] = useState(props.drawerState);

  function handleClose() {
    props.setDrawerState(false);
  }

  return (
    <Drawer open={props.drawerState} onClose={handleClose}>
      <List onClick={() => props.setDrawerState(false)}>
      <ListItem button component={Link} to='/'>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem button component={Link} to='/selected'>
          <ListItemIcon><DoneIcon /></ListItemIcon>
          <ListItemText primary='Selected' />
        </ListItem>
      </List>
    </Drawer>
  )
}