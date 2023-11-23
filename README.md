# minimalistTabTracker

A small node project to keep track of tabs like in cafés, bistro, etc.  
> [!NOTE]
> This project is ***still in progress***, some features may be missing or unstable.

**This project aims to:**

1. Showcase a minimal full-stack capability: front-end, middleware, and database.
2. Showcase CRUD [database](https://github.com/NaufalGhifari/minimalistTabTracker#-database-sqlite) operations from a web application.

## 💡 To get the app running

1. Make sure you have [Node.js](https://nodejs.org/en/) installed
2. Open a terminal in the cloned repo
3. type ```npm install```, this will install all dependncies
4. Once done, type ```npm start```. This runs the application
5. Either click on the link in the terminal OR go to '<http://localhost:4000>' on your browser
6. You are now using minmalistTabTracker!

## ⚒️ Node package dependencies

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
<<<<<<< Updated upstream
=======

Rules:

- One person may have multiple tabs
- One tab may belong to multiple people

We have a many-to-many relationship and this must be broken down into multiple one to many relationship to abide by the rules of relational database system by making use of a junction table:  

![image](https://github.com/NaufalGhifari/minimalistTabTracker/assets/85378958/6aef68c6-37d2-4e04-9968-f5557839de5f)

>>>>>>> Stashed changes
To help visualise the database structure, below are table creation queries:

```SQL
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

## TO-DO

- [x] Initialise Node project
- [x] Setup portable database
- [x] Create tables: users, tabs, & usertabs
- [x] Functionality: display tabs based on its status: unpaid, paid, & all
- [ ] Functionality: create new tab
- [ ] Functionality: update tab
  - [ ] Functionality: Set tab to paid
- [ ] Functionality: remove tab
- [ ] Add CSS (to make it bearable to look at) (optional)

Author: Muhammad Naufal Al Ghifari
