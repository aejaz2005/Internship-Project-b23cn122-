const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mysql=require('mysql');

const app= express();
const PORT=4001;

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

app.get("/eliminations", (req, res) => {
  db.query("SELECT Date, Location, Eliminated, Operation, Officer, Remarks FROM eliminationsreport2", (err, result) => {
    if (err) {
      return res.status(500).send("DB Error");
    }
    res.json(result);
  });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});