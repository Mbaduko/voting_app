import User from "../models/User.js";

const createUser = async ( username, password ) => {
    const user = new User({
        username,
        password
    });

    return await user.save();
};

export {
    createUser
};