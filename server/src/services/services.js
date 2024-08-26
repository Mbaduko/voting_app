import { Error } from "mongoose";
import Poll from "../models/Poll.js";
import User from "../models/User.js";

const createPoll = async (by, question, options) => {

    const user = await User.findOne({
        _id:by
    });

    if (!user)
        throw new Error("User doesn't exist")
    const poll = new Poll({
        question,
        owner:by,
        options
    });

    return await poll.save();
};

export {
    createPoll
};