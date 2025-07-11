require("dotenv").config();
const mysql = require("mysql2");


const connection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
});


connection.connect((err) => {
    if(err){
        console.error("database connection failed",err.message);
    }
    else{
        console.log("connected to my SQl");
    }

});

module.exports = connection;