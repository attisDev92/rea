const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');

//inizializations
const app = express();

//settings 
app.set('port', process.env.PORT || 4000);

//render handlebars
app.set('views', path.join(__dirname, 'views'));

//tamplate main
app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
}));

app.set('view engine', 'hbs');

//template register
app.engine('hbs_register', engine({
    extname: '.hbs',
    defaultLayout:'main_register',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir:path.join(__dirname, 'views/partials')
}));

 //middlewares
app.use(morgan('dev'));
app.use(express.urlencoded( {extended: false} ));
app.use(express.json());

//Global Variables
app.use((req, res, next) => {
    next();
});

//Routes
app.use(require('./routes'));
app.use(require('./routes/autentication'));
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/admin', require('./routes/admin'));


//Public
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});