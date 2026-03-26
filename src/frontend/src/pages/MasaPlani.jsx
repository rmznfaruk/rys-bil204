import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MasaPlani = () => {
  const navigate = useNavigate();
  // Yusuf API'yi yazana kadar test verisi kullanıyoruz (Görseldeki talimat)
  const [masalar, setMasalar] = useState([
    { id: 101, kapasite: 4, durum: 'bos' },
    { id: 102, kapasite: 2, durum: 'dolu' },
    { id: 103, kapasite: 6, durum: 'rezerveli' },
    { id: 104, kapasite: 4, durum: 'temizleniyor' },
  ]);

  // Durumlara göre renkleri belirleyen fonksiyon (Görseldeki tablodan)
  const getRenkler = (durum) => {
    switch (durum) {
      case 'bos': return { bg: '#D5F5E3', border: '#1E7E34' };
      case 'dolu': return { bg: '#FADBD8', border: '#C0392B' };
      case 'rezerveli': return { bg: '#FEF9E7', border: '#F39C12' };
      case 'temizleniyor': return { bg: '#EEEEEE', border: '#888888' };
      default: return { bg: '#FFFFFF', border: '#000000' };
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ color: '#1E7E34' }}>Masa Planı</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '20px' }}>
        {masalar.map(masa => {
          const renk = getRenkler(masa.durum);
          return (
            <div 
              key={masa.id} 
              // Görseldeki yönlendirme kuralı: /siparis?masaId=X
              onClick={() => navigate(`/siparis?masaId=${masa.id}`)}
              style={{
                backgroundColor: renk.bg,
                border: `3px solid ${renk.border}`,
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
            >
              {/* Görseldeki format: Büyük masa no, kapasite, büyük harf durum */}
              <h1 style={{ margin: 0, fontSize: '2.5rem' }}>{masa.id}</h1>
              <p style={{ margin: '5px 0' }}>Kapasite: {masa.kapasite}</p>
              <h3 style={{ margin: 0, textTransform: 'uppercase' }}>{masa.durum}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MasaPlani;