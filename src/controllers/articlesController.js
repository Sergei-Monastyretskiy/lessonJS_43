// Контролер для управління статтями

// Тестові дані статей
const articles = [
    {
        id: 1,
        title: 'Вступ до Node.js',
        author: 'Іван Петренко',
        content: 'Node.js - це середовище виконання JavaScript, побудоване на движку Chrome V8. Воно дозволяє виконувати JavaScript код на серверній стороні.',
        date: '2026-03-15',
        views: 1250
    },
    {
        id: 2,
        title: 'Express.js для початківців',
        author: 'Марія Коваленко',
        content: 'Express.js - це мінімалістичний та гнучкий веб-фреймворк для Node.js, який надає потужний набір функцій для веб та мобільних додатків.',
        date: '2026-03-18',
        views: 980
    },
    {
        id: 3,
        title: 'Шаблонізатори в Node.js',
        author: 'Олександр Шевченко',
        content: 'Шаблонізатори дозволяють динамічно генерувати HTML на стороні сервера. Популярні варіанти включають PUG, EJS, Handlebars.',
        date: '2026-03-20',
        views: 750
    },
    {
        id: 4,
        title: 'REST API з Express',
        author: 'Наталія Сидоренко',
        content: 'REST API - це архітектурний стиль для створення веб-сервісів. Express.js робить створення REST API простим та інтуїтивним.',
        date: '2026-03-22',
        views: 1450
    },
    {
        id: 5,
        title: 'Middleware в Express',
        author: 'Дмитро Мельник',
        content: 'Middleware функції мають доступ до об\'єктів запиту та відповіді і можуть виконувати різні операції в циклі запит-відповідь.',
        date: '2026-03-24',
        views: 620
    }
];

// GET /articles - Отримати всі статті
const getArticles = (req, res) => {
    res.render('articles/index.ejs', { articles, title: 'Список статей' });
};

// POST /articles - Створити нову статтю
const createArticle = (req, res) => {
    res.send('Post articles route');
};

// GET /articles/:articleId - Отримати статтю за ID
const getArticleById = (req, res) => {
    const { articleId } = req.params;
    const article = articles.find(a => a.id === parseInt(articleId));

    if (!article) {
        return res.status(404).render('articles/index.ejs', {
            articles,
            title: 'Статтю не знайдено',
            error: `Статтю з ID ${articleId} не знайдено`
        });
    }

    res.render('articles/detail.ejs', { article, title: article.title });
};

// PUT /articles/:articleId - Оновити статтю за ID
const updateArticle = (req, res) => {
    const { articleId } = req.params;
    res.send(`Put article by Id route: ${articleId}`);
};

// DELETE /articles/:articleId - Видалити статтю за ID
const deleteArticle = (req, res) => {
    const { articleId } = req.params;
    res.send(`Delete article by Id route: ${articleId}`);
};

module.exports = {
    getArticles,
    createArticle,
    getArticleById,
    updateArticle,
    deleteArticle
};
