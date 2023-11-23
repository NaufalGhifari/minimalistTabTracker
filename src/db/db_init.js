/*
    db_init.js
    ================================================================= 
    This is an SQLite database initialisation file.
    Unless you need to modify or re-initialise the database, please disregard. 
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

    // initialise tables
    db.serialize(() => {
        db.run(`
        CREATE TABLE IF NOT EXISTS users (
            user_id INTEGER PRIMARY KEY,
            name TEXT
        )`),
        db.run(`
        CREATE TABLE IF NOT EXISTS tabs (
            tab_id INTEGER PRIMARY KEY,
            amount INTEGER,
            description TEXT
        )`),
        db.run(`
        CREATE TABLE IF NOT EXISTS usertabs (
            usertabs_id INTEGER PRIMARY KEY,
            userID INTEGER,
            tabID INTEGER,
            tabStatus BOOLEAN DEFAULT 0,
            FOREIGN KEY (userID) REFERENCES users(user_id),
            FOREIGN KEY (tabID) REFERENCES tabs(tab_id)
        )`)

    });

    // insert some data
    db.serialize(() => {
        // user data
        const insert_user = db.prepare('INSERT INTO users (name) VALUES (?)');
        insert_user.run('John');
        insert_user.run('Andrew');
        insert_user.run('Dimitry');
        insert_user.run('Yuri');
        insert_user.run('Carl');
        insert_user.finalize();

        // tabs data
        const insert_tab = db.prepare('INSERT INTO tabs (amount, description) VALUES (?, ?)');
        insert_tab.run('200', 'coffee');
        insert_tab.run('1000', 'breakfast');
        insert_tab.run('350', 'snacks');
        insert_tab.finalize();

        // usertabs data
        const insert_usertabs = db.prepare('INSERT INTO usertabs (userID, tabID, tabStatus) VALUES (?, ?, ?)');
        insert_usertabs.run('1', '1', 0);
        insert_usertabs.run('1', '2', 0);
        insert_usertabs.run('3', '3', 0);
        insert_usertabs.run('2', '1', 1);
        insert_usertabs.run('2', '2', 1);
        insert_usertabs.run('4', '3', 1);
        insert_usertabs.finalize();
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