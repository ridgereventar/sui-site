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

// @route GET api/theme/:id (get a theme by id from db)
app.get('*/api/theme/:id', (req, res) => {
  Theme.findById(req.params.id)
      .then((theme) => res.json(theme));
});

// @route UPDATE api/theme/:id (update a theme)
app.put('*/api/theme/:id', (req, res) => {
  var id = req.params.id;
  Theme.findOne({_id: id}, (err, foundTheme) => {
    if(err) {
      console.log(err);
      res.status(500).send();
    } else {
        if(!foundTheme) {
          res.status(404).send();
        } else {
          foundTheme.themeName = req.body.themeName;
          foundTheme.creator = req.body.creator;
          foundTheme.privacy = req.body.privacy;
          foundTheme.theme = req.body.theme;
          foundTheme.save().then(theme => res.json(theme));
        }
    }
  })
});

// @route POST api/themes (create a theme)
app.post('*/api/themes', (req, res) => {
  const newTheme = new Theme({
    themeName: req.body.themeName,
    creator: req.body.creator,
    privacy: req.body.privacy,
    theme: req.body.theme
  })
  newTheme.save().then((theme) => {
    var conditions = {_id: req.header('user-id')};
    User.update(conditions, {
      $push: {themes: theme._id}
    }).then((user) => res.json(user)).catch((err) => console.log(err));

    return res.json(theme);    
  });


})



// Port and Listen 
const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server listening on port ${port}...`)); 