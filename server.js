// node.js 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Mongo Setup
const app = express(); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const db = "mongodb+srv://ridgereventar:ratnever21@sui-cluster-n8na3.azure.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(db, {useNewUrlParser: true})
  .then(() => console.log('SuiDB Connected ...'))
  .catch(err => console.log(err));

// Routes

// 1. User Login: 
const User = require('./models/User');

// @route GET api/users (get ALL users from db)
app.get('*/api/users', (req, res) => {
  User.find().then(users => res.json(users));
});

// @route POST api/users (create a user)
app.post('*/api/users', (req, res) => {
  const newUser = new User({
    fname: req.body.fname, 
    lname: req.body.lname,
    username: req.body.username, 
    password: req.body.password, 
    email: req.body.email 
  });
  newUser.save().then(user => res.json(user));
})




// Port and Listen 
const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server listening on port ${port}...`)); 