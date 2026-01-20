const jwt = require("jsonwebtoken")

function adminMiddleware(req,res,next){
    const token = req.headers.authorization;
    const words =token.split(" ");
    const jwtToken = word[1];
    const decodedValue = jwt.verify(jwtToken,secret);

    if(decodedValue.username){
        next();
    } else{
        res.status(403).json({msg : "you are not authorized"});
    }

}

module.exports = adminMiddleware;