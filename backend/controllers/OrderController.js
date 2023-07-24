const Order = require("../model/Order");

const req=require('express/lib/request')
const res=require('express/lib/response')

const saveOrder=(req,res)=>{
    const tempOrder=new Order({
        orderId:req.body.orderId,
        cusId:req.body.cusId,
        mobile:req.body.mobile,
        totalAmount:req.body.totalAmount,
        date:req.body.date,
        time:req.body.time
    });

    Order.findOne({orderId:req.body.orderId}).then((response)=>{
        if(response==null){
            tempOrder.save().then(()=>{
                return res.status(200).json({message:"Saved Order!!!"})
            }).catch((err)=>{
                return res.status(500).json({message:err})
            })
        }else{
            return res.status(400).json({message:"Order Id Already Exists..."})
        }
    })

   
}

module.exports={saveOrder}