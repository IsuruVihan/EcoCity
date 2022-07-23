// Imports
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const { readdirSync } = require('fs');
require('dotenv').config();

// Database
const db = require('./models');

// App
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit: '5mb'}));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Routes
readdirSync('./routes').map((route) => app.use("/api", require(`./routes/${route}`)));

// Sync database, listening on port
db.sequelize.sync({alter: true}).then(() => {
  app.listen(process.env.PORT || 3001, () => {
    console.log('> SERVER RUNNING ON PORT 3001');
  });
});
