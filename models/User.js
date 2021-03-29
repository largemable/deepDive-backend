const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model('User', UserSchema);
