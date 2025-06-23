const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require("mysql");

const app = express();
const PORT = 4006;

app.use(cors());
app.use(bodyParser.json());

app.post('/Retirement', (req, res) => {
    const { id, name,joindate, Retiredate,reason,rank, unit,service } = req.body;

    const connect = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "project",
    });

    const values = [id, name,rank,joindate, Retiredate,reason, unit,service];
    const sql = `INSERT INTO Retire(id, name, rank, joindate, retiredate, reason, unit,service) VALUES (?, ?, ?, ?, ?, ?, ?,?)`;

    connect.query(sql, values, (err, result) => {
        if (err) {
            console.error("Database insertion failed:", err);
            res.status(500).send("Error inserting data");
        } else {
            console.log("Insertion executed at DATABASE");
            res.send("Data received successfully");
        }
        connect.end();
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});