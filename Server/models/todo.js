const {mongoose}=require('../db/mongoose');
let Todo=mongoose.model('Todo',{
    text:{
        type:String,
        required : true,
        default:'rien'
    },
    completed:{
        type:Boolean,
        default : false
    },
    completedAt:{
        type:Number,
        default : null
    }
});
module.exports={
    Todo
}