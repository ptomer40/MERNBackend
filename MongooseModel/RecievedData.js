const express=require('express');
const StudentSchema=require('./StudentSchema');
const dbconn=require('./DBConnect');
const app=express();
app.use(express.json());//always remember
const PORT=4000;
dbconn();
app.post('/studentData',(req,res)=>{
          const {sid,name,branch,college}=req.body;
          //console.log(data);
         const datamodal=new  StudentSchema({
            sid,
            name,
            branch,
            college

          });
          datamodal.save();
          res.send("Data recieved");
         // const st=new student({data.sid});
})

app.listen(PORT,()=>{
console.log("Server is running on"+PORT);
})
       