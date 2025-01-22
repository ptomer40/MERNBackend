// const fs=require('fs');
// //const fdata=fs.readFileSync('data.txt');//without encoding scheme
// //console.log(fdata);
// //const fdata1=fs.readFileSync('data.json'); // with encoding scheme like utf8, base64,hex base 16 
// var arr=[]; 
// //arr[0]="heelllll";
// //console.log("hiiii"+arr);

// fs.readFile("data.json",(err,data)=>{
//     if(err){
//         console.log("Eroror is"+err);
//     }
//     else{
//    arr=JSON.parse(data);
   
  
//     }
    
// });
// console.log(arr[0]);
// //console.log(arr);
// //const data3= JSON.parse(fdata2);// parse data into json
// //console.log(data3);

// //console.log(data2[0].name);
//  //fdata2.close();
// console.log("ended");

const fs=require('fs').promises;
let arr=new Array();
async function jsonreadFile(){
            const data1=await fs.readFile("data.json");
              return JSON.parse(data1);
                        
            }
             // way to handle promise
            jsonreadFile().then((data)=>{
                console.log("Recieved Data:"+JSON.stringify(data[0]))
                arr.push(JSON.stringify(data[0]))
            }).catch((err)=>{
               console.log("Error while promose handling:"+err);
            });

          
           setTimeout(()=>{
            console.log("heuuuuu:"+arr);
           },2000);
            
           
          




