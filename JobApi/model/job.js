const mongoose=require('mongoose');

const JobSchema = new mongoose.Schema(
    {
        pos:
        {
            type:String,
            required:[true,'pos must be provided']
        }
    }
)