const User=require('../model/user');

const bcrypt=require('bcrypt');

const register = async (req,res) => {

    await User.create(req.body);

    res.send('user created');
}

const login = (req,res) => {
    res.send('login')
}

module.exports = {
    register,
    login
};