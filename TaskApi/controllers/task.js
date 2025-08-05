const getAllTask = (req,res)=>{

    res.send("getAll tasks");
    
}

const createTask = (req,res) => {

    res.send("create task");

}

module.exports = {
    getAllTask,
    createTask
};