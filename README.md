# NOTE-TAKER

## Example

![pic](./public/assets/Screenshot%202023-04-27%20at%204.59.49%20PM.png)

## Description

This project enables the user to create and save notes. The Notes application uses Express and JSON to write, save and delete notes the user entered. This application will be deployed to Heroku.

## Technology Used and Credit

-   [Express]('https://expressjs.com/')
-   [NodeJS]('https://nodejs.org/en')
-   [Heroku]('https://devcenter.heroku.com/')

## Installations

-   NodeJS
-   Express
-   Heroku

## Code Example

This is a snippet of code using Express to retrieve parsed JSON data.

```app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);

        } else {
            const parseData = JSON.parse(data);
            res.send(parseData);
        }
    })})

```

## Learning Points

This was a great opportunity to have more practice using Express and understanding the relationship between the client and server.
