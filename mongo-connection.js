const {MongoClient}=require('mongodb');
MongoClient.connect("mongodb://localhost:27017/TodoApp").then((client)=>{
console.log("Connected to the database succesfully!");

})
.catch((err)=>{
console.log(err);
})
