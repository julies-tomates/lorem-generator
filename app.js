// requires and creates Express app instance
const express = require('express');
const app = express();

// Require the express routes defined in router.js
const routes = require('./router');

//localhost and port
const hostname = '127.0.0.1';
const port = 3000;

//directory of static files
app.use(express.static('public'));

//routes used
app.use(routes);

//accepting connections to specified port
app.listen(port, () => {
    //display server location to console
    console.log(`Server is listening at http://${hostname}:${port}/`);
})