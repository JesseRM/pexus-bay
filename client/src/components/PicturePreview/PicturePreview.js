import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CloseIcon from '@material-ui/icons/Close';
import CardActionArea from '@material-ui/core/CardActionArea';
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
  media: {
    width: '100%',
    height: '100%'
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
  
  return (
    <Card className={classes.card} style={{top: top, left: left}}>
      <CardHeader 
        action={
          <CardActionArea>
            <CloseIcon onClick={handleCloseClick} />
          </CardActionArea>
        }
      />
      <CardMedia
        image={props.imgPreviewURI} className={classes.media}
      />
    </Card>
  )
}

export default PicturePreview;