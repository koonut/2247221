const mysql = require('mysql2');
const express = require('express');
var app = express();
const parser = require('body-parser');
app.use(parser.json());
var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'koonut1234',
        database: 'lab'
    });
connection.connect((err) => {
    if (!err)
        console.log('DB Connected...');
    else
        console.log('Error');
})
app.listen(5700, () => console.log('Server Startred...'));
app.get('/item', (req, res) => {
    connection.query('SELECT *FROM item', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log("error");
    })
})
app.get('/item/:id', (req, res) => {
    connection.query('SELECT *FROM item WHERE it_id=?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log("error");
    })
})

app.get('/add', (req, res) => {
    var post = { Name: 'cat shirt', Discription: 'have 3 color', Quantity: 1000, S_id: 4701 };
    var sql = 'INSERT INTO item SET ?';
    var query = connection.query(sql, post, (err, result) => {
        if (err) throw error;
        res.send("Inserted Rows.....")
    });
});
app.get('/update/:id', (req, res) => {
    var name1 = 'rubber ball'
    var sql = `UPDATE item SET name='${name1}' WHERE it_id=${req.params.id}`;
    var query = connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send("Updated the Rows.....")
    });
});
app.get('/delete/:id', (req, res) => {
    var sql = `DELETE FROM item WHERE it_id=${req.params.id}`;
    var query = connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send("Deleted the Rows.....")
    });
});