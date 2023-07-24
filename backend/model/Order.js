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
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('Order',OrderSchema)