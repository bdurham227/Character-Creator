const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
const path = require('path');
const router = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3003;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening, we are running on port ${PORT}`)
    });
});