import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, fade } from '@material-ui/core/styles';
import getImgURIs from '../../Util/getImgURIs';

const userStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    }
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 300,
    }
  }
}));

function SearchBar(props) {
  const ENTER_KEY = 13;
  const classes = userStyles();

  function handleKeyPress(event) {
    if (event.keyCode === ENTER_KEY) {
      if (props.term !== '') {
        getImgURIs({term: props.term, page: 1, source: props.source}, props.setImgURIs);
        window.scrollTo(0, 0);
        props.setDisplayGetMoreBtn(true);
      }
    }
  }
  
  return (
    <div className={classes.search}>
      <InputBase
          placeholder={`${props.term ? props.term : 'Search images...'}`}
          classes={{
            input: classes.inputInput,
          }}
          onChange={(event) => props.setTerm(event.target.value)}
          onKeyDown={handleKeyPress}
      />
    </div>
  )
}

export default SearchBar;