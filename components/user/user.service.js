const User = require('./user.model')

function getUser(userId) {
    return User.findById(userId);
}

function createUser(data) {
    const newUser = new User(data);
    newUser.save()
        .then(result =>{
            return {
                name: newUser.name,
                surname: newUser.surname,
                nick: newUser.nick,
                email: newUser.email,
                password: newUser.password
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
