const mongoose = require("mongoose");

mongoose.connect('');

const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
})

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    CoursePurchased : [{type: mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title : String,
    descrption : String,
    imageLink : String,
    coursePrice : Number,

});

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema);