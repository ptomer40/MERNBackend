const fs=require('fs');

//import * as fs from 'node:fs';
try{
const data=  fs.appendFileSync('fsdata.txt'," We r working on Node Js development",(err)=>{
console.log("Error appending file:"+err);
});
console.log("data append successfully");
}

catch(err){
console.log("Error while appending"+err);
}

//fs.writeFileSync("data.txt");
