import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/global.css";
import Apply from "./pages/Apply";
import Oauth from "./components/Oauth";
import ApplyGuide from "./components/ApplyGuide";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":day/:sorted" element={<Home />} />
        </Route>
        <Route path="/oauth" element={<Oauth />} />
        <Route path="/apply" element={<ApplyGuide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
