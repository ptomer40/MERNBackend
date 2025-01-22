const http = require('http');

const PORT = 3002;
let count = 0;

const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/html');
  console.log("inside1");

  // Send the response and close the stream
  setTimeout(()=>res.end("<h2>Hello Node, How are you?</h2>"),1000);
console.log("hiiiii");
  
});

// Start the server
server.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
