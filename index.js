const express = require('express');
const app = express();
const port = 3000;

const Fortune = require('./models/fortune');
const jokeUrl = 'http://yerkee.com/api/fortune';
// console.log(Fortune.randomJoke(Fortune.fortunes))


app.get('/fortune', (req, res) => {
    const axios = require('axios');
    axios.get(jokeUrl)
        .then(response => {
            console.log(response.data.fortune);
            joke = response.data.fortune;
            res.send(`${joke}`)
        })
        .catch(error => {
            console.log(error);
        });    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});