const express = require('express');
const { connectToMongoDB} = require("./connect");
const path = require("path");

const app = express();
const port = 8001;

const urlRoute = require('./routes/routes.url');
const staticRoute = require('./routes/staticRouter');
const URL = require('./models/url');
const userRoute = require("./routes/user");
const {restrictToLoggedInUsersOnly, checkAuth} = require("./middlewares/auth");

const cookieParser = require("cookie-parser");

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(()=> console.log('Mongodb connected'));

//telling express to use ejs view engine
app.set("view engine", "ejs");   
app.set("views", path.resolve("./views") )

app.use(express.json()); // will support JSON data
app.use(express.urlencoded({extended: false})); // will support Form data
app.use(cookieParser());

app.use("/", checkAuth, staticRoute);
app.use("/url", restrictToLoggedInUsersOnly, urlRoute); //inline middleware
app.use("/user", userRoute);

app.get('/url/:shortId', async(req,res) =>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
        shortId
    }, {
        $push:{
            visitHistory: {
                timestamp: Date.now(),
            },
        }
    })
    res.redirect(entry.redirectURL)
})
app.listen(port, ()=> console.log(`Server Started at PORT: ${port}`));


