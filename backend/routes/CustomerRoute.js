const express=require('express')
const router=express.Router();
const {saveCustomer,getAllCustomers, updateCustomer,deleteCustomer}=require('../controllers/CustomerController')


router.post('/',saveCustomer);
router.get('/',getAllCustomers);
router.put('/',updateCustomer);
router.delete('/:cusId',deleteCustomer)

module.exports=router;

