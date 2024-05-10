const jwt = require('jsonwebtoken');
const JWT_PRIVATE_KEY = "5aa0ad0b77e9a742350e6f149719d7876a1631b6e25c3c046f2dd5b84e21de5e";

const fetchUserDetails = (req, res, next) => {
    const token = req.header('Auth-Token')
    if(!token){
        return res.status(401).json({success: false, error: "Please Authenticate using a valid token"})
    }

    try{
        const tokenData = jwt.verify(token, JWT_PRIVATE_KEY)
        req.user = tokenData.user
        next()
    }
    catch(error){
        return res.status(401).json({success: false, error: "Please Authenticate using a valid token"})
    }
}

module.exports = fetchUserDetails;