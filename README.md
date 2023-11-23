# minimalistTabTracker
A small node project to keep track of tabs like in cafés, bistro, etc.  
> [!NOTE]
> This project is ***still in progress***, some features may be missing or unstable.

**This project aims to:**
1. Showcase a minimal full-stack capability: front-end, middleware, and database.
2. Showcase CRUD [database](https://github.com/NaufalGhifari/minimalistTabTracker#-database-sqlite) operations from a web application.

## 💡 To get the app running:
1. Make sure you have [Node.js](https://nodejs.org/en/) installed
2. Open a terminal in the cloned repo
3. type ```npm install```, this will install all dependncies
4. Once done, type ```npm start```. This runs the application
5. Either click on the link in the terminal OR go to 'http://localhost:4000' on your browser
6. You are now using minmalistTabTracker!

## ⚒️ Node package dependencies:
- [express.js](https://expressjs.com/)
- [ejs](https://ejs.co/)
- [nodemon](https://nodemon.io/)
- [sqlite3](https://docs.python.org/3/library/sqlite3.html)
- [jest](https://jestjs.io/)

## 💽 Database: SQLite 
With [SQLite](https://www.sqlite.org/index.html), it is possible to setup a portable (serverless) relational database. This makes it easier to showcase the project as no additional setup/connection is required. While still allowing the ability to show how the database is setup and how queries are handled. 
- SQLite database location: src/db/mySQLiteDB.db
- To see database setup in detail, see [src/db/db_init.js](src/db/db_init.js)

### Tables
To help visualise the database structure, below are table creation queries:
```
CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY,
    name TEXT);

CREATE TABLE IF NOT EXISTS tabs (
    tab_id INTEGER PRIMARY KEY,
    amount INTEGER,
    description TEXT);

CREATE TABLE IF NOT EXISTS usertabs (
    usertabs_id INTEGER PRIMARY KEY,
    userID INTEGER,
    tabID INTEGER,
    tabStatus BOOLEAN DEFAULT 0,
    FOREIGN KEY (userID) REFERENCES users(user_id),
    FOREIGN KEY (tabID) REFERENCES tabss(tab_id));
```

Author: Muhammad Naufal Al Ghifari
