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

const query_usertabs = `
    SELECT
    users.name AS Debtor,
    tabs.description AS TabDescription,
    tabs.amount AS TabAmount,
    usertabs.tabStatus as status
    FROM usertabs
    INNER JOIN users ON UserTabs.UserID = Users.user_id
    INNER JOIN tabs ON UserTabs.tabID = Tabs.tab_id
`;
const query_display_all = `${query_usertabs};`;
const query_display_paid = `${query_usertabs} WHERE status = 1;`;
const query_display_unpaid = `${query_usertabs} WHERE status = 0;`;

// serve home page at '/' endpoint
app.get('/', (req, res) =>{
    
    db.all(query_display_all, [], (err, rows) => { // Execute the query
        if (err) {
            console.error('Error executing query:', err.message);
            return;
        }

        // pass the result to the page
        res.render('../views/index', {usertabs: rows});

        
    });
    
    // Close the database connection
    db.close();
});



app.listen(port, () => console.log(`App is running: http://localhost:${port}`));

