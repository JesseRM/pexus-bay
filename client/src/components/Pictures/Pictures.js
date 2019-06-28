import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import PictureMenu from '../PictureMenu/PictureMenu';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  card: {
    maxWidth: 200,
    margin: '6px'
  },
  media: {
    height: 200,
    width: 200,
  }
}));

export default function Pictures(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  let picCards;

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  
  if (props.imgURIs) {
    picCards = props.imgURIs.thumb.map((thumb, index) => {
      
      return (
        <Card className={classes.card} key={index}>
          <CardMedia className={classes.media} image={thumb}>
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
          </CardMedia>
        </Card>
      )
    });
  }
 
  return (
    <div className={classes.root}>
      {picCards}
      <PictureMenu anchorElement={anchorEl} setAnchorEl={setAnchorEl} />
    </div>
  )
}