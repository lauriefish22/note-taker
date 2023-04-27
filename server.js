
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
// const parse = require('./db/db.json');
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

app.get('api/notes', (req, res) => {


});


app.post('/api/notes', (req, res) => {

    const { title, text } = req.body;
    let newNote;
    if (title && text) {

        newNote = {
            title,
            text,
            id: uuidv4()
        }
    };
    fs.readFile('./db/.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);

        } else {
            const parseData = JSON.parse(data);
            parseData.push(newNote);

            fs.writeFile('./db/db.json', JSON.stringify(parseData, null, 4), (Err) =>
                Err ? console.error(Err) :
                    console.log('test')
                // res.json(parse)
            );
        }
    }
    );

})
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);