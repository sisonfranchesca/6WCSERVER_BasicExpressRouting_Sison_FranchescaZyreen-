// Sison, Franchesca Zyreen   |   WD - 303
// 6WCSERVER - Midterm Activity - Basic Express Routing Using GET

const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public'))); // static files sa public folder

app.get('/', (req, res) => { 
    console.log('Rendering home.html');
    res.sendFile(path.join(__dirname, 'public', 'pages', 'home.html'));
});

app.get('/menu', (req, res) => {
    console.log('Rendering menu.html');
    res.sendFile(path.join(__dirname, 'public', 'pages', 'menu.html'));
});

app.get('/about', (req, res) => {
    console.log('Rendering about.html');
    res.sendFile(path.join(__dirname, 'public', 'pages', 'about.html'));
});

app.get('/contact', (req, res) => {
    console.log('Rendering contact.html');
    res.sendFile(path.join(__dirname, 'public', 'pages', 'contact.html'));
});

app.get('/get_info', (req, res) => { // para may lalabas pag nag send message
    console.log('Successfully got the info using GET!');
    res.json({
        system: "The infos below using GET!",
        infos: req.query
    });
});

app.get('/menu/:food', (req, res) => { // added use of req.param (kinda like food/drink suggestions)
    const foodName = req.params.food;
    console.log(`Suggested menu: ${foodName}`);
    res.send(`<h1>Suggested menu: ${foodName}</h1>`);
});

app.use((req, res) => {
    console.log(`404 Page Not Found: ${req.originalUrl}`);
    res.status(404).send('<h1>404 - Page Not Found!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
