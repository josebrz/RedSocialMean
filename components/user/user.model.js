const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

mongoose.Types.ObjectId.isValid('6046af2e60f55e3cd816d5d0');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    surname: String,
    nick: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: String,
});

UserSchema.plugin(uniqueValidator,({
    message: "{PATH} El email o nick ya ha sido utilizado"
}))

module.exports = mongoose.model('User', UserSchema);
