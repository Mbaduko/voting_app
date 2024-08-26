import httpStatus from "http-status";
import jwt from 'jsonwebtoken';

const authorization = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if (!token)
        return res.status(httpStatus.UNAUTHORIZED)
            .json({error:true, message:"Token required"});

    const user = jwt.verify(token, process.env.ACCESS_SECRET_TOKEN);
    if (!user)
        return res.status(httpStatus.UNAUTHORIZED)
            .json({error:true, message:"Access failed"});

    req.user = user.payload;
    next();
};

export default authorization;