import { createPoll } from "../services/pollServices.js";
import httpStatus from 'http-status';

const newPoll = async (req, res, next) =>{
    const {
        question,
        owner,
        options
    } = req.body;

    if(!question || !owner)
        return res.status(httpStatus.BAD_REQUEST).json({error: true, message:"question, user are required"});
    
    try {
        const poll = await createPoll(owner, question, options || null);
        const {__v, ...filteredPoll } = poll.toObject();
        return res.status(httpStatus.CREATED).json({error:false, ...filteredPoll});        
    } catch (error) {
        next(error);
    }
};

export {
    newPoll
};