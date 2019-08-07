import React, { useEffect } from 'react';
import Pictures from '../../components/Pictures/Pictures';
import NavBar from '../../components/NavBar/NavBar';

export default function Selected(props) {
  useEffect(() => {
    props.setNavBarType('selected');
  });

  return (
    <div>
      <NavBar 
        setTopMenuOpen={props.setTopMenuOpen} 
        navBarType={props.navBarType}
      />
      <Pictures imgURIs={props.imgURIs} />
    </div>
  )
}