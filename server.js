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
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('SuiDB Connected ...'))
  .catch(err => console.log(err));

// Routes

const User = require('./models/User');

// @route GET api/users (get ALL users from db)
app.get('*/api/users', (req, res) => {
  User.find().then(users => res.json(users));
});

// @route GET api/user/:id (get a user by id from db)
app.get('*/api/user/:id', (req, res) => {
  User.findById(req.params.id)
      .then((user) => res.json(user));
});

// @route UPDATE api/user/:id (update a users theme list)
// app.get('*/api/user/:id', (req, res) => {
//   var conditions = {_id: req.params.id};

//   User.update(conditions, req.body.themes).then(doc => {
//     if(!doc) {return res.status(404).end(); }
//     return res.status(200).json(doc);
//   }).catch(err => next(err));
// });

// @route POST api/users (create a user)
app.post('*/api/users', (req, res) => {
  const newUser = new User({
    name: req.body.name, 
    email: req.body.email,
    password: req.body.password,
    themes: req.body.themes 
  });
  newUser.save().then(user => res.json(user));
})

// @route DELETE api/users (delete a user)
app.delete('*/api/users/:id', (req, res) => {
  User.findById(req.params.id)
      .then(user => user.remove()
      .then(() => res.json({success: true})))
      .catch(err => res.status(404).json({success: false}));
})

const Theme = require('./models/Theme');

// @route GET api/themes (get ALL themes from db)
app.get('*/api/themes', (req, res) => {
  Theme.find().then(themes => res.json(themes));
})

// @route POST api/themes (create a theme)
app.post('*/api/themes', (req, res) => {
  const newTheme = new Theme({
    themeName: req.body.themeName,
    creator: req.body.creator,
    privacy: req.body.privacy,
    theme: req.body.theme
  })
  newTheme.save().then(theme => res.json(theme));
})



// Port and Listen 
const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server listening on port ${port}...`)); 