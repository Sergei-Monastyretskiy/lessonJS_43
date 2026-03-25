const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// GET /users - Отримати всіх користувачів
router.get('/', usersController.getUsers);

// POST /users - Створити нового користувача
router.post('/', usersController.createUser);

// GET /users/:userId - Отримати користувача за ID
router.get('/:userId', usersController.getUserById);

// PUT /users/:userId - Оновити користувача за ID
router.put('/:userId', usersController.updateUser);

// DELETE /users/:userId - Видалити користувача за ID
router.delete('/:userId', usersController.deleteUser);

module.exports = router;
