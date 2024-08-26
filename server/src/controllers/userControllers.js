import httpStatus from"http-status";
import { createUser } from "../services/userServices.js";
import { hashPassword } from "../utils/authUtils.js";
import { authenticateUser } from "../services/authService.js";


const newUser = async (req, res, next) => {
    const {
        password:plainPassword,
        username
    } = req.body;

    if (!plainPassword || !username)
        return res.status(httpStatus.BAD_REQUEST)
            .json({error:true, message:"Username and password are required"});

    try {

        const hashedPass = await hashPassword(plainPassword);
        const user = await createUser(username, hashedPass);
        const {__v, password, ...filteredUser} = user.toObject();
        return res.status(httpStatus.CREATED).json({error:false, ...filteredUser});        
    } catch (error) {  
        if (error.message === "User doesn't exist")
            return res.status(httpStatus.NOT_ACCEPTABLE).json({error:true, message: error.message});
        if (error.code === 11000)
            return res.status(httpStatus.NOT_ACCEPTABLE).json({error:true, message: "Username taken"})
        next(error);
    }
};

const login = async (req, res, next) => {
    const {
        username,
        password
    } = req.body;

    if (!password || !username)
        return res.status(httpStatus.BAD_REQUEST)
            .json({error:true, message:"Username and password are required"});
    
    try {
        const result = await authenticateUser(username, password);
        return res.status(httpStatus.OK).json(result);        
    } catch (error) {
        if (error.message === 'Invalid credentials' || error.message === "User not found")
            return res.status(httpStatus.UNAUTHORIZED).json({error:true, message:error.message})
        next (error);
    }
};

export {
    newUser,
    login
};