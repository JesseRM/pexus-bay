import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import PexusBayContext from '../../context/PexusBayContext';

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
  let pictureCards;

  function handleImgClick(event, imgURI) {
    props.setImgPreviewURI(imgURI);
    props.setClickedImg([...props.imgURIs][event.currentTarget.attributes['data-index'].value]);
  }
  
  if (props.imgURIs.size) {
    pictureCards = pictureCards || [];
    let key = 0;
    
    props.imgURIs.forEach((img) => {
      pictureCards.push((
        <Card className={classes.card} key={key}>
          <CardActionArea>
            <CardMedia 
              className={classes.media} 
              image={img.thumb} 
              data-index={key}
              onClick={(event) => handleImgClick(event, img.medium)} 
            />
          </CardActionArea>
        </Card>
      ));

      key++;
    });
  }
 
  return (
    <div className={classes.root}>
      {pictureCards}
    </div>
  )
}

export default Pictures;