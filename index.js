const express = require('express');
const app = express();
const port = 3000;

const Fortune = require('./models/fortune')
// console.log(Fortune.randomJoke(Fortune.fortunes))

const axios = require('axios');
axios.get('http://yerkee.com/api/fortune')
    .then(res => {
        console.log(res.data.fortune);
        joke = res.data.fortune;
    })
    .catch(error => {
        console.log(error);
    });

app.get('/fortune', (req, res) => {
    res.send(`${joke}`)
    
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});