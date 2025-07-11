const express = require("express");
const router = express.Router();
const connection = require("../database/connection");


// router.get("/students",(req,res) => {
//     res.send("welcome to user student");
// });

router.get("/students",(req,res) => {
let q = "select * from user";

    connection.query(q,(err,result) => {
    if(err){
        return res.status(500).send("query error ");
    }
    res.send(result);
    });
});

router.post("/students",(req,res) => {
    const {id,name,email,course,score} = req.body;
    
    if(!id || !name || !email || !course || !score){
        return res.status(404).send("All feilds are required");
    }

    const q = "insert into students(id ,name,email,course,score) values ( ?,? ,? , ?, ?)";
    connection.query(q,[id,name,email,course,score], (err,result) => {
    if(err){
        console.error("insert error",err);
        return res.status(505).send("failed to add student Info");
    }
     res.send("added student succesfully");
     console.log(result)
     console.log(req.body);

    });
});


//get student detail by id
router.get("/students/:id",(req,res) => {
    const { id } = req.params;
    const q = "select * from students where id =?";
    connection.query(q,[id],(err,result) => {
        if (err){
            console.err("query error".err);
            return res.status(420).send("error fetching from database");
        }

        if(result.length === 0){
            return res.status(404).send("check the ID");
        }

        res.json(result[0]);
    })
});


router.patch("/:id",(req,res) => {
    const {id} = req.params;
    console.log("recieved patch ID : ",id);
    const {name, email, course, score} = req.body;
    
    let fields = [];
    let values = [];

    if (name){
        fields.push("name = ?");
        values.push(name);
    }

    if(email){
        fields.push("email = ?");
        values.push(email);
    }

    if(course){
        fields.push("course = ?");
        values.push(course);
    }

    if(score){
        fields.push("score = ?");
        values.push(score);
    }

    if(fields.length === 0){
        return res.status(404).send("NO data is provided");
    }

    const q = `update students set ${fields.join(", ")} where id = ?`;
    values.push(id);

    connection.query(q,values,(err,result) =>{
        if(err){
            console.error("update error",err);
            return res.status(500).send("Update Failed");
        }

        if(result.affectedRows === 0){
            return res.status(404).send("student not found");
        }

        res.send("Student data Updated successfullt");
    });
});


// delete request
router.delete("/:id",(req,res) => {
    const {id} = req.params;

    const q ="delete from students where id = ?";
    connection.query(q,[id],(err,result) => {
        if(err){
            console.log("error while deleting",err);
            return res.status(504).send("Failed to delete the data");
        }

        if(result.affectedRows === 0){
            return res.status(404).send("student not found");
        }

        res.send("student deleted succcesfully ....");
    });
});

module.exports = router; 