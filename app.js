//Core Modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const exphbs=require("express-handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
//layout
app.engine('handlebars',exphbs({defaultLayout:"home"}));
app.set('view engine','handlebars');

//Custom Modules
const homeRoutes = require('./routes/home');

app.use(homeRoutes);



app.use((request, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

//Server
app.listen(3000,()=>{
    console.log("server listen to on port 3000")
});