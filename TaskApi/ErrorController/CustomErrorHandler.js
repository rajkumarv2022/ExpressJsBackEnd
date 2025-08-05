class CustomError extends Error
{
    constructor(err,statusCode)
    {
        super(err);
        this.statusCode=statusCode;
    }
}

const createError = (error,statusCode) =>
{
    return new CustomError(error,statusCode);
}

module.exports = {createError,CustomError};