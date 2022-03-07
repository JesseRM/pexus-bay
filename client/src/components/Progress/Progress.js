import React, { useContext } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import PexusBayContext from '../../context/PexusBayContext';

function Progress(props) {
  const {displayProgress} = useContext(PexusBayContext);

  if (!displayProgress) {
    return null;
  }

  return (
    <div>
      <LinearProgress color="secondary" />
    </div>
  )
}

export default Progress;