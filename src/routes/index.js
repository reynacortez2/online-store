const express = require('express');
const router = express.Router();

// GET method route
router.get('/', function (req, res) {
  	res.render('index'); 
});

module.exports = router;