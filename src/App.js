import React from "react";
import HomeFlow from "./Components/Home/HomeFlow";
import { CompressProvider } from "./Components/Context/CompressContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StepStateProvider } from "./Components/Context/StepContext";

function App() {
  return (
    <CompressProvider>
      <StepStateProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomeFlow />} />
          </Routes>
        </Router>
      </StepStateProvider>
    </CompressProvider>
  );
}

export default App;
