const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require("mysql");

const app = express();
const PORT = 4004;

app.use(cors());
app.use(bodyParser.json());

app.post('/leave', (req, res) => {
    const { id, name, fromdate,todate,reason } = req.body;

    const connect = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "project",
    });

    const values = [id, name,  fromdate,todate,reason ];
    const sql = `INSERT INTO Leavee(id, name,   fromdate,todate,reason ) VALUES (?, ?, ?, ?, ?)`;

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