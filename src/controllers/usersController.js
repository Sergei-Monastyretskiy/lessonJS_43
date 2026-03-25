// Контролер для управління користувачами

// Тестові дані користувачів
const users = [
    {
        id: 1,
        name: 'Іван Петренко',
        email: 'ivan.petrenko@example.com',
        age: 28,
        city: 'Київ'
    },
    {
        id: 2,
        name: 'Марія Коваленко',
        email: 'maria.kovalenko@example.com',
        age: 24,
        city: 'Львів'
    },
    {
        id: 3,
        name: 'Олександр Шевченко',
        email: 'oleksandr.shevchenko@example.com',
        age: 32,
        city: 'Одеса'
    },
    {
        id: 4,
        name: 'Наталія Сидоренко',
        email: 'natalia.sydorenko@example.com',
        age: 26,
        city: 'Харків'
    },
    {
        id: 5,
        name: 'Дмитро Мельник',
        email: 'dmytro.melnyk@example.com',
        age: 30,
        city: 'Дніпро'
    }
];

// GET /users - Отримати всіх користувачів
const getUsers = (req, res) => {
    res.render('users/index', { users, title: 'Список користувачів' });
};

// POST /users - Створити нового користувача
const createUser = (req, res) => {
    res.send('Post users route');
};

// GET /users/:userId - Отримати користувача за ID
const getUserById = (req, res) => {
    const { userId } = req.params;
    const user = users.find(u => u.id === parseInt(userId));

    if (!user) {
        return res.status(404).render('users/index', {
            users,
            title: 'Користувача не знайдено',
            error: `Користувача з ID ${userId} не знайдено`
        });
    }

    res.render('users/detail', { user, title: `Користувач: ${user.name}` });
};

// PUT /users/:userId - Оновити користувача за ID
const updateUser = (req, res) => {
    const { userId } = req.params;
    res.send(`Put user by Id route: ${userId}`);
};

// DELETE /users/:userId - Видалити користувача за ID
const deleteUser = (req, res) => {
    const { userId } = req.params;
    res.send(`Delete user by Id route: ${userId}`);
};

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};
