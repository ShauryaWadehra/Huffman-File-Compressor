import React, { createContext, useState } from 'react';
export const StepContext = createContext();

export function StepStateProvider(props) {

  const[StepState, setStepState] = useState('1');

  return (
    <StepContext.Provider value={[StepState, setStepState]}>
      {props.children}
    </StepContext.Provider>
  );
};