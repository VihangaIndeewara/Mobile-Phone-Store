const Login=require('../model/Login')

const req=require('express/lib/request');
const res=require('express/lib/response');

const checkLoginDetails=(req,res)=>{
    const username=req.body.username;
    const password=req.body.password
   
    Login.findOne({username:username}).then((result)=>{
        if(result==null){
            res.json({message:"Wrong Username"})
        }else{
            if(result.password==password){
                res.status(200).json({message:"true"})
            }else{
                res.json({message:"Wrong Password"})
            } 
        }

       
    }).catch((err)=>{
        res.status(500).json({message:err})
    })
}

module.exports={checkLoginDetails}