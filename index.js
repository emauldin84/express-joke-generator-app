const express = require('express');
const app = express();
const port = 3000;

const Fortune = require('./models/fortune')
console.log(Fortune.randomJoke(Fortune.fortunes))

app.get('/fortune', (req, res) => {
    res.send(`${Fortune.randomJoke(Fortune.fortunes)}`)
    
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});