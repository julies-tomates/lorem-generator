const loremIpsum = require("./generator.js");
const querystring = require("querystring");
const fs = require("fs");

// create express router object
const express = require("express");
const router = express.Router();

//route that serves index.html
router.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    //capture index.html contents in a variable
    let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
    //send response to client with the index.html file
    response.write(fileContents);
    response.end();
})

//route that generates ipsum text and reloads a modified index.html file
router.post('/', (request, response) => {
    request.on('data', function(inputValue) {
        //convert POST data into readable string
        let query = inputValue.toString(); //ex. numberOfParagraphs = 3

        let numberOfParagraphs = querystring.parse(query)
        //console.log(numberOfParagraphs.numberOfParagraphs);

        let loremIpsumText = loremIpsum.getAllParagraphs(parseInt(numberOfParagraphs.numberOfParagraphs));
    

        let fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
        
        fileContents = fileContents.replace("<div class='placeholder-div'></div>",loremIpsumText);

        
        response.setHeader('Content-Type', 'text/html');
        
        // Send a response to the client with the modified index.html file
        response.write(fileContents);
        response.end();

    })
})


module.exports = router;