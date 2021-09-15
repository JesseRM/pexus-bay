import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'absolute',
    zIndex: 999,
    [theme.breakpoints.between('xs', 'sm')]: {
      width: '20rem',
      height: '20rem'
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      width: '28rem',
      height: '28rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '43rem',
      height: '36rem'
    }
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  media: {
    width: '100%',
    height: '100%'
  },
  moreVertIcon: {
    float: 'left',
  },
  closeIcon: {
    float: 'right'
  }
}));

function PicturePreview(props) {
  const classes = useStyles();
  const top = (window.scrollY + 100) + 'px';
  let elementWidth;
  let left;

  if (window.innerWidth >= 1280) {
    elementWidth = 720;
  } else if (window.innerWidth < 1280 && window.innerWidth >= 600) {
    elementWidth = 448;
  } else {
    elementWidth = 320;
  }

  left = (window.innerWidth - elementWidth) / 2;

  if (!props.imgPreviewURI) {
    return null;
  }

  function handleCloseClick() {
    props.setImgPreviewURI(null);
  }

  function handleMoreIconClick(event) {
    event.stopPropagation();
    
    props.setAnchorEl(event.currentTarget);
    props.setPictureMenuOpen(true);
  }
  
  return (
    <Card className={classes.card} style={{top: top, left: left}}>
      <div className={classes.btnContainer}>
        <IconButton>
          <MoreVertIcon color='secondary' onClick={handleMoreIconClick} />
        </IconButton>
        <IconButton>
          <CloseIcon onClick={handleCloseClick} />
        </IconButton> 
      </div>
      <CardMedia
        image={props.imgPreviewURI} className={classes.media}
      />
    </Card>
  )
}

export default PicturePreview;