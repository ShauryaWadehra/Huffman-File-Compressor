import React, { createContext, useState } from 'react';
export const CompStateContext = createContext();

export function CompStateProvider(props) {

  const[CompStatus, CompStatusState] = useState([]);

  return (
    <CompStateContext.Provider value={[CompStatus, CompStatusState]}>
      {props.children}
    </CompStateContext.Provider>
  );
};