const jwt=require('jsonwebtoken');

const authmidd = (req,res,next) => {
    
    let token=req.headers.authorization;

    if(!token.startsWith('Bearer'))
    {
        throw new Error('invalid token');
    }

    token=token.split(' ')[1];

    const decbody = jwt.verify(token,'secretkey');

    if(!decbody)
    {
        throw new Error('unauthorized');
    }

    req.user = {decbody};

    next();

}

module.exports = authmidd;