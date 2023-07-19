const Item=require("../model/Item")

const req=require('express/lib/request');
const res=require('express/lib/response');

const saveItem=(req,res)=>{
    const tempItem=new Item({
        itemId:req.body.itemId,
        itemBrand:req.body.itemBrand,
        itemColor:req.body.itemColor,
        itemQtyOnHand:req.body.itemQtyOnHand,
        itemUnitPrice:req.body.itemUnitPrice
    });

    Item.findOne({itemId:req.body.itemId}).then((response)=>{
        if(response==null){
            tempItem.save().then(()=>{
                return res.status(200).json({message:"Saved Item!!!"})
            }).catch((err)=>{
                return res.status(500).json({message:err})
            })
        }else{
            return res.status(400).json({message:"Item Id Already Exists..."})
        }
    })   
}


const getAllItems=(req,res)=>{
    Item.find().then((result)=>{
        return res.status(200).json(result)
    }).catch((err)=>{
        return res.status(500).json(err)
    })
}



module.exports={saveItem,getAllItems}