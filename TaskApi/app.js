const express = require('express');
const app=express();
const mongoose = require('mongoose');
require('dotenv').config();

const router=require('./router/router');

app.use('/api/task',router);

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("MongoDb Coneected")).catch((err)=>console.log(err));

app.listen(3000, () => {
    console.log("server listning on port 3000");
} )