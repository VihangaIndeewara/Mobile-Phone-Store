const express=require('express')
const router=express.Router();
const {saveCustomer,getAllCustomers, updateCustomer}=require('../controllers/CustomerController')


router.post('/',saveCustomer);
router.get('/',getAllCustomers);
router.put('/',updateCustomer);

module.exports=router;

