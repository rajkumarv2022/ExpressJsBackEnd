const express = require('express');
const connectdb=require('./database/dbconn');

const authRouter=require('./router/auth');
const jobRouter=require('./router/job');

const app=express();

app.use('/api',authRouter);
app.use('/api',jobRouter);

const start = () => {
    try
    {

        connectdb();
        app.listen(3000, () => { 
        console.log('server is listning on port 3000') 
        })

    }
    catch(e)
    {
        console.log(e);
    }
}

start();
