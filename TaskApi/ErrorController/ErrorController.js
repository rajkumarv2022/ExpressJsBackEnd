const {CustomError} = require('../ErrorController/CustomErrorHandler');

const errorController = (err,req,res,next) => {
    if(err instanceof CustomError)
    {
        return CustomError(err,err.status);
    }
    return res.status(500).send(err);
}

module.exports=errorController;