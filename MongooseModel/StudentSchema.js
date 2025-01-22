const mongoose=require('mongoose');
const student=new mongoose.Schema({
sid:{type:Number,required:true, unique:true},
name:{type:String,required:true},
branch:{type:String,required:true},
college:{type:String,required:true}
});
const studentModal=mongoose.model('student',student);
module.exports = studentModal;