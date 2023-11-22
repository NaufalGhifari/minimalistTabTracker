const express = require('express');
const path = require('path'); // required to find the path of a file
const queries = require('./queries');

const app = express();
const port = 4000;

// VIEW ENGINE: EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); // Specify the views folder location

// serve home page at '/' endpoint
app.get('/', (req, res) =>{
    queries.executeQuery(queries.query_display_unpaid, (err, rows) => {
        if(err){
            res.status(500).send('Internal server error: ', err);
            return;
        }

        // pass the result to the page
        res.render('../views/index', {usertabs: rows, category: "Unpaid"});
    });
});

app.get('/paid', (req, res) =>{
    queries.executeQuery(queries.query_display_paid, (err, rows) => {
        if(err){
            res.status(500).send('Internal server error: ', err);
            return;
        }

        // pass the result to the page
        res.render('../views/index', {usertabs: rows, category: "Paid"});
    });
});

app.get('/all', (req, res) =>{
    queries.executeQuery(queries.query_display_all, (err, rows) => {
        if(err){
            res.status(500).send('Internal server error: ', err);
            return;
        }

        // pass the result to the page
        res.render('../views/index', {usertabs: rows, category: "All"});
    });
});

app.get('/newTabForm', (req, res) =>{
    res.render('../views/newTabForm');
});


app.listen(port, () => console.log(`App is running: http://localhost:${port}`));

