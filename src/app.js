const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

// Налаштування шаблонізаторів
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug'); // PUG як основний шаблонізатор

// Реєстрація EJS як додаткового шаблонізатора
app.engine('ejs', require('ejs').renderFile);

// Статичні файли (CSS, JS, зображення)
app.use(express.static(path.join(__dirname, '../public')));

// Middleware для обробки JSON
app.use(express.json());

// Middleware для обробки URL-encoded даних
app.use(express.urlencoded({ extended: true }));

// Підключення маршрутів
app.use('/', routes);

module.exports = app;
