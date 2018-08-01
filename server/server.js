require('dotenv').config();
const express = require('express');
session = require('express-session');
axios = require('axios');
massive = require('massive');

const app = express();

const {
    SERVER_PORT,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    SESSION_SECRET,
    CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
});

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false  
}));






app.listen(SERVER_PORT, () => {
    console.log(`W.Ferrell Crashing Weddings on Port: ${SERVER_PORT}`);
})
