import httpStatus from "http-status";

const errorHandler = (err, req, res, next) => {
    
    if (err.message === "User doesn't exist")
        return res.status(httpStatus.NOT_ACCEPTABLE).json({error:true, message: err.message})
    console.error(err.stack);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({error:true, message: "Something went wrong"})
};

export default errorHandler;