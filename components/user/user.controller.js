const Boom = require('@hapi/boom');
const service = require('./user.service')
const encryptPassword = require('../../libs/crypto')

async function get(req, res, next){
    try{
        const {id} = req.params
        const result = await service.getUser(id)
        return res.status(201).json(result);
    } catch (e) {
        return next(Boom.badImplementation(e, {
            code: 1,
            msg: 'user_get'
        }));
    }
}

async function create(req, res, next){
    try{
        let data = req.body
        data.rawPassword = data.password;
        data.password = await encryptPassword(data.password);
        const result = service.createUser(data)
        return res.status(201).json(result);
    } catch (e){
        return next(Boom.badImplementation(e, {
            code: 2,
            msg: 'user_create'
        }));
    }
}

module.exports = {
    get,
    create
}
