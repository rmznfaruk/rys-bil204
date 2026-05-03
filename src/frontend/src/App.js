import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import KullaniciYonetimi from "./pages/KullaniciYonetimi";
import LoginPage from "./pages/LoginPage";
import MasaPlani from "./pages/MasaPlani";
import MenuYonetimi from "./pages/MenuYonetimi";
import RaporEkrani from "./pages/RaporEkrani";

function App() {
  const navLinkStyle = {
    color: "white",
    marginRight: "20px",
    textDecoration: "none",
  };

  return (
    <BrowserRouter>
      <nav style={{ padding: "15px", background: "#2C3E50", marginBottom: "20px" }}>
        <Link to="/" style={navLinkStyle}>Giris (Login)</Link>
        <Link to="/kullanici" style={navLinkStyle}>Kullanici Yonetimi</Link>
        <Link to="/menu" style={navLinkStyle}>Menu Yonetimi</Link>
        <Link to="/masalar" style={navLinkStyle}>Masa Plani</Link>
        <Link to="/rapor" style={{ color: "white", textDecoration: "none" }}>Rapor Ekrani</Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/kullanici" element={<KullaniciYonetimi />} />
          <Route path="/menu" element={<MenuYonetimi />} />
          <Route path="/masalar" element={<MasaPlani />} />
          <Route path="/rapor" element={<RaporEkrani />} />
          <Route
            path="/yonetim"
            element={<h2 style={{ textAlign: "center" }}>Giris basarili! Yonetim paneli yakinda eklenecek.</h2>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
