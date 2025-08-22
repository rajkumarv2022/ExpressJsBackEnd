const mongoose = require('mongoose');

const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')

const userSchema = new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:[true,'please provide name']
        },
        email:
        {
            type:String,
            required:[true,'please provide email'],
            match:[
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                'please provide valid email'
            ],
            unique:true
        },
        password:
        {
            type:String,
            required:[true,'please provide password']
        }
    }
)

userSchema.pre( 'save', async function ()
{
    const salt= await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
}

)

userSchema.methods.createJWT = function()
{
    const userId=this._id;
    const username=this.name;

    const token = jwt.sign({userId,name:username},'secretkey',{expiresIn:'30d'});

    return token;

}

userSchema.methods.checkPass = async function(password) {

    const salt=await bcrypt.genSalt(10);

    const hashpass=await bcrypt.hash(password,salt);

    const res=await bcrypt.compare(this.password,hashpass);
    console.log(res);
    return res;

}

module.exports = mongoose.model('User',userSchema);