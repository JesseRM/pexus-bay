import React, { useEffect, useState, useContext } from 'react';
import PexusBayContext from '../../context/PexusBayContext';
import Pictures from '../../components/Pictures/Pictures';
import CreateZipButton from '../../components/CreateZipButton/CreateZipButton';
import PicturePreview from '../../components/PicturePreview/PicturePreview';
import PictureMenu from '../../components/PictureMenu/PictureMenu';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function Selected() {
  const {setNavBarType, selectedImgs} = useContext(PexusBayContext);
  const [displayZipBtn, setDisplayZipBtn] = useState(selectedImgs.size);
  const [clickedImg, setClickedImg] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [imgPreviewURI, setImgPreviewURI] = useState(null);
  const [pictureMenuOpen, setPictureMenuOpen] = useState(false);
  const noSelectionMessage = "You have not selected any images yet.";
  
  useEffect(() => {
    setNavBarType('selected');
  });

  return (
    <div>
      {selectedImgs.size === 0 &&
        <ErrorMessage message={noSelectionMessage} />
      }
      <CreateZipButton 
        displayZipBtn={displayZipBtn}
      />
      <Pictures
        imgURIs={selectedImgs}  
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
        pictureMenuOpen={pictureMenuOpen}
        clickedImg={clickedImg}
        setAnchorEl={setAnchorEl} 
        setPictureMenuOpen={setPictureMenuOpen}
        setDisplayZipBtn={setDisplayZipBtn}
      />
    </div>
  )
}

export default Selected;