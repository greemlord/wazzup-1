const express = require('express');
const app = express();

const data = require('./generated.json');

app.get('/', ((req, res) => {
    res.status(200).json(data);
}))

app.listen(3000, (err) => {
    console.log(err || "Server started on localhost:3000");
})