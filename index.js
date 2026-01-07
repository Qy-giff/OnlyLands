const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// DATA DUMMY TANAH
const lands = [
  {
    id: 1,
    title: "Tanah Strategis di Sleman",
    lokasi: "Sleman, DI Yogyakarta",
    harga: 1500000000,
    luas: 500,
    sertipikat: "SHM",
  },
  {
    id: 2,
    title: "Tanah Pinggir Jalan Utama",
    lokasi: "Bantul, DI Yogyakarta",
    harga: 950000000,
    luas: 300,
    sertipikat: "SHGB",
  },
];

// ROUTE TEST
app.get("/", (req, res) => {
  res.send("Backend OnlyLands jalan 🚀");
});

// API LIST TANAH
app.get("/lands", (req, res) => {
  res.json(lands);
});

// API DETAIL TANAH
app.get("/lands/:id", (req, res) => {
  const land = lands.find(
    (item) => item.id === parseInt(req.params.id)
  );

  if (!land) {
    return res.status(404).json({ message: "Tanah tidak ditemukan" });
  }

  res.json(land);
});

// API LOGIN SEDERHANA
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "penjual@gmail.com" && password === "222") {
    return res.json({
      token: "token-penjual",
      role: "PENJUAL",
    });
  }

  if (email === "pembeli@gmail.com" && password === "111") {
    return res.json({
      token: "token-pembeli",
      role: "PEMBELI",
    });
  }

  return res.status(401).json({
    message: "Email atau password salah",
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend berjalan di http://localhost:${PORT}`);
});