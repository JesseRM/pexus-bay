import React from 'react';
import Pictures from '../../components/Pictures/Pictures';
import GenNavBAr from '../../components/GenNavBar/GenNavBar';

export default function Selected(props) {

  return (
    <div>
      <GenNavBAr setDrawerState={props.setDrawerState} />
      <Pictures imgURIs={props.imgURIs} />
    </div>
  )
}