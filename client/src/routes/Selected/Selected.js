import React, { useEffect, useState } from 'react';
import Pictures from '../../components/Pictures/Pictures';
import NavBar from '../../components/NavBar/NavBar';
import CreateZipButton from '../../components/CreateZipButton/CreateZipButton';
import Progress from '../../components/Progress/Progress';

function Selected(props) {
  useEffect(() => {
    props.setNavBarType('selected');
  });
  const [displayZipBtn, setDisplayZipBtn] = useState(props.selectedImgs.size);

  return (
    <div>
      <NavBar 
        setTopMenuOpen={props.setTopMenuOpen} 
        navBarType={props.navBarType}
      />
      <Progress />
      <CreateZipButton 
        displayZipBtn={displayZipBtn}
        selectedImgs={props.selectedImgs}
        setDisplayProgress={props.setDisplayProgress}
      />
      <Pictures 
        imgURIs={props.selectedImgs}
        setSelectedImgs={props.setSelectedImgs} 
        setDisplayZipBtn={setDisplayZipBtn}
      />
    </div>
  )
}

export default Selected;