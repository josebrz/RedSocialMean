const User = require('./user.model')
const Boom = require('@hapi/boom');

function getUser(userId) {
    return User.findById(userId);
}

function createUser(data) {
    const newUser = new User(data);
    return newUser.save()
        .then(() =>{
            return {
                name: newUser.name,
                surname: newUser.surname,
                nick: newUser.nick,
                email: newUser.email,
                signUpDate: newUser.signUpDate
            }
        })
        .catch(err =>{
            throw err
        })
}


module.exports = {
    getUser,
    createUser
}
