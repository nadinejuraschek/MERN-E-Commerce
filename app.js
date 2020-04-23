const   dotenv      = require("dotenv");
dotenv.config();

const   express     = require("express"),
        db          = require("./db"),
        router      = require("./routes/router"),
        app         = express();

app.get("/", router);

module.exports = app;