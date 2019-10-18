const express = require('express');
const path = require('path');
const routes = require('./routes');
const { sequelize } = require('./models');
const PORT = process.env.PORT || 5000;

const app = express();

// Static/Public files(css, front js)
app.use(express.static(path.join(__dirname, 'public')));

// Setup Handlebars
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layouts/main' });

// Encoded URL's
app.use(express.urlencoded({ extended: true }));
// Parsing of form data through the body object
app.use(express.json());

// Load our routes
app.use('/', routes);

// Start Server
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => console.log('Listening on port %s', PORT));
  });