var User = require('../models/users.model');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.create = (req, res) => {
    if(req.body.name && req.body.email && req.body.password){
        bcrypt.hash(req.body.password, 10).then((hash)=>{
            var userSchema = {
                name: req.body.name,
                email: req.body.email,
                password: hash
            }
            User.create(userSchema).then((user)=>{
                return res.status(200).send(user);
            }).catch(error => {
                return res.status(400).send({
                    message: "error while creating user",
                    error: error.message
                })
            })
        })
        
    }else{
        return res.send({
            message: 'all fields are required',

        })
    }
}

exports.login = (req, res)=>{
    console.log(req.body.email);
    if(req.body.email && req.body.password){
        var userEmail = {
            email: req.body.email
        }
        User.findOne({email:req.body.email}).then(user => {
            if(!user){
                return res.status(404).send({
                    message: 'no user'
                })
            }else{
                bcrypt.compare(req.body.password, user.password).then(result => {
                    if(!result){
                        return res.send({
                            message: 'password not matched'
                        })
                    }
                    if(result==true){
                        var token = jwt.sign(JSON.stringify(user), 'my_private_key');
                        return res.status(200).send({
                            token: token,
                            user: user
                        })
                    }
                }).catch(error => {
                    return res.send({
                        error: error.message
                    })
                })
            }
        }).catch(error => {
            return res.status(400).send({
                error: error.message
            })
        })
    }else{
        return res.send({
            message: 'all fields are required'
        })
    }
}