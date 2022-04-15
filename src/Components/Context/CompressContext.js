import React, { createContext, useState } from 'react';
export const CompressContext = createContext();

export function CompressProvider(props) {

  const[CompressState, setCompressState] = useState([]);

  return (
    <CompressContext.Provider value={[CompressState, setCompressState]}>
      {props.children}
    </CompressContext.Provider>
  );
};