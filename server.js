const express = require('express');
const hbs = require('hbs');
const app = express();

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        name: 'world'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/data', (req, res) => {
    let result = {
        nombre: 'José Manuel',
        edad: 34,
        url: req.url
    };

    res.send(result);
});

app.listen(process.env.PORT || 3000);