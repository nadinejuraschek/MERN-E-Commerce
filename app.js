const   dotenv          = require('dotenv');
dotenv.config();

const   express         = require('express'),
        morgan          = require('morgan'),
        cookieParser    = require('cookie-parser'),
        validator       = require('express-validator'),
        db              = require('./db'),
        authRouter      = require('./routes/auth'),
        userRouter      = require('./routes/user'),
        categoryRouter  = require('./routes/category'),
        productRouter   = require('./routes/product'),
        app             = express();

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(validator());

// ROUTES
app.use('/api', authRouter);
app.use('/api', userRouter);
app.use('/api', categoryRouter);
app.use('/api', productRouter);

module.exports = app;