const getAllJobs = (req,res) => {
    res.send('get all jobs');
}

const getJobs = (req,res) => {

    console.log(req.body);

    res.send('get single job');
}

const createJob = (req,res) => {
    res.send('create job');
}

const updateJob = (req,res) => {
    res.send('updateJob');
}

const deleteJob = (req,res) => {
    res.send('delete job');
}

module.exports = {
    getAllJobs,
    getJobs,
    createJob,
    updateJob,
    deleteJob
};