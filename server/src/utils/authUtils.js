import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dotenv.config();

const hashPassword = async ( password ) => {

    const saltRounds = parseInt(process.env.HASH_ROUNDS);
    return await bcrypt.hash(password, saltRounds);
}; 

const comparePassword = async (pass, hashedPass) => {
    return await bcrypt.compare(pass, hashedPass);
};

const getToken = (payload) => {
    return  jwt.sign(payload, process.env.ACCESS_SECRET_TOKEN, {
        expiresIn:process.env.TOKEN_LIFETIME
    });
};

export {
    hashPassword,
    comparePassword,
    getToken
};