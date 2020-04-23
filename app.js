const   dotenv          = require("dotenv");
dotenv.config();

const   express         = require("express"),
        db              = require("./db"),
        userRouter      = require("./routes/user"),
        app             = express();

// ROUTES
app.use("/api", userRouter);

module.exports = app;