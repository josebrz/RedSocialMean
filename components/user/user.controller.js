const Boom = require('@hapi/boom');
const service = require('./user.service')
const encryptPassword = require('../../libs/crypto')

function get(req, res, next){
    try{
        const {id} = req.params
        const result = service.getUser(id)
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
        service.createUser(data)
            .then((result)=>{
                return res.status(201).json(result);
            })
            .catch(e =>{
                return res.status(500).send(e.errors)
            })
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
