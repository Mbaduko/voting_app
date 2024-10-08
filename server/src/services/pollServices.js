import { Error } from "mongoose";
import Poll from "../models/Poll.js";
import User from "../models/User.js";

const createPoll = async (creator, question, options) => {

    const user = await User.findOne({
        _id:creator.id
    });

    if (!user)
        throw new Error("User doesn't exist")
    const poll = new Poll({
        question,
        creator,
        options
    });

    return await poll.save();
};

const vote = async (poll, option) => {
    const result = await Poll.updateOne(
        {
            _id:poll,
            "options.option":option
        },
        {
            $inc:{
                "options.$.vote":1
            }
        }
    );

    return !! result.modifiedCount;
};

export {
    createPoll,
    vote
};