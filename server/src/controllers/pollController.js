import { createPoll, vote } from "../services/pollServices.js";
import httpStatus from 'http-status';

const newPoll = async (req, res, next) =>{
    const {
        question,
        options
    } = req.body;

    const user = req.user;

    if(!question )
        return res.status(httpStatus.BAD_REQUEST).json({error: true, message:"question is required"});
    
    try {
        const poll = await createPoll(user, question, options || null);
        const {__v, ...filteredPoll } = poll.toObject();
        return res.status(httpStatus.CREATED).json({error:false, ...filteredPoll});        
    } catch (error) {
        next(error);
    }
};

const pallot = async (req, res, next) => {

    if (!req.body)
        return res.status(httpStatus.BAD_REQUEST)
            .json({error:true, message:"Pallot needed"});
    const {
        poll,
        option
    } = req.body;

    const result = await vote(poll, option);

    return res.status(httpStatus.OK).json({error:false, vote:"successs"});
};

export {
    newPoll,
    pallot
};