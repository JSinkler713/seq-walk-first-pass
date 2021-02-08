const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const usersController= require('./controllers/usersController')
const animalsController = require('./controllers/animalsController')

// 3 - App set up
const app = express();
app.set('view engine', 'ejs');

// 4 - App Middleware (app.use)
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false }));

// 5 - Routes (controllers)
app.use('/users', animalsController)
app.use('/users', usersController)


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
