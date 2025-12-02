const {User} = require("../db/database");

function userMiddleware(req,res,next){

    const username = req.headers.username;
    const password = req.headers.password;
    
    User.findOne({
        username: username,   ///we can just mention the usernme or password
        password: password
    })
    .then( (value) => {
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msg: "User noot found"
            })
        }
    })
}

module.export = userMiddleware;