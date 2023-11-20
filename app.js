const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Welcome to minimalistTabTracker!'));

app.listen(port, () => console.log(`App is running: http://localhost:${port}`));