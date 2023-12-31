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
                return res.status(200).json({message:"Saved Item !!!"})
            }).catch((err)=>{
                return res.json({message:err})
            })
        }else{
            return res.json({message:"Item Id Already Exists..."})
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


const updateItem=(req,res)=>{
    const id=req.body.itemId;
    const brand=req.body.itemBrand;
    const color=req.body.itemColor;
    const qtyOnHand=req.body.itemQtyOnHand;
    const unitPrice=req.body.itemUnitPrice;

    Item.findOneAndUpdate({itemId:id},{
        $set:{
            itemBrand:brand,
            itemColor:color,
            itemQtyOnHand:qtyOnHand,
            itemUnitPrice:unitPrice
        }
    }).then(()=>{
        return res.status(200).json({message:"Updated Item !!!"})
    }).catch((err)=>{
         res.status(500).json({message:err})
    })
}

const deleteItem=(req,res)=>{
    Item.findOneAndDelete({itemId:req.params.itemId}).then(()=>{
        return res.status(200).json({message:"Deleted Item !!!"})
    }).catch((err)=>{
        return res.status(500).json({message:err})
    })
}

//get item details from given id

const getItemDetails=(req,res)=>{
    Item.findOne({itemId:req.params.itemId}).then((result)=>{
        return res.status(200).json(result)
    }).catch((err)=>{
        return res.status(500).json(err)
    })
}

//uddate item qtyonhand from given id

const updateQtyOnHand=(req,res)=>{
    const itemId=req.body.itemId;
    const itemQtyOnHand=req.body.itemQtyOnHand

    Item.findOneAndUpdate({itemId:itemId},{
        $set:{
            itemQtyOnHand:itemQtyOnHand
        }
    }).then(()=>{
       res.json("true")
    }).catch((err)=>{
        res.json(err)
    })
}



module.exports={saveItem,getAllItems,updateItem,deleteItem,getItemDetails,updateQtyOnHand}