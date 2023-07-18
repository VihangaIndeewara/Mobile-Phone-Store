const mongoose=require('mongoose')
const CustomerSchema=new mongoose.Schema({
    cusId:{
        type:String,
        required:true,
        unique:true
    },
    cusName:{
        type:String,
        required:true
    },
    cusContactNo:{
        type:String,
        required:true
    },
    cusAddress:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Customer',CustomerSchema)