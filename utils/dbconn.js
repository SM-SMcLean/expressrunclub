const mysql = require('mysql2');
   const db = mysql.createConnection({
       host: 'localhost',
       user: 'root',
       password: 'root',
       database: 'run_schedule',
       port: '8889'
   });
   db.connect((err) => {
       if (err) {
throw err; }
console.log(`Database connection successful!`); });
   module.exports = db;