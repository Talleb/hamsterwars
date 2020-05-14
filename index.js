const express = require('express');
const app = express();

app.use(express.json());


app.use('/', express.static('public'))
app.use('/assets', express.static('hamsters'))

const hamstersRoute = require('./routes/hamsters.js');
const chartsRoute = require('./routes/charts.js');
const gamesRoute = require('./routes/games.js');
const statsRoute = require('./routes/stats.js');


app.use('/hamsters', hamstersRoute);
app.use('/charts', chartsRoute);
app.use('/games', gamesRoute);
app.use('/stats', statsRoute);


app.listen(3000, () => {
    console.log('server är igång')
})