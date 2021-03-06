const express = require('express');
let {join} = require('path');
let passport = require('passport');
const cookieParser = require('cookie-parser');
let app= express();
const dbHost = 'mongodb://localhost/daotest';
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.createConnection(dbHost, {});
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(cookieParser());

app.use(express.static(join(__dirname, '../client')));
app.use(express.static(join(__dirname, '../client/node_modules/c3')));
app.use(express.static(join(__dirname, '../client/node_modules/tachyons/css')));


//Express session/mongostore
app.use(session({
    secret: 'big Secret',
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    ttl: 14*24*60*60, //=14 days,
    unset:'destroy',
    resave: false,
    saveUninitialized: false
}));

//Passport init
app.use(passport.initialize());
app.use(passport.session());


let Routes = require('./routes');
app.use('/', Routes());

app.set('port',(process.env.PORT || 3000));

app.listen(app.get('port'), () => {
    console.log('Server up: http://localhost:' +app.get('port'));

});
