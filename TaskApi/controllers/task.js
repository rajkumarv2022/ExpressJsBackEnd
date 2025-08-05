const task = require('../db/model');
const asyncWrapper = require('../ErrorController/asyncWrapper');

const {createError}=require('../ErrorController/CustomErrorHandler');

const getAllTask = asyncWrapper ( (req,res)=>{

    const data=task.find({});
    res.json({data});
    
} );

const getTask = asyncWrapper( (req,res) => {
    const {id:taskId} = req.params;
    const data=task.findOne({_id:taskId});

    if(data==null)
    {
       
        // const error=new Error();
        // error.status=404;
        // return next(error);
        // res.status(404).json({msg:"task not found"});

        next(createError("Not found Error",404));

    }
    else
    {
        res.json({data});
    }

} );

const createTask = asyncWrapper ( (req,res) => {

    // try
    // {
    //     const data=req.body;
    //     task.create(data);
    // }
    // catch(e)
    // {
    //     console.log(e);
    // }

    const data=req.body;
    task.create(data);

} );

const updateTask = asyncWrapper ( (req,res) => {

    // try
    // {

        

    //     //const data=task.updateOne({_id:taskId},uptData);

       

    //     //put

    //     // const data=task.findOneAndUpdate({_id:taskId},uptData,{
    //     //     new:true,
    //     //     runValidators:true,
    //     //     overwrite:true
    //     // })


    // }
    // catch(e)
    // {
    //     console.log(e);
    // }

    const {id:taskId} = req.params;
    const uptData=req.body;

    const data=task.findOneAndUpdate({_id:taskId},uptData, {
            new:true,
            runValidators:true
    } );

    if(data)
    {
        res.json({data});
    }
    else
    {
        res.status(404).json({msg:"id Not found"});
    }
    

}

);

const deleteTask = asyncWrapper ( (req,res) => {

    // try
    // {

       

    // }
    // catch(e)
    // {
    //     console.log(e);
    // }
    
    const {id:taskId} = req.params;

    //const data=task.deleteOne({_id:taskId});

    const data=task.findOneAndDelete({_id:taskId});

    if(data)
    {
        res.json({data});
    }
    else
    {
        res.status(404).json({msg:'id not found'});
    }

}
);

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
};