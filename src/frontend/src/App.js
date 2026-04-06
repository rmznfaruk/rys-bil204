import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Sadece elimizde olan gerçek sayfaları import ediyoruz
import KullaniciYonetimi from './pages/KullaniciYonetimi';
import MenuYonetimi from './pages/MenuYonetimi';

function App() {
  return (
    <BrowserRouter>
      {/* Üst Menü (Rapor alırken sayfalar arası geçişi kolaylaştırır) */}
      <nav style={{ padding: '15px', background: '#2C3E50', marginBottom: '20px' }}>
        <Link to="/kullanici" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>👥 Kullanıcı Yönetimi</Link>
        <Link to="/menu" style={{ color: 'white', textDecoration: 'none' }}>🍔 Menü Yönetimi</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        {/* Rotaları gerçek bileşenlerle bağlıyoruz */}
        <Routes>
          {/* Ana sayfa boş kalmasın diye karşılama mesajı koyuyoruz */}
          <Route path="/" element={<h2 style={{ textAlign: "center" }}>RYS Sistemine Hoş Geldiniz. Lütfen üstteki menüden bir sayfa seçin.</h2>} />
          
          <Route path="/kullanici" element={<KullaniciYonetimi />} />
          <Route path="/menu" element={<MenuYonetimi />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;