const express = require('express');
const conn = require('../utils/dbconn');
const router = express.Router();

router.get('/', (req, res) => {

    const selectSQL = `SELECT * FROM runschedule`;
    conn.query(selectSQL, (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.render('index', {schedule: rows});
        }
    });
});

router.get('/new', (req, res) => {
    res.render('addschedule');
});

router.post('/new', (req, res) => {
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

module.exports = router;