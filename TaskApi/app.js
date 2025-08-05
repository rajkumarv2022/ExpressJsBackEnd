const express = require('express');
const app=express();
require('dotenv').config();


const connectDB=require('./db/connectDB');
const notfound=require('./controllers/NotFound');
const errorController = require('./ErrorController/ErrorController');

const router=require('./router/router');

app.use(express.urlencoded());
app.use(express.json());

app.use('/api/task',router);
app.use(notfound);
app.use(errorController);

const start = async () => {

    try
    {

      // await connectDB();

        app.listen(3000, () => {
            console.log("server listning on port 3000")
        } )       

    }
    catch(e)
    {
        console.log(e);
    }

}

start();

// app.listen(3000, () => {
//     console.log("server listning on port 3000");
// } )