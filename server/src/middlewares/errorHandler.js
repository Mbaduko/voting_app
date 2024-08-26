import httpStatus from "http-status";

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({error:true, message: "Something went wrong"})
};

export default errorHandler;