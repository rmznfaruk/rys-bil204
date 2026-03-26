import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SiparisGirisi = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const masaId = searchParams.get('masaId'); // URL'den masa ID'sini alır

  const [aktifKategori, setAktifKategori] = useState('Başlangıç');
  const [sepet, setSepet] = useState([]);

  const kategoriler = ['Başlangıç', 'Çorbalar', 'Ana Yemek', 'İçecek', 'Tatlı'];
  
  // Örnek Ürün Listesi (Görseldeki kurallara göre)
  const tumUrunler = [
    { id: 1, ad: 'Mercimek Çorbası', fiyat: 50, kategori: 'Çorbalar' },
    { id: 2, ad: 'Adana Kebap', fiyat: 250, kategori: 'Ana Yemek' },
    { id: 3, ad: 'Ayran', fiyat: 30, kategori: 'İçecek' },
    { id: 4, ad: 'Humus', fiyat: 80, kategori: 'Başlangıç' },
    { id: 5, ad: 'Sütlaç', fiyat: 90, kategori: 'Tatlı' },
  ];

  const sepeteEkle = (urun) => {
    setSepet([...sepet, { ...urun, sepetId: Date.now() }]);
  };

  const sepettenCikar = (sepetId) => {
    setSepet(sepet.filter(item => item.sepetId !== sepetId));
  };

  const siparisiOnayla = () => {
    // Görseldeki kural: POST /api/orders
    const siparisVerisi = { masaId, urunler: sepet };
    axios.post('http://localhost:5000/api/orders', siparisVerisi)
      .then(() => {
        alert("Sipariş başarıyla gönderildi!");
        navigate('/masa-plani'); // Başarılıysa masa planına döner
      })
      .catch(err => console.error("Hata:", err));
  };

  return (
    <div style={{ display: 'flex', padding: '20px', gap: '20px', fontFamily: 'Arial' }}>
      {/* SOL SÜTUN: Kategoriler ve Ürünler */}
      <div style={{ flex: 2 }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          {kategoriler.map(kat => (
            <button 
              key={kat}
              onClick={() => setAktifKategori(kat)}
              style={{
                padding: '10px 20px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                // Görsel kuralı: Aktif kategori lacivert olur
                backgroundColor: aktifKategori === kat ? '#000080' : '#f0f0f0',
                color: aktifKategori === kat ? 'white' : 'black',
                cursor: 'pointer'
              }}
            >
              {kat}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          {tumUrunler.filter(u => u.kategori === aktifKategori).map(urun => (
            <div 
              key={urun.id} 
              onClick={() => sepeteEkle(urun)}
              style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', cursor: 'pointer', textAlign: 'center' }}
            >
              <h4 style={{ margin: '0 0 10px 0' }}>{urun.ad}</h4>
              <span style={{ color: '#1E7E34', fontWeight: 'bold' }}>{urun.fiyat} TL</span>
            </div>
          ))}
        </div>
      </div>

      {/* SAĞ SÜTUN: Sepet */}
      <div style={{ flex: 1, border: '1px solid #eee', padding: '20px', borderRadius: '10px', backgroundColor: '#fafafa' }}>
        <h3>Masa {masaId} - Sipariş Sepeti</h3>
        <hr />
        <div style={{ minHeight: '300px' }}>
          {sepet.map(item => (
            <div key={item.sepetId} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>{item.ad} - {item.fiyat} TL</span>
              <button onClick={() => sepettenCikar(item.sepetId)} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>✖</button>
            </div>
          ))}
        </div>
        <hr />
        <h4>Toplam: {sepet.reduce((top, item) => top + item.fiyat, 0)} TL</h4>
        <button 
          onClick={siparisiOnayla}
          style={{ width: '100%', padding: '15px', backgroundColor: '#1E7E34', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Siparişi Onayla
        </button>
      </div>
    </div>
  );
};

export default SiparisGirisi;