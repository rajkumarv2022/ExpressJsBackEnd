const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');

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

module.exports = mongoose.model('User',userSchema);