const mongoose=require("mongoose")

const ItemSchema=new mongoose.Schema({
    itemId:{
        type:String,
        required:true,
        unique:true
    },
    itemBrand:{
        type:String,
        required:true
    },
    itemColor:{
        type:String,
        required:true
    },
    itemQtyOnHand:{
        type:String,
        required:true
    },
    itemUnitPrice:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('Item',ItemSchema)
