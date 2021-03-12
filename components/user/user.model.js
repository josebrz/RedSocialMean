const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

mongoose.Types.ObjectId.isValid('6046af2e60f55e3cd816d5d0');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    nick: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    signUpDate: {
        type: Date,
        default: Date.now()
    }

});

UserSchema.plugin(uniqueValidator,({
    message: "{PATH} El email o nick ya ha sido utilizado"
}))

module.exports = mongoose.model('User', UserSchema);
