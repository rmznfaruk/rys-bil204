import React from 'react';
// Serdar, senin oluşturduğun sayfayı ana merkeze bağladık kral:
import MenuYonetimi from './pages/MenuYonetimi'; 

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      {/* Şu an ekranda sadece senin Menü Yönetimi sayfan görünecek */}
      <MenuYonetimi /> 
    </div>
  );
}

export default App;