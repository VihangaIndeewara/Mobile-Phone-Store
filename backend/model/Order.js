const mongoose=require("mongoose")

const OrderSchema=new mongoose.Schema({
    orderId:{
        type:String,
        required:true,
        unique:true
    },
    cusId:{
        type:String,
        required:true
    },
    mobile:{
        type:Array,
        required:true
    },
    totalAmount:{
        type:Double,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String
    }

})

module.exports=mongoose.model('Order',OrderSchema)