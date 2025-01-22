const fs=require("fs");

const wf=fs.writeFileSync("fsdata.txt","H",(err)=>{
console.log(err);
});
console.log("Write data successfully!!!");
