const http=require('http');

const server=http.createServer((req,res)=>{
        res.setHeader('Content-Type','text/html');
       if(req.method=='GET' && req.url=='/msg')
       {
        res.end("<h1>Hello World</h1>");
       }else{
        res.statusCode=451;
        res.end("<h1 style='color:red'>No, Data Associated with /msg</h1>");
       }
        
})

server.listen(3003,()=>{
    console.log("Server running on",3003);
})