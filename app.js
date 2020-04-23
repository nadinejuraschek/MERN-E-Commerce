const   dotenv      = require("dotenv");
dotenv.config();

const   express     = require("express"),
        db          = require("./db")
        app         = express();

app.get("/", (req, res) => {
    res.send("Route is working.");
});

module.exports = app;