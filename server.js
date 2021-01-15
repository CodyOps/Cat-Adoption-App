// Dependencies
const express = require('express');
const exphb = require('express-handlebars');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Sets handlebars as default template engine
app.engine("handlebars", exphb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
require('./routes/api-routes.js')(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
