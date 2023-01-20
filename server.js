const path = require('path'); // in case we need to join/resolve paths 
const express = require('express'); //get express 
const session = require('express-session'); //get express-session
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers') //in case we want to add a time stamp/calendar to a users home page 
//const authRoutes = require('./controllers/api/authRoutes')
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy //
// const FacebookStrategy = require('passport-facebook').Strategy
// const GoogleStrategy = require('passport-google').Strategy

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3002;

const hbs = exphbs.create({ helpers }); //creates instance of Handlebars template engine for helpers.js

const sess = {
    secret: 'Super secret secret',
    cookie: {
        //cookies last for 1 day, may want to change to 7 days to display workouts last seven days? unsure on how cookies are stored 
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false, //session will only be resaved if modified
    saveUninitialized: true, //new session will be saved
    // store: new SequelizeStore({
    //     db: sequelize //stores the session data
    // })
};
//middleware below 
app.use(session(sess)); //session middleware must be added before any routes that need to access session data 
app.engine('handlebars', hbs.engine); //sets handlebars template engine as the view engine refer to line 15
app.set('view engine', 'handlebars'); // Tells express app to look for a file with extension of handlebars when a route renders a page 

app.use(express.json()); //parses incoming request bodies as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//end middleware
app.use(routes);
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Now listening on port ${PORT}`)
    });
});