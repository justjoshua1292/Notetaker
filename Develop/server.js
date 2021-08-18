const express = require('express');
const fs = require('fs');
const path = require('path')

// initialize an express application
const app = express();

// middleware
app.use(express.static('public'));


// routes

// setting up API routes
app.get('/api/notes', (req, res) => {
   fs.readFile('./db/db.json', 'utf8', (err, data) => {
        res.json(JSON.parse(data))
   })
})

// setting up HTML routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
})


app.listen(3001, () => {
    console.log('App is now listening to PORT 3001!')
})


/*

    FRONT END           ----->    BACK END
    requests data or file        gives or responds data or files

    browser
    www.facebook.com/    ---->    "/" will return the homepage
    www.facebook.com/login  -->   "/login" will return the login page


*/