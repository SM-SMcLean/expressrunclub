const conn = require('./../utils/dbconn');

exports.getSchedule = (req, res) => {

    const selectSQL = `SELECT * FROM runschedule`;
    conn.query(selectSQL, (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.render('index', { schedule: rows });
        }
    });
};

exports.getAddNewRun = (req, res) => {
    res.render('addschedule');
};


exports.postNewRun = (req, res) => {
    const { new_details, new_date } = req.body;
    const vals = [new_details, new_date];

    const insertSQL = `INSERT INTO runschedule (items, mydate) VALUES (?, ?)`;

    conn.query(insertSQL, vals, (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.redirect('/');
        }
    });

};

exports.selectRun = (req, res) => {
    const { id } = req.params;

    const selectSQL = `SELECT * FROM runschedule WHERE id = ${id}`;
    conn.query(selectSQL, (err, rows) => {
        if (err) {
            throw err;
        } else {
            console.log(rows);
            res.render('editschedule', { details: rows });
        }
    });
};

exports.updateRun = (req, res) => {
    console.log("req.params", req.params);
    console.log("req.body", req.body);


    const run_id = req.params.id;
    const { run_details, run_date } = req.body;

    // Log the received data
    console.log('Received data:', { run_details, run_date });


    const vals = [run_details, run_date, run_id];
    console.log(vals);

    const updateSQL = 'UPDATE runschedule SET items = ?, mydate = ? WHERE id = ?';

    conn.query(updateSQL, vals, (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.redirect('/');
        }
    });
};

exports.deleteRun = (req, res) => {
    const run_id = req.params.id;
    const deleteSQL = `DELETE FROM runschedule WHERE id = ${run_id}`; conn.query(deleteSQL, (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.redirect('/');
        }
    });
};