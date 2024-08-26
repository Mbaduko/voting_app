import User from "../models/User.js";
import { comparePassword, getToken } from "../utils/authUtils.js";

const authenticateUser = async (username, password) => {
    const user = await User.findOne({
        username
    });

    if(!user)
        throw new Error("User not found");

    const doesMatch = await comparePassword(password, user.toObject().password);
    if (!doesMatch)
        throw new Error("Invalid credentials");

    const payload = {username:user.toObject().username, id:user.toObject()._id}
    const token = await getToken({payload});
    return {token, user:payload};
};

export {
    authenticateUser
};