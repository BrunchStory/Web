import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/global.css";
import Apply from "./pages/Apply";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":day/:sorted" element={<Home />} />
        </Route>
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
