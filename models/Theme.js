const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const ThemeSchema = new Schema({
    themeName: {type: String, required: true},
    creator: {type: String, required: true}, 
    privacy: {type: String, required: true},
    theme: Schema.Types.Mixed 
});  

module.exports = Theme = mongoose.model('theme', ThemeSchema);