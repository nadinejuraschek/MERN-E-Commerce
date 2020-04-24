const   dotenv          = require('dotenv');
dotenv.config();

const   express         = require('express'),
        morgan          = require('morgan'),
        cookieParser    = require('cookie-parser'),
        db              = require('./db'),
        userRouter      = require('./routes/user'),
        app             = express();

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
// ROUTES
app.use('/api', userRouter);
app.use(cookieParser());

module.exports = app;