const express = require('express');
const morgan = require('morgan');
const router = require('./routes/scheduleroutes');
const path = require('path');
const PORT = 3000;

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));
app.use('/', router);
app.set('view engine', 'ejs');



app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Express is listening on port ${PORT}`);
    }
});