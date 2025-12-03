const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://srishbh:MQzc5kpCNoiawksy@project1.wcxwd1a.mongodb.net/?appName=project1')
    .then(() => {
        console.log("DB connected sucessfully");
    })
    .catch((err) => {
        console.log("error while connection",err);
    })

const AdminSchema = new mongoose.Schema({
    username : String,
    password : String

})

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    coursePurchased : [{type: mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    imageLink : String,
    coursePrice : Number,

});

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema);

module.exports = {
    Admin,User,Course
}