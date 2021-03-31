const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
},
{
    timestamps: true,
}
);

module.exports = mongoose.model('User', UserSchema);
