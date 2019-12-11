import React, { useEffect, useState } from 'react';
import Pictures from '../../components/Pictures/Pictures';
import CreateZipButton from '../../components/CreateZipButton/CreateZipButton';
import UserInstructions from '../../components/userInstructions/UserInstructions';

function Selected(props) {
  useEffect(() => {
    props.setNavBarType('selected');
  });
  const [displayZipBtn, setDisplayZipBtn] = useState(props.selectedImgs.size);

  return (
    <div>
      {props.selectedImgs.size === 0 &&
        <UserInstructions type={'selected'} />
      }
      <CreateZipButton 
        displayZipBtn={displayZipBtn}
        selectedImgs={props.selectedImgs}
        setDisplayProgress={props.setDisplayProgress}
      />
      <Pictures 
        imgURIs={props.selectedImgs}
        setSelectedImgs={props.setSelectedImgs} 
        setDisplayZipBtn={setDisplayZipBtn}
        setImgPreviewURI={props.setImgPreviewURI}
      />
    </div>
  )
}

export default Selected;