
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;
const uuid = require('uuid');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routing to the HTML page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});
// Routing to the notes page
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});
// Grabbing the data and parsing it
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);

        } else {
            const parseData = JSON.parse(data);
            res.send(parseData);
        }
    }
    );
});
// adding new input to an array of existing notes
app.post('/api/notes', (req, res) => {

    const { title, text } = req.body;
    let newNote;
    if (title && text) {
        newNote = {
            title,
            text,
            id: uuid.v4()
        }
    };
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);

        } else {
            const parseData = JSON.parse(data);
            parseData.push(newNote);

            fs.writeFile('./db/db.json', JSON.stringify(parseData, null, 4), (Err) => {
                Err ? console.error(Err) :
                    console.log('test')
                res.send('note');
            });
        }
    }
    );

})
// added ability to delete notes
app.delete('/api/notes/:id', (req, res) => {
    let id = req.params.id
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            let notes = JSON.parse(data);
            let thisNote = notes.filter((note) => note.id !== id);


            fs.writeFile('./db/db.json', JSON.stringify(thisNote), (Err) => {
                Err ? console.error(Err) :

                    res.send({ msg: 'deleted' });
            });
        }
    });
});
;

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
})