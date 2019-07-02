import React, { useState, useEffect } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link, BrowserRouter} from 'react-router-dom'

export default function TopMenu(props) {
  const [drawerState, setDrawerState] = useState(props.drawerState);

  function handleClose() {
    props.setDrawerState(false);
  }

  return (
    
    <Drawer open={props.drawerState} onClose={handleClose}>
      <List>
        <Link to='/selected'>
        <ListItem>
          <ListItemText primary='Selected' />
        </ListItem>
        </Link>
      </List>
    </Drawer>
    
  )
}