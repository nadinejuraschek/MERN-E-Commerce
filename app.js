const   dotenv          = require('dotenv');
dotenv.config();

const   express         = require('express'),
        morgan          = require('morgan'),
        cookieParser    = require('cookie-parser'),
        validator       = require('express-validator'),
        db              = require('./db'),
        userRouter      = require('./routes/user'),
        app             = express();

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(validator());

// ROUTES
app.use('/api', userRouter);

module.exports = app;