import React, { useEffect, useState } from 'react';
import Pictures from '../../components/Pictures/Pictures';
import GetMoreButton from '../../components/GetMoreButton/GetMoreButton';
import UserInstructions from '../../components/UserInstructions/UserInstructions';
import PicturePreview from '../../components/PicturePreview/PicturePreview';
import PictureMenu from '../../components/PictureMenu/PictureMenu';
import getImgURIs from '../../Util/getImgURIs';

function Home(props) {
  const [imgPreviewURI, setImgPreviewURI] = useState(null);
  const [clickedImg, setClickedImg] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [pictureMenuOpen, setPictureMenuOpen] = useState(null);
  
  useEffect(() => {
    props.setNavBarType('home');
  });
  
  return (
    <React.Fragment>
      {props.imgURIs.size === 0 &&
        <UserInstructions type={'home'} />
      }
      <Pictures 
        imgURIs={props.imgURIs}
        setSelectedImgs={props.setSelectedImgs}
        setDisplayProgress={props.setDisplayProgress}
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
        setDisplayZipBtn={props.setDisplayZipBtn}
        setDisplayProgress={props.setDisplayProgress}
      />
      <GetMoreButton 
        page={props.page}
        term={props.term}
        source={props.source}
        imgURIs={props.imgURIs} 
        getImgURIs={getImgURIs} 
        setPage={props.setPage} 
        setImgURIs={props.setImgURIs}
        displayGetMoreBtn={props.displayGetMoreBtn}
      />
    </React.Fragment>
  )
}

export default Home;