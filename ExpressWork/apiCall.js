import express from 'express'
const app=express();
const PORT=3005;
app.use(express.json());
 app.get("/",(req,res)=>{
    res.send('Home Page crud');
})
app.get("/users",(req,res)=>{
    res.send('Users Page');
})
app.post("/user",(req,res)=>{
    console.log("hello"+req.body.id);
    const id=req.body.id;
    res.send(`${id} user Page`);
})

app.post("/useparam/:name",(req,res)=>{
    console.log(req.params);
    res.send(`user name get succssfully:${req.params}`);
})

app.post("/useQuery",(req,res)=>{
    console.log(req.query.branch);
    res.send(`Server Response:${req.query.branch}`);
})


app.post("/add",(req,res)=>{
    res.send('user added successfully');
})
app.put("/edit",(req,res)=>{
    res.send('user Edited successfully');
})
app.delete("/del",(req,res)=>{
    res.send('user Deleted successfully');
})
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})