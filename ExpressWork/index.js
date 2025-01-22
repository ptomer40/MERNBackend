import express from 'express';
const app=express();
app.get('/',(req,res)=>{
    res.send("HOME PAGE");

})
app.post('/',(req,res)=>{
    res.send("Post Request");
    
})
app.listen(4000,()=>{
 console.log(`Server running on port 4000`);

})