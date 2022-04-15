import React from "react";
import HomeFlow from "./Components/Home/HomeFlow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CompressProvider } from "./Components/Context/CompressContext";
import { StepStateProvider } from "./Components/Context/StepContext";
import { CompStateProvider } from "./Components/Context/CompStateContext";
import { FormProvider } from "./Components/Context/FormContext";

function App() {
  return (
    <CompressProvider>
      <StepStateProvider>
      <CompStateProvider>
      <FormProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomeFlow />} />
          </Routes>
        </Router>
      </FormProvider>
      </CompStateProvider>
      </StepStateProvider>
    </CompressProvider>
  );
}

export default App;
