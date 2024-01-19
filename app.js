const express = require('express');
const mysql = require('mysql');
const app = express();

app.set('view engine', 'ejs'); 

// MySQL bağlantı bilgileri
const db = mysql.createConnection({
  host: 'localhost',
  user: 'kullanici_adiniz',
  password: 'sifreniz',
  database: 'Coffee'
});

// MySQL bağlantısını açma
db.connect(err => {
  if (err) {
    console.error('MySQL bağlantısı başarısız: ' + err.stack);
    return;
  }
  console.log('MySQL bağlantısı başarılı: ' + db.threadId);
});

// HTML form sayfasını gösterme
app.get('/add-coffee', (req, res) => {
  res.render('add-coffee');
});


app.post('/add-coffee', (req, res) => {
  const { coffeeType, smallPrice, mediumPrice, largePrice } = req.body;

  const sql = 'INSERT INTO coffees (name, smallPrice, mediumPrice, largePrice) VALUES (?, ?, ?, ?)';
  const values = [coffeeType, smallPrice, mediumPrice, largePrice];

  db.query(sql, values, (err, result) => {
    if (err) throw err;
    console.log('Coffee added to database:', result);
    res.redirect('/add-coffee'); // Başka bir sayfaya yönlendirme
  });
});

// Sunucuyu başlatma
const port = 3000;
app.listen(port, () => {
  console.log(`Server running: http://localhost:${port}`);
});
