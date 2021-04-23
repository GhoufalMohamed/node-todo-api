var {mongoose}=require('./db/mongoose');
var {User}=require('./models/user');
var {Todo}=require('./models/todo');
var express=require('express');
var bodyParser=require('body-parser');
 var app=express();
 app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
    let todo=new Todo({
        text:req.body.text
    }).save().then((doc)=>{
        res.send(doc)
    }).catch((err)=>{
        res.send(err).status(400);
    })
})



 app.listen(3000,()=>{
     console.log(`App is runing on port 3000`);
 })
