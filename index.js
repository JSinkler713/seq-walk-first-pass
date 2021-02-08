const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override')
//const usersController= require('./controllers/usersController')
//const animalsController = require('./controllers/animalsController')
const controller = require('./controllers')

// 3 - App set up
const app = express();
app.set('view engine', 'ejs');

// 4 - App Middleware (app.use)
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))

// 5 - Routes (controllers)
app.use('/users', controller.users)
app.use('/pets', controller.pets)


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});
