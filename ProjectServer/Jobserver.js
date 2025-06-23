const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'project'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to database');
});

app.get('/JobSearch', (req, res) => {
  const { keyword, location, rank } = req.query;

  if (!location || !rank) {
    return res.status(400).send('Location and rank are required');
  }

  let sql = 'SELECT * FROM jobsavailable WHERE Location LIKE ? AND RequiredVeteranRank LIKE ?';
  const values = [`%${location}%`, `%${rank}%`];

  if (keyword) {
    sql += ' AND JobTitle LIKE ?';
    values.push(`%${keyword}%`);
  }

  db.query(sql, values, (err, rows) => {
    if (err) {
      res.status(500).send('Query error');
      return;
    }
    res.json(rows);
  });
});

app.get('/JobTable', (req, res) => {
  db.query('SELECT * FROM jobsavailable', (err, rows) => {
    if (err) {
      res.status(500).send('Error fetching jobs');
      return;
    }
    res.json(rows);
  });
});

app.listen(4005, () => {
  console.log('Server running on port 4005');
});
