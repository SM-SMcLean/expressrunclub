const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config({path: './config.env'});
const session = require('express-session');
const router = require('./routes/scheduleroutes');
const path = require('path');
//const PORT = 3000;

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'mysecretstring1234',
    resave: false,
    saveUninitialized: false
}));

app.use('/', router);
app.set('view engine', 'ejs');

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Express is listening on port ${process.env.PORT}`);
    }
});

