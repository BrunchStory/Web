import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/global.css";
import Oauth from "./components/Oauth";
import ApplyGuide from "./components/ApplyGuide";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":day/:sorted" element={<Home />} />
        </Route>
        <Route path="/oauth" element={<Oauth />} />
        <Route path="/apply" element={<ApplyGuide />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
