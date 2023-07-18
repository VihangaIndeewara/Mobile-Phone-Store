
const Customer=require('../model/Customer')

const req=require('express/lib/request')
const res=require('express/lib/response')

const saveCustomer=(req,res)=>{
    const tempCustomer=new Customer({
        cusId:req.body.cusId,
        cusName:req.body.cusName,
        cusContactNo:req.body.cusContactNo,
        cusAddress:req.body.cusAddress
    });

    Customer.findOne({cusId:req.body.cusId}).then((response)=>{
        if(response==null){
            tempCustomer.save().then(()=>{
               return res.status(200).json({message:"Saved Customer!!!"})
            })
        }else{
            res.status(400).json({message:"Customer Id Already Exists..."})
            
        }
    })
}

const getCustomer=(req,res)=>{
    res.status(200).json({message:"Saved Customer"})
}



module.exports={saveCustomer,getCustomer}