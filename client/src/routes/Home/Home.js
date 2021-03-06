import React, { useEffect } from 'react';
import Pictures from '../../components/Pictures/Pictures';
import GetMoreButton from '../../components/GetMoreButton/GetMoreButton';
import UserInstructions from '../../components/UserInstructions/UserInstructions';
import getImgURIs from '../../Util/getImgURIs';

function Home(props) {
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
        setImgPreviewURI={props.setImgPreviewURI}
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