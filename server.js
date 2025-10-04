<<<<<<< HEAD
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// semua file statis di folder project (HTML, CSS, JS, gambar)
app.use(express.static(path.join(__dirname)));

// route default → index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
// tekan Ctrl+C untuk menghentikan server

/* View modal */

=======
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// semua file statis di folder project (HTML, CSS, JS, gambar)
app.use(express.static(path.join(__dirname)));

// route default → index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
// tekan Ctrl+C untuk menghentikan server

/* View modal */

>>>>>>> 0a6d2562cb86ef620b7c248aa5e374a0d0aebad3
