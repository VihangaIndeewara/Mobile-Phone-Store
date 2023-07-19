
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

const updateCustomer= (req,res)=>{
    const cusId=req.body.cusId;
    const cusName=req.body.cusName;
    const cusContactNo=req.body.cusContactNo;
    const cusAddress=req.body.cusAddress;

    Customer.findOne({cusId:cusId}).then((response)=>{
        if(response==null){
            res.status(400).json({message:"Wrond Customer Id..."})
        
     
        }else{
            Customer.updateOne({cusId:cusId},{
                $set: {
                    cusName:cusName,
                    cusContactNo:cusContactNo,
                    cusAddress:cusAddress
                }

            }).then(()=>{
                return res.status(200).json({message:"Updated Customer!!!"})
            })
        }
    })

  

}

const getAllCustomers=(req,res)=>{
    Customer.find().then((results)=>{
        return res.status(200).json(results)
    })
}



module.exports={saveCustomer,getAllCustomers,updateCustomer}