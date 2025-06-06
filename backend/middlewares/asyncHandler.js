//createing a async handler

//asyncHandler is a higher-order function that takes an asynchronous function fn as a parameter and 
//returns a new function that handles the standard Express middleware parameters: req, res, and next.

//Promise.resolve(fn(req, res, next)).catch(next) ensures that fn is treated as a promise, and any errors thrown or rejections
//are caught and passed to next for Express error handling.
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
        res.status(500).json({ message: error.message });
    });
};

export default asyncHandler;