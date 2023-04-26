
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/notes', (req, res) => {
    res.sendFile(path.join(_dirname, 'public/notes.html'))
})


app.post('/api/notes', (req, res) => {
    //from line 36 on index.

    //*need to have fs readfile, parse it out then push the new note.  use req.body for this. */
    //fs.writeFile
    //send back a response.  

}


//res.json(noteStorage) read from db.json using fs readfile, parse and send


app.listen









app.delete('/api/notes', (req, res) => {

}