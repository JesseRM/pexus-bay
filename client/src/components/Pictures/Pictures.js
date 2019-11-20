import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import PictureMenu from '../PictureMenu/PictureMenu';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: '64px',
    justifyContent: 'center'
  },
  card: {
    maxWidth: 100,
    margin: '6px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: 200,
      margin: '6px'
    }
  },
  media: {
    height: 100,
    width: 100,
    [theme.breakpoints.up('sm')]: {
      height: 200,
      width: 200
    }
  }
}));

function Pictures(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [clickedImg, setClickedImg] = useState(null);
  const [pictureMenuOpen, setPictureMenuOpen] = useState(false);
  let pictureCards;

  function handleMoreIconClick(event) {
    setAnchorEl(event.currentTarget);
    setPictureMenuOpen(true);
    setClickedImg([...props.imgURIs][event.currentTarget.attributes['data-index'].value])
  }
  
  if (props.imgURIs.size) {
    pictureCards = pictureCards || [];
    let key = 0;
    
    props.imgURIs.forEach((img) => {
      pictureCards.push((
        <Card className={classes.card} key={key}>
          <CardMedia className={classes.media} image={img.thumb} >
            <IconButton onClick={handleMoreIconClick} data-index={key}>
              <MoreVertIcon />
            </IconButton>
          </CardMedia>
        </Card>
      ));

      key++;
    });
  }
 
  return (
    <div className={classes.root}>
      {pictureCards}
      <PictureMenu 
        anchorEl={anchorEl} 
        setAnchorEl={setAnchorEl} 
        setSelectedImgs={props.setSelectedImgs}
        pictureMenuOpen={pictureMenuOpen}
        setPictureMenuOpen={setPictureMenuOpen} 
        imgURIs={props.imgURIs}
        clickedImg={clickedImg}
        setDisplayZipBtn={props.setDisplayZipBtn}
        setDisplayProgress={props.setDisplayProgress}
      />
    </div>
  )
}

export default Pictures;