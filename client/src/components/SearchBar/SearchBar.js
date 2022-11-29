import React, { useContext } from 'react';
import PexusBayContext from '../../context/PexusBayContext';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, alpha } from '@material-ui/core/styles';
import getImgURIs from '../../util/getImgURIs';
import { IconButton } from '@material-ui/core';

const userStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
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
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function SearchBar() {
  const ENTER_KEY = 13;
  const classes = userStyles();
  const {
    term, setTerm,
    source,
    setImgURIs,
    setDisplayGetMoreBtn
  } = useContext(PexusBayContext);

  function handleKeyPress(event) {
    if (event.keyCode === ENTER_KEY) {
      attemptSearch();
    }
  }

  function attemptSearch() {
    if (term !== '') {
      try {
        getImgURIs({term: term, page: 1, source: source}, setImgURIs);
        window.scrollTo(0, 0);
        setDisplayGetMoreBtn(true);
      } catch (error) {
        console.log(error);
        alert("Sorry, looks like something went wrong. Please try again.");
      }
    }
  }
  
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <IconButton onClick={() => attemptSearch()}>
          <SearchIcon />
        </IconButton>
      </div>
      <InputBase
          placeholder={`${term ? term : 'Search images...'}`}
          classes={{
            input: classes.inputInput,
          }}
          onChange={(event) => setTerm(event.target.value)}
          onKeyDown={handleKeyPress}
      />
    </div>
  )
}

export default SearchBar;