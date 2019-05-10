//Core Modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//Custom Modules
const adminRoutes = require('./routes/admin');
const vendorRoutes = require('./routes/vendors');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(adminRoutes);
app.use(vendorRoutes);


app.use((request, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

//Server
app.listen(3000);