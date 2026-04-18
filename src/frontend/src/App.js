import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Tüm sayfalarımızı (senin Login sayfan dahil) projeye dahil ediyoruz
import LoginPage from './pages/LoginPage';
import KullaniciYonetimi from './pages/KullaniciYonetimi';
import MenuYonetimi from './pages/MenuYonetimi';

function App() {
  return (
    <BrowserRouter>
      {/* Üst Menü (Sayfalar arası gezinebilmen için geçici olarak duruyor) */}
      <nav style={{ padding: '15px', background: '#2C3E50', marginBottom: '20px' }}>
        <Link to="/" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>🚪 Giriş (Login)</Link>
        <Link to="/kullanici" style={{ color: 'white', marginRight: '20px', textDecoration: 'none' }}>👥 Kullanıcı Yönetimi</Link>
        <Link to="/menu" style={{ color: 'white', textDecoration: 'none' }}>🍔 Menü Yönetimi</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          {/* İŞTE SİHİRLİ DOKUNUŞ: Ana sayfada artık o sıkıcı yazı değil, LoginPage çıkacak */}
          <Route path="/" element={<LoginPage />} />
          
          <Route path="/kullanici" element={<KullaniciYonetimi />} />
          <Route path="/menu" element={<MenuYonetimi />} />
          
          {/* Giriş yap butonuna basınca gideceği Yönetim Paneli için geçici bir rota */}
          <Route path="/yonetim" element={<h2 style={{textAlign: 'center'}}>Giriş Başarılı! Yönetim Paneli Yakında Eklenecek.</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;