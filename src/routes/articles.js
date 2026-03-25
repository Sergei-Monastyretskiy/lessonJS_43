const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

// GET /articles - Отримати всі статті
router.get('/', articlesController.getArticles);

// POST /articles - Створити нову статтю
router.post('/', articlesController.createArticle);

// GET /articles/:articleId - Отримати статтю за ID
router.get('/:articleId', articlesController.getArticleById);

// PUT /articles/:articleId - Оновити статтю за ID
router.put('/:articleId', articlesController.updateArticle);

// DELETE /articles/:articleId - Видалити статтю за ID
router.delete('/:articleId', articlesController.deleteArticle);

module.exports = router;
