const   dotenv      = require('dotenv');
dotenv.config();

const   mongoose    = require('mongoose');

mongoose.connect(
    process.env.MONGO_URI, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
    )
    .then(client => {
        module.exports = client;
        console.log('DB is connected.');
        const app = require('./app');
        app.listen(process.env.PORT, function() {
            console.log(`Server is listening on ${process.env.PORT}.`);
        });
    })
    .catch(err => console.log(`DB connection error: ${err.message}`));