const express = require('express');

const authmidd = require('../middleware/authentication');

const router = express.Router();

const {getAllJobs,getJobs,createJob,updateJob,deleteJob} = require('../controllers/jobs');

router.get('/get',getAllJobs);
router.get('/get/:id',authmidd,getJobs);
router.post('/create',createJob);
router.patch('/update',updateJob);
router.delete('/delete/:id',deleteJob);

module.exports = router;