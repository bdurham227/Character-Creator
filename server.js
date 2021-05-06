const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});


const app = express();
const PORT = process.env.PORT || 3003;
const sequelize = require('./config/connection');

//define paths 
const publicDirectoryPath = path.join(__dirname, 'public');
const partialPath = path.join(__dirname, 'view/partials')

//set up hbs engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicDirectoryPath))

// app.use(require('./controllers/'))
app.use(require('./controllers/index'))

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening, we are running on port ${PORT}`)
    });
});