import React from 'react';
import Button from '@material-ui/core/Button';

export default function GetMoreButton(props) {
  if (!props.imgURIs) {
    return null;
  }

  function handleClick() {
    props.setPage(props.page + 1).then((page) => props.getImgURIs(page));
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Get More
      </Button>
    </div>
  )
}