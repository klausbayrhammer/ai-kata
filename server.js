// create a webserver with express
// create a route for the root
// listen on port 3000

const express = require('express');

// Create an express app
const app = express();

// Create a route for the root
app.get('/', (req, res) => {
    res.send('Hello World!');
});


//add a route to create a new user with email and first name in the http body

app.post('/users', (req, res) => {
    res.send('Creating a new user');
    // extract first name and email from the http request body
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Listening on port 3000');
});

// export the app for testing purposes
module.exports = function (port) {
    app.listen(port, () => {
        console.log('Listening on port 3000');
    });
}

