const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mysql=require('mysql');

const app= express();
const PORT=4000;

app.use(cors());
app.use(bodyParser.json());

const db=mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"",
    database:"project"
})


db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM inactiondata WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) {
      res.json({ success: false, error: "DB Error" });
    } else if (results.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
