require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Temel Middleware'ler
app.use(cors());
app.use(express.json());

// TODO: Kimlik doğrulama (auth) rotaları daha sonra buraya eklenecek

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`RYS Backend sunucusu ${PORT} portunda çalışıyor...`);
});

module.exports = app;