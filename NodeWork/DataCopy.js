const fs=require('fs');
const arr=new Array();

function readData(){
            const d= fs.readFileSync('data.json','utf8');
            console.log(d);
            // const d1=JSON.stringify(d);
             fs.writeFileSync("newdata.json",d);
             console.log("Data Written");
}
 readData();
   