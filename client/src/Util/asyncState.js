import { useState } from 'react';

export default function useAsyncState(initialValue) {
  const [value, setValue] = useState(initialValue);
  const setter = (newValue) => {
    return new Promise((resolve) => {
      setValue(newValue);
      resolve(newValue);
    })
  }
  
  return [value, setter];
}