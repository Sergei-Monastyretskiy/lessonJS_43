const express = require('express');
const router = express.Router();
const usersRouter = require('./users');
const articlesRouter = require('./articles');

// Головний маршрут
router.get('/', (req, res) => {
    res.render('index', { title: 'Express MVC Server - Головна сторінка' });
});

// Підключення маршрутів користувачів
router.use('/users', usersRouter);

// Підключення маршрутів статей
router.use('/articles', articlesRouter);

module.exports = router;
