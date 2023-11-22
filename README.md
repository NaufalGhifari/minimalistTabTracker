# minimalistTabTracker
> [!NOTE]
> This project is ***still in progress***, some features may be missing or unstable.

A small node project to keep track of tabs i.e. who owes whom and how much.  
**This project aims to:**
1. Showcase a minimal full-stack capability: front-end, back-end, and database.
2. Showcase CRUD [database](https://github.com/NaufalGhifari/minimalistTabTracker#-database-sqlite) operations from a web application.

## 💡 To get the app running:
1. Make sure you have [Node.js](https://nodejs.org/en/) installed
2. Open a terminal in the cloned repo
3. type 'npm init', this will install all dependncies
4. Once done, type 'npm start'. This runs the application
5. Either click on the link in the terminal OR go to 'http://localhost:4000' on your browser
6. You are now using minmalistTabTracker!

## ⚒️ Node package dependencies:
- [express.js](https://expressjs.com/)
- [ejs](https://ejs.co/)
- [nodemon](https://nodemon.io/)
- [sqlite3](https://docs.python.org/3/library/sqlite3.html)

## 💽 Database: SQLite 
With [SQLite](https://www.sqlite.org/index.html), it is possible to setup a portable (serverless) relational database. This makes it easier to showcase the project as no additional setup/connection is required. While still allowing the ability to show how the database is setup and how queries are handled. 
- SQLite database location: src/db/mySQLiteDB.db
- To see database setup, see [src/db/db_init.js](src/db/db_init.js)

### Repetitive query handling
```
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
```

Author: Muhammad Naufal Al Ghifari
