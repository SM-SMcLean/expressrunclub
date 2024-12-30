const express = require('express');
const morgan = require('morgan');
const conn = require('./utils/dbconn');
const path = require('path');
const PORT = 3000;

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    const selectSQL = `SELECT * FROM runschedule`;
    conn.query(selectSQL, (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.render('index', {schedule: rows});
        }
    });
});

app.get('/new', (req, res) => {
    res.render('addschedule');
});

app.post('/new', (req, res) => {
    const {new_details, new_date} = req.body;
    const vals = [new_details, new_date];

    const insertSQL = `INSERT INTO runschedule (items, mydate) VALUES (?, ?)`;

    conn.query(insertSQL, vals, (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.redirect('/');
        }
    });

});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Express is listening on port ${PORT}`);
    }
});