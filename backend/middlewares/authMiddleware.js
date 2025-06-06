import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";

// Middleware to authenticate user using JWT stored in cookies
const authenticate = asyncHandler(async (req, res, next) => {
    let token = req.cookies.jwt;

    if (token) {
        try {
            // Verify the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Fetch the user from the database, excluding the password
            req.user = await User.findById(decoded.userId).select("-password");

            if (!req.user) {
                res.status(401);
                throw new Error("User not found");
            }

            next(); // Proceed to the next middleware or route handler
        } catch (error) {
            console.error("Auth Error:", error.message);
            res.status(401);
            throw new Error("Not authorized, token failed.");
        }
    } else {
        console.log("No token found in cookies:", req.cookies);
        res.status(401);
        throw new Error("Not authorized, no token.");
    }
});

// Middleware to authorize only admin users
const authorizeAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next(); // User is admin, proceed
    } else {
        res.status(401);
        throw new Error("Not authorized as an admin.");
    }
};

export { authenticate, authorizeAdmin };