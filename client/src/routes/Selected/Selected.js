import React, { useEffect, useState } from 'react';
import Pictures from '../../components/Pictures/Pictures';
import CreateZipButton from '../../components/CreateZipButton/CreateZipButton';
import UserInstructions from '../../components/UserInstructions/UserInstructions';
import PicturePreview from '../../components/PicturePreview/PicturePreview';
import PictureMenu from '../../components/PictureMenu/PictureMenu';

function Selected(props) {
  const [displayZipBtn, setDisplayZipBtn] = useState(props.selectedImgs.size);
  const [clickedImg, setClickedImg] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [imgPreviewURI, setImgPreviewURI] = useState(null);
  const [pictureMenuOpen, setPictureMenuOpen] = useState(null);
  
  useEffect(() => {
    props.setNavBarType('selected');
  });

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
        setImgPreviewURI={setImgPreviewURI}
        setClickedImg={setClickedImg}
      />
      <PicturePreview
        imgPreviewURI={imgPreviewURI}
        setImgPreviewURI={setImgPreviewURI}
        setAnchorEl={setAnchorEl}
        setPictureMenuOpen={setPictureMenuOpen}
      />
      <PictureMenu 
        anchorEl={anchorEl} 
        setAnchorEl={setAnchorEl} 
        setSelectedImgs={props.setSelectedImgs}
        pictureMenuOpen={pictureMenuOpen}
        setPictureMenuOpen={setPictureMenuOpen} 
        imgURIs={props.imgURIs}
        clickedImg={clickedImg}
        setDisplayZipBtn={setDisplayZipBtn}
        setDisplayProgress={props.setDisplayProgress}
      />
    </div>
  )
}

export default Selected;