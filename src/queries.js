const sqlite3 = require('sqlite3').verbose();

// create a connection to the database
const db = new sqlite3.Database('./src/db/mySQLiteDB.db', (err) => {
    if (err) {
      console.error('Error connecting to database:', err.message);
    } else {
      console.log('Connected to SQLite database');
    }
});

function executeQuery(query, callback) {
    
    db.all(query, (err, rows) => {
      if (err) {
        console.error('Error executing query:', err.message);
        callback(err, null); // error first convention
        return;
      }
      callback(null, rows); 
    });
}

/*
    To avoid repetition, write a base query common to all 4 queries. 
    Then, each specific queries may add their part.
*/
const query_usertabs_base = `
    SELECT
    users.name AS Debtor,
    tabs.description AS TabDescription,
    tabs.amount AS TabAmount,
    usertabs.tabStatus as status
    FROM usertabs
    INNER JOIN users ON UserTabs.UserID = Users.user_id
    INNER JOIN tabs ON UserTabs.tabID = Tabs.tab_id
`;
const query_display_all = `${query_usertabs_base};`;
const query_display_paid = `${query_usertabs_base} WHERE status = 1;`;
const query_display_unpaid = `${query_usertabs_base} WHERE status = 0;`;

module.exports = {
    executeQuery,
    query_display_all,
    query_display_unpaid,
    query_display_paid,
    
  };