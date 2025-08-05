const task = require('../db/model');

const getAllTask = (req,res)=>{

    const data=task.find({});
    res.json({data});
    
}

const getTask = (req,res) => {
    const {id:taskId} = req.params;
    const data=task.findOne({_id:taskId});

    if(data==null)
    {
        res.status(404).json({msg:"task not found"});
    }
    else
    {
        res.json({data});
    }

}

const createTask = (req,res) => {

    try
    {
        const data=req.body;
        task.create(data);
    }
    catch(e)
    {
        console.log(e);
    }

}

const updateTask = (req,res) => {

    try
    {

        const {id:taskId} = req.params;
        const uptData=req.body;

        //const data=task.updateOne({_id:taskId},uptData);

        const data=task.findOneAndUpdate({_id:taskId},uptData, {
            new:true,
            runValidators:true
        } );

        //put

        // const data=task.findOneAndUpdate({_id:taskId},uptData,{
        //     new:true,
        //     runValidators:true,
        //     overwrite:true
        // })

        if(data)
        {
            res.json({data});
        }
        else
        {
            res.status(404).json({msg:"id Not found"});
        }

    }
    catch(e)
    {
        console.log(e);
    }
    

}

const deleteTask = (req,res) => {

    try
    {

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
    catch(e)
    {
        console.log(e);
    }
    
    

}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
};