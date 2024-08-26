import httpStatus from"http-status";
import { createUser } from "../services/userServices.js";
import { hashPassword } from "../utils/passwordHash.js";


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
        next(error);
    }
};

export {
    newUser
};