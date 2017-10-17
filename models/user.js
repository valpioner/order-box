const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getAllUsers = function(callback){
    User.find({}, callback);
}

module.exports.updateUser = function(newUser){
    User.findById(newUser.id, function(err, user) {
        if (err) throw err;
      
        // change the users location
        user = newUser;
      
        // save the user
        user.save(function(err) {
          if (err) throw err;      
          return true;
        });
      
      });
}

module.exports.delete = function(id, callback){
    User.findByIdAndRemove(id, callback);
}

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username}
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        })
    })
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}