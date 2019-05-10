const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/vendors/dashboard',(req,res,next)=>{
res.sendfile(path.join(__dirname, '../', 'views', 'Vendor', 'pages', 'dashboard.html'));
});


module.exports = router;