const express = require('express');
const morgan = require('morgan');
const PORT = 3000;

const app = express();

app.use(morgan('tiny'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express Runclub!</h1>');
});

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Express is listening on port ${PORT}`);
    }
});