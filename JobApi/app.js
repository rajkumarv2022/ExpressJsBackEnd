const express = require('express');
const connectdb=require('./database/dbconn');

const app=express();

const start = () => {
    try
    {

        connectdb();
        app.listen(5000, () => { 
        console.log('server is listning on port 5000') 
        })

    }
    catch(e)
    {
        console.log(e);
    }
}

start();
