
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
            }).catch((err) => {
                res.status(500).json({message: err})
            })
        }else{
            res.status(400).json({message:"Customer Id Already Exists..."})
            
        }
    })
}

const updateCustomer= (req,res)=>{
    const cusId=req.body.cusId;
    const cusName=req.body.cusName;
    const cusContactNo=req.body.cusContactNo;
    const cusAddress=req.body.cusAddress;

   
        Customer.findOneAndUpdate({cusId:cusId},{
            $set: {
                cusName:cusName,
                cusContactNo:cusContactNo,
                cusAddress:cusAddress
            }

        }).then(()=>{
            return res.status(200).json({message:"Updated Customer!!!"})
        }).catch((err) => {
            res.status(500).json({message: err})
        })
}

  



const getAllCustomers=(req,res)=>{
    Customer.find().then((results)=>{
        return res.status(200).json(results)
    }).catch((err) => {
        res.status(500).json({message: err})
    })
}

const deleteCustomer=(req,res)=>{

    Customer.findOneAndDelete({cusId:req.params.cusId}).then(()=>{
       
        res.status(200).json({message:"Deleted Customer!!!"})
    }).catch((err)=>{
        res.status(500).json({message:err})
    })
}

//get customer details from given id
const getCustomerDetails=(req,res)=>{
  
    Customer.findOne({cusId:req.params.cusId}).then((result)=>{
        console.log(result)
        return res.status(200).json(result)
       
    }).catch((err)=>{
        return res.status(500).json({message:err})
    })
}



module.exports={saveCustomer,getAllCustomers,updateCustomer,deleteCustomer,getCustomerDetails}