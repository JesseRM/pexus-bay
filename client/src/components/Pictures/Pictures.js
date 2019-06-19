import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';


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
    width: 200
  }
}));

export default function Pictures(props) {
  const classes = useStyles();
  let picCards;
  
  if (props.imgURIs) {
    picCards = props.imgURIs.thumb.map((thumb, index) => {
      
      return (
        <Card className={classes.card} key={index}>
          <CardMedia className={classes.media} image={thumb} />
        </Card>
      )
    });
  }
 
  return (
    <div className={classes.root}>
      {picCards}
    </div>
  )
}