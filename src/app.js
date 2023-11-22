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

const query_display_all = `
    SELECT
        Users.name AS Debtor,
        Tabs.description AS TabDescription,
        Tabs.amount AS TabAmount
    FROM
        Users
    CROSS JOIN
        Tabs
    LEFT JOIN
        UserTabs ON Users.user_id = UserTabs.UserID AND Tabs.tab_id = UserTabs.TabID;
`;

// Execute the query
db.all(query_display_all, [], (err, rows) => {
    if (err) {
      console.error('Error executing query:', err.message);
      return;
    }
  
    // Display the results
    console.log('Results:');
    rows.forEach((row) => {
      console.log(`${row.Debtor} owes ${row.TabAmount} for ${row.TabDescription}`);
    });
  
    // Close the database connection
    db.close();
});


// homepage route
app.get('/', (req, res) => res.render('index.ejs')); // serve home page at '/' endpoint

app.listen(port, () => console.log(`App is running: http://localhost:${port}`));