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
        pictureMenuOpen={pictureMenuOpen}
        imgURIs={props.imgURIs}
        clickedImg={clickedImg}
        setAnchorEl={setAnchorEl} 
        setPictureMenuOpen={setPictureMenuOpen}
        setSelectedImgs={props.setSelectedImgs}
        setDisplayZipBtn={props.setDisplayZipBtn}
        setDisplayProgress={props.setDisplayProgress}
      />
      <GetMoreButton 
        imgURIs={props.imgURIs} 
        page={props.page}
        term={props.term}
        source={props.source}
        displayGetMoreBtn={props.displayGetMoreBtn}
        setImgURIs={props.setImgURIs}
        setPage={props.setPage} 
        getImgURIs={getImgURIs}  
      />
    </React.Fragment>
  )
}

export default Home;