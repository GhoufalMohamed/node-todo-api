const {mongoose}=require('../db/mongoose');
let User=mongoose.model('User',{
    FirstName:{
        type:String,
        required : true,
        minlength : 4
    },
    LastName:{
        type:String,
        required : true,
        minlength : 4
    },
    Email:{
        type:String,
        required : true,
        minlength : 4
    }
});
module.exports={
    User
}
