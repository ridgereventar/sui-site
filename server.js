// node.js 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer'); 
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

// Mongo Setup
const app = express(); 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Middleware
app.use(methodOverride('_method'));
app.use(cors());

// Mongo Connection
const db = "mongodb+srv://ridgereventar:ratnever21@sui-cluster-n8na3.azure.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('SuiDB Connected ...'))
  .catch(err => console.log(err));

// GridFS Setup
const conn = mongoose.connection;
let gfs;
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
})

// Create Storage Engine
const storage = new GridFsStorage({
  url: db, 
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const fileInfo = {
        filename: file.originalname, 
        bucketName: 'uploads'
      };
      resolve(fileInfo);
    });
  }
});
const upload = multer({storage}).single('file');







// @route POST /upload (uploading a single file)
app.post('*/upload', (req, res) => {
  upload(req, res, function(err) {
    if(err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  })
});

// @route GET /files (get ALL files in db)
app.get('*/files', (req, res) => { 
  gfs.files.find().toArray((err, files) => {
    if(!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }
    return res.json(files);
  });
});

// @route GET /file/:id (get single file by _id)
app.get('*/file/:id', (req, res) => {
  const fileId = new mongoose.mongo.ObjectId(req.params.id); 
  gfs.files.findOne({_id: fileId}, (err, file) => {
    if(!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    return res.json(file);
  });
});

// @route GET /image/:id (get single file by _id)
app.get('*/image/:id', (req, res) => { 
  const fileId = new mongoose.mongo.ObjectId(req.params.id); 
  gfs.files.findOne({_id: fileId}, (err, file) => {
    if(!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    // check if image
    if(file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // use gfs read stream to output the image
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
});





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
  newUser.save().then(user => res.json(user)).catch((error) => console.log(error))
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
          foundTheme.imageId = req.body.imageId;
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
    theme: req.body.theme,
    themeId: req.body.themeId
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