/*
    db_init.js
    ================================================================= 
    This is an SQLite database initialisation file.
    Unless you need to initialise a database, please disregard. 
    Otherwise, make sure you initialise the new database correctly 
    to avoid overwriting an existing one.
    =================================================================
*/


const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const dbFilePath = './mySQLiteDB.db';

// check if db is not initialised
if(!fs.existsSync(dbFilePath)){
    
    // create and save new poratble db
    const db = new sqlite3.Database(dbFilePath);

    // create a table
    db.serialize(() => {
        db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER AUTO INCREMENT PRIMARY KEY,
            name TEXT
        )`)
    });

    // insert some names
    db.serialize(() => {
        const stmt = db.prepare('INSERT INTO users (name) VALUES (?)');
        stmt.run('John');
        stmt.run('Andrew');
        stmt.run('Dimitry');
        stmt.run('Yuri');
        stmt.run('Carl');
        stmt.finalize();
    });

    // close connection
    db.close((err) => {
        if (err) {
        console.error('Error closing db connection: ', err.message);
        } 
        else {
        console.log('db initialization success!');
        }
    });
}
else{
    console.log(`${dbFilePath} already initialised.`)
}