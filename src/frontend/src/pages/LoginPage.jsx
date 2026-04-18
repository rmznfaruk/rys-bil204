import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [kullaniciAdi, setKullaniciAdi] = useState('');
  const [sifre, setSifre] = useState('');
  const [hataMesaji, setHataMesaji] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!kullaniciAdi || !sifre) {
      setHataMesaji('Lütfen kullanıcı adı ve şifrenizi giriniz.');
      return;
    }
    setHataMesaji('');
    navigate('/yonetim');
  };

  const handleKayitOl = () => {
    // İleride buraya "Kayıt Ol" sayfasına yönlendirme eklenebilir
    alert("Kullanıcı oluşturma sayfası yakında eklenecek!");
  };

  return (
    <>
      {/* React içinde CSS hover ve animasyon efektlerini kullanabilmek için 
        harici bir CSS dosyası yerine pratik bir <style> bloğu kullanıyoruz. 
      */}
      <style>
        {`
          .rys-login-wrapper {
            display: flex;
            height: 85vh;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          .rys-login-card {
            background: #ffffff;
            padding: 50px 40px;
            border-radius: 16px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
            width: 100%;
            max-width: 420px;
            text-align: center;
            transition: transform 0.3s ease;
          }
          .rys-login-card:hover {
            transform: translateY(-5px);
          }
          .rys-logo-icon {
            font-size: 3rem;
            margin-bottom: 10px;
            display: inline-block;
          }
          .rys-title {
            color: #2C3E50;
            font-size: 1.8rem;
            font-weight: 800;
            margin: 0 0 5px 0;
            letter-spacing: -0.5px;
          }
          .rys-subtitle {
            color: #7f8c8d;
            font-size: 0.95rem;
            margin-bottom: 35px;
          }
          .rys-input-group {
            text-align: left;
            margin-bottom: 20px;
          }
          .rys-label {
            display: block;
            color: #34495e;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 8px;
          }
          .rys-input {
            width: 100%;
            padding: 14px 16px;
            border: 1.5px solid #e0e6ed;
            border-radius: 8px;
            font-size: 1rem;
            color: #2c3e50;
            background-color: #f8fafc;
            transition: all 0.2s ease;
            box-sizing: border-box;
          }
          .rys-input:focus {
            outline: none;
            border-color: #3498db;
            background-color: #ffffff;
            box-shadow: 0 0 0 4px rgba(52, 152, 219, 0.1);
          }
          .rys-btn-primary {
            width: 100%;
            padding: 14px;
            background-color: #2C3E50;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1.05rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 10px;
          }
          .rys-btn-primary:hover {
            background-color: #1a252f;
            box-shadow: 0 4px 12px rgba(44, 62, 80, 0.3);
          }
          .rys-btn-secondary {
            width: 100%;
            padding: 14px;
            background-color: transparent;
            color: #3498db;
            border: 1.5px solid #3498db;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 15px;
          }
          .rys-btn-secondary:hover {
            background-color: #f4f9fd;
          }
          .rys-error-box {
            background-color: #fef0f0;
            color: #e74c3c;
            padding: 12px;
            border-radius: 8px;
            font-size: 0.9rem;
            margin-bottom: 20px;
            border-left: 4px solid #e74c3c;
            text-align: left;
          }
        `}
      </style>

      <div className="rys-login-wrapper">
        <div className="rys-login-card">
          <div className="rys-logo-icon">🍽️</div>
          <h1 className="rys-title">RYS</h1>
          <div className="rys-subtitle">Restoran Yönetim Sistemi</div>

          {hataMesaji && <div className="rys-error-box">{hataMesaji}</div>}

          <form onSubmit={handleLogin}>
            <div className="rys-input-group">
              <label className="rys-label">Kullanıcı Adı</label>
              <input 
                type="text" 
                className="rys-input"
                placeholder="Örn: yonetici_ahmet"
                value={kullaniciAdi}
                onChange={(e) => setKullaniciAdi(e.target.value)}
              />
            </div>

            <div className="rys-input-group">
              <label className="rys-label">Şifre</label>
              <input 
                type="password" 
                className="rys-input"
                placeholder="••••••••"
                value={sifre}
                onChange={(e) => setSifre(e.target.value)}
              />
            </div>

            <button type="submit" className="rys-btn-primary">
              Sisteme Giriş Yap
            </button>
          </form>

          {/* Senin istediğin Kullanıcı Oluştur butonu */}
          <button onClick={handleKayitOl} className="rys-btn-secondary">
            Yeni Kullanıcı Oluştur
          </button>

        </div>
      </div>
    </>
  );
};

export default LoginPage;