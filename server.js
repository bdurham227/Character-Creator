const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});


const app = express();
const PORT = process.env.PORT || 3003;
const sequelize = require('./config/connection');

//set up hbs engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./controllers/'))


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening, we are running on port ${PORT}`)
    });
});