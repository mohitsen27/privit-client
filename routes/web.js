const passport = require('passport');
var express = require('express');
var router = express.Router();

//Middleware
const admin = require('../middleware/authAdmin');
const user = require('../middleware/authUser');

//User Controller Import
var homeController = require('../controllers/homeController');


//User Rouutes
router.get('/',homeController.index);
router.get('/about-us',homeController.aboutUs);






  

module.exports = router;
