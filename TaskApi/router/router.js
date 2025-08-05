const express=require('express');
const router=express.Router();

const {getAllTask,createTask,getTask,updateTask,deleteTask}=require('../controllers/task');

router.route('/gettask').get(getAllTask)
router.post('/create',createTask);
router.get('/gettask/:id',getTask);
router.patch('/update/:id',updateTask);
router.delete('/delete:id',deleteTask);

module.exports = router;