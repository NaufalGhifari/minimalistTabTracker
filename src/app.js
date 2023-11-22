const express = require('express');
const path = require('path'); // required to find the path of a file
const sqlite3 = require('sqlite3').verbose(); // verbose() to show errors

const app = express();
const port = 4000;

// VIEW ENGINE: EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views')); // Specify the views folder location

// create a connection to the database
const db = new sqlite3.Database('./src/db/mySQLiteDB.db', (err) => {
    if (err) {
      console.error('Error connecting to database:', err.message);
    } else {
      console.log('Connected to SQLite database');
    }
});

// Query all users from the users table
db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.error('Error querying users:', err.message);
    } else {
      console.log('All users:', rows);
    }
});

// homepage route
app.get('/', (req, res) => res.render('index.ejs')); // serve home page at '/' endpoint

app.listen(port, () => console.log(`App is running: http://localhost:${port}`));