import React, { useEffect, useState, useContext } from 'react';
import PexusBayContext from '../../context/PexusBayContext';
import Pictures from '../../components/Pictures/Pictures';
import GetMoreButton from '../../components/GetMoreButton/GetMoreButton';
import PicturePreview from '../../components/PicturePreview/PicturePreview';
import PictureMenu from '../../components/PictureMenu/PictureMenu';
import WelcomeScreen from '../../components/WelcomeScreen/WelcomeScreen';

function Home() {
  const {setNavBarType, imgURIs} = useContext(PexusBayContext);
  const [imgPreviewURI, setImgPreviewURI] = useState(null);
  const [clickedImg, setClickedImg] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [pictureMenuOpen, setPictureMenuOpen] = useState(false);
  
  useEffect(() => {
    setNavBarType('home');
  });
  
  return (
    <React.Fragment>
      {imgURIs.size === 0 &&
        <WelcomeScreen />
      }
      <Pictures
        imgURIs={imgURIs} 
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
      />
      <GetMoreButton />
    </React.Fragment>
  )
}

export default Home;