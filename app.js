// requires and creates Express app instance
const express = require('express');
const app = express();

// Require the express routes defined in router.js
const routes = require('./router.js');
const compression = require('compression');
const helmet = require('helmet');


//localhost and port
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(compression()); //Compress all routes
app.use(helmet());

//directory of static files
app.use(express.static('public'));

//routes used
app.use(routes);

//accepting connections to specified port

app.listen(port, () => {
    //display server location to console
    console.log(`Server is listening at http://${hostname}:${port}/`);
})