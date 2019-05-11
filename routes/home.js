const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=> {
    res.render('home/index.handlebars');
});

router.get('/dashboard', (req, res, next)=> {
    res.render('home/dashboard.handlebars');
});

router.get('/user', (req, res, next)=> {
    res.render('home/user.handlebars');
});

router.get('/notification', (req, res, next)=> {
    res.render('home/notification.handlebars');
});


module.exports = router;