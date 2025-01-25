const conn = require('./../utils/dbconn');

exports.getSchedule = (req, res) => {
    var userinfo = {};
    const { isloggedin, userid } = req.session;
    console.log(`User logged in: ${isloggedin}, ${userid}`);

    if (isloggedin) {

        const getUserSQL = `SELECT runschedule_users.name, runschedule_usertypes.role
                            FROM runschedule_users
                            INNER JOIN runschedule_usertypes ON 
                            runschedule_users.type_id = runschedule_usertypes.id 
                            WHERE runschedule_users.id = '${userid}'`;

        conn.query(getUserSQL, (err, rows) => {
            if (err) throw err;

            console.log(rows);
            const username = rows[0].name;
            const userrole = rows[0].role;

            const session = req.session;
            session.name = username;
            session.role = userrole;
            console.log(session);

            userinfo = { name: username, role: userrole };
            console.log(userinfo);
        });
    }

    const selectSQL = `SELECT * FROM runschedule`;
    conn.query(selectSQL, (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.render('index', { schedule: rows, loggedin: isloggedin, user: userinfo });
        }
    });
};

exports.getAddNewRun = (req, res) => {
    const { isloggedin } = req.session;
    console.log('User logged in: ${isloggedin}');
    if (isloggedin) {
        res.render('addschedule');
    } else {
        res.redirect('/');
    }
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

    const { isloggedin } = req.session;
    console.log(`User logged in: ${isloggedin}`);
    if (isloggedin) {

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
    } else {
        res.redirect('/');
    }
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
    const deleteSQL = `DELETE FROM runschedule WHERE id = ${run_id}`;
    conn.query(deleteSQL, (err, rows) => {
        if (err) {
            throw err;
        } else {
            res.redirect('/');
        }
    });
};

exports.getLogin = (req, res) => {
    res.render('login');
};

exports.postLogin = (req, res) => {
    const { username, userpass } = req.body; 
    const vals = [ username, userpass ];
    console.log(vals);

    const checkuserSQL = `SELECT id FROM runschedule_users WHERE runschedule_users.name = '${username}' 
    AND runschedule_users.password = '${userpass} '`;

    conn.query(checkuserSQL, vals, (err, rows) => {
        if (err) throw err;

        const numrows = rows.length; 
        console.log(numrows);
        if (numrows > 0) {
            console.log(rows);
            const session = req.session;
            session.isloggedin = true;
            session.userid = rows[0].id;
            console.log(session);
            res.redirect('/');
        } else {
            res.redirect('/');
        }
    });
};

exports.getLogout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
};