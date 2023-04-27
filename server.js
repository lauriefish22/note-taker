
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/', function (req, res) {
    res.sendFile(path.join(_dirname, "/public/index.html"))
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(_dirname, 'public/notes.html'))
});




app.post('/api/notes', (req, res) => {

    const { title, text } = req.body;

    if (title && text) {

        let newNote = req.body;

        console.log(newNote);
        fs.writeFile('db/db.json', JSON.stringify(parsedNotes, null, 4), (Err) =>
            Err ? console.error(Err) : res.send(newNote)
        )

    };














