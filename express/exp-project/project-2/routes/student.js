const express = require("express");
const router = express.Router();
const fs = require("fs");
const path  = require("path");

const fileData = path.join(__dirname,"../data/student.json");

//function to read the student file
function readStudent(){
    const fileData = fs.readFileSync(fileData); //here the variable data is used where we assign the path of student.json
    return JSON.parse(fileData);
}


function writeStudent(){
    fs.writeFileSync(data,JSON.stringify(data,null,2));
}



router.get("/",(req,res) => {
    const students = readStudent();
    res.json(students);
});

router.get("/student",(req,res) => {
    res.send("the first call is always for the route ,now defiine the route");
});

router.get("/:id",(req,res) => {
    const students = readStudent();
    const student = students.find(s => s.id === parseInt(req.params.id));
    if(!student) return res.status(404).send("student data not found");
    res.json(student);

//the below i have done it
    // let student_id = req.params.id;
    // res.send(`yes we have the student his name is ${student_id}`);
});

//POST method to registe new student
router.post("/register",(req,res) => {
    const data = JSON.parse(fs.readFileSync(student.json));
    const newStudent = req.body;
    data.push(newStudent);
    fs.writeFileSync(data,JSON.stringify(data));



    // console.log(`Thank you for register ${req.body}`);         //this line of code is tried by me for my concept 
    // const {name,email,student_id} = req.body;
    // res.send(`student name is ${name}, registered eamil is ${email} allowted id is ${student_id}`);

});


//PUT 
router.put("/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync(filePath));
  const id = parseInt(req.params.id);
  const updatedData = data.map(student =>
    student.id === id ? { ...student, ...req.body } : student
  );
  fs.writeFileSync(filePath, JSON.stringify(updatedData));
  res.json({ message: "Student updated! with new id and name ..!" });
});



//DELETE of student with id
router.delete("/:id", (req, res) => {
  const students = JSON.parse(fs.readFileSync(data));
  const id = parseInt(req.params.id);
    const updatedStudents = students.map(student =>
        student.id === id ? { ...student, ...req.body } : student
    );
    writeStudent(updatedStudents);
    res.json({ message: "Student updated with new data!" });

//   const filteredData = students.map(student => student.id !== id){

//   }
//   fs.writeFileSync(data, JSON.stringify(filteredData));
//   res.json({ message: "Student deleted!" });
});


module.exports = router;

