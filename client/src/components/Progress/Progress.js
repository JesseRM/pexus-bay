import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

function Progress(props) {
  if (!props.displayProgress) {
    return null;
  }

  return (
    <div>
      <LinearProgress color="secondary" />
    </div>
  )
}

export default Progress;