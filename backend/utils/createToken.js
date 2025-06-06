import jwt from "jsonwebtoken";

//generate a jwt token
const generateToken = (res, userId) => {
    // genreateing a token using secret key that expires in 30days
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "30d" })

    
    //Sets a cookie named jwt in the user's browser containing the token.
    res.cookie('jwt', token, {
        // The cookie has the following options:
                //Makes the cookie inaccessible to JavaScript on the client side, helping protect against XSS attacks.
        httpOnly: true,
        secure: false, // Set to false in development
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
    })
return token;
}

export default generateToken;