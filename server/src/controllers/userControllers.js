import httpStatus from"http-status";
import { createUser } from "../services/userServices.js";


const newUser = async (req, res, next) => {
    const {
        password,
        username
    } = req.body;

    if (!password || !username)
        return res.status(httpStatus.BAD_REQUEST)
            .json({error:true, message:"Username and password are required"});

    try {
        const user = await createUser(username, password);
        const {__v, ...filteredUser} = user.toObject();
        return res.status(httpStatus.CREATED).json({error:false, ...filteredUser});        
    } catch (error) {
        next(error);
    }
};

export {
    newUser
};