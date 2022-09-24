const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const PUBLIC_DIRECTORY = path.join(__dirname, '../public');

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.status(200);
  res.sendFile(path.join(PUBLIC_DIRECTORY, 'index.html'));
});

app.get('/cars', (req, res) => {
  res.status(200);
  res.sendFile(path.join(PUBLIC_DIRECTORY, 'cars.html'));
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("Halaman yang anda cari tidak ditemukan!");
});

app.listen(PORT, () => {
  console.log("Berhasil! Silahkan akses http://localhost:%d", PORT);
});