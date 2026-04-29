import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MenuYonetimi from "./pages/MenuYonetimi";
import RaporEkrani from "./pages/RaporEkrani";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuYonetimi />} />
        <Route path="/rapor" element={<RaporEkrani />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
