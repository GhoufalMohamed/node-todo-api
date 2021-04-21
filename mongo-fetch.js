const {MongoClient}=require('mongodb');
MongoClient.connect("mongodb://localhost:27017/TodoApp").then((client)=>{
console.log("Connected to the database succesfully!");
const db=client.db('TodoApp');
db.collection('Todos').find().toArray().then((res)=>{
    console.log(res);
})
})
.catch((err)=>{
console.log(err);
})

