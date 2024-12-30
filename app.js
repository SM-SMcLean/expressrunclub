const express = require('express');
const morgan = require('morgan');
const conn = require('./utils/dbconn');
const path = require('path');
const PORT = 3000;

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    const selectSQL = `SELECT * FROM runschedule`;
    conn.query(selectSQL, (err, rows) => {
        if (err) {
            throw err;
        } else {
            console.log(rows);
        }
    });

    res.render('index');
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Express is listening on port ${PORT}`);
    }
});