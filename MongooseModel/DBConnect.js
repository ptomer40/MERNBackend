const mongoose=require('mongoose');
function dbConn(){
mongoose.connect('mongodb://localhost:27017/MERNFSD', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("Connected to MongoDB");
  }).catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
}
  module.exports = dbConn;