const express=require('express')
const router=express.Router();
const {saveCustomer,getCustomer, updateCustomer}=require('../controllers/CustomerController')


router.post('/',saveCustomer);
router.get('/',getCustomer);
router.put('/',updateCustomer);

module.exports=router;

