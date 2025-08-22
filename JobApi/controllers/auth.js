const User=require('../model/user');

// const bcrypt=require('bcrypt');

const register = async (req,res) => {

    const user=await User.create(req.body);
    const token=await user.createJWT();

    res.send('user created');
    
}

const login = async (req,res) => {

    const {email,password} = req.body;

    console.log(email,password);

    const user=await User.findOne({email});
    
    if(user==null)
    {
        throw new Error("email and password must be provided");
    }

    const result=await user.checkPass(password);
    console.log(result);

    if(result==false)
    {
        throw new Error("wrong credentials");
    }

    const token=user.createJWT();

    console.log(token);

    res.send('login')
}

module.exports = {
    register,
    login
};