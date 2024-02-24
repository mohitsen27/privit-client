const { Sequelize } = require('sequelize');
const bcrypt = require("bcrypt");
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/userModel')


module.exports = {

    //Dashboard
    index: async (req, res) => {
        res.render("index");
    },

    //About Us
    aboutUs: async (req, res) => {
        res.render("about-us");
    },

    
 
} 






