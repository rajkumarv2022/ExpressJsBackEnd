const express=require('express');
const router=express.Router();

const {getAllTask,createTask}=require('../controllers/task');

router.route('/gettask').get(getAllTask)
router.post('/create',createTask);
module.exports = router;