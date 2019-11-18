const express = require('express');
const hbs = require('hbs');
const app = express();

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js/popper.js', express.static(__dirname + '/node_modules/popper.js/dist/umd'));

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