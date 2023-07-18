const express=require('express')
const router=express.Router();
const {saveCustomer,getCustomer}=require('../controllers/CustomerController')


router.post('/',saveCustomer);
router.get('/',getCustomer)

module.exports=router;

