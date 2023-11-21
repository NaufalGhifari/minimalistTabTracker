const express = require('express');
const path = require('path'); // required to find the path of a file

const app = express();
const port = 4000;

// VIEW ENGINE ==================================================================================================
/* 
    define a view engine: Embedded JavaScript (EJS)
    with ejs, we can make templates to fill w/ data from database 
*/
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Specify the views folder location
// ==============================================================================================================

// ROUTES =======================================================================================================
app.get('/', (req, res) => res.render('index.ejs')); // serve home page at '/' endpoint

// ==============================================================================================================

app.listen(port, () => console.log(`App is running: http://localhost:${port}`));