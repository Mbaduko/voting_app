import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

const hashPassword = async ( password ) => {

    const saltRounds = parseInt(process.env.HASH_ROUNDS);
    return await bcrypt.hash(password, saltRounds);
}; 

const comparePassword = async (pass, hashedPass) => {
    return await bcrypt.compare(pass, hashedPass);
};

export {
    hashPassword,
    comparePassword
};