const express = require('express');
const app = express();

app.use(express.json());


app.use('/', express.static('public'))
app.use('/assets', express.static('hamsters'))

const hamstersRoute = require('./routes/hamsters.js');


app.use('/hamsters', hamstersRoute);


app.listen(3000, () => {
    console.log('server är igång')
})